import { process } from 'uniqid';
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto) {
    const newCat = { ...cat, age: 0, id: process() };
    this.cats.push(newCat);

    return newCat;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
