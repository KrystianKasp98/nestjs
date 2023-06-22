import { process } from 'uniqid';
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    {
      name: 'test',
      breed: 'default',
      age: 0,
      id: '6pglj7opxbe',
    },
  ];

  create(cat: CreateCatDto) {
    const newCat = { ...cat, age: 0, id: process() };
    this.cats.push(newCat);

    return newCat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string): Cat {
    const res = this.cats.find((cat) => cat.id === id);
    return res;
  }

  update(id: string, catUpdate: CreateCatDto) {
    let updatedCat = null;

    this.cats = this.cats.map((cat) => {
      if (cat.id === id) {
        updatedCat = { ...catUpdate, id: cat.id, age: cat.age };
        return updatedCat;
      }

      return cat;
    });

    return updatedCat;
  }
}
