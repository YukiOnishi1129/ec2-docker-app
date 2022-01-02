require('module-alias/register');
import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';
/* entities */
import { Todo } from '@/todo/entities/todo.entity';

interface Context {
  id: number;
}

define(Todo, (faker: typeof Faker, context: Context) => {
  const { id } = context;

  const todo = new Todo();
  todo.title = `${faker.lorem.word()}${id}`;
  todo.comment = `${faker.lorem.word()}${id}`;

  return todo;
});
