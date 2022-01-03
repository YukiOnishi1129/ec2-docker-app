require('module-alias/register');
import { getRepository } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
/* entities */
import { Todo } from '@/todo/entities/todo.entity';

export default class CreateTodos implements Seeder {
  public async run(factory: Factory) {
    const todoRepository = getRepository(Todo);
    const todoMax = await todoRepository.count();

    await (async () => {
      // 10個のデータを作成
      for (let insertId = todoMax + 1; insertId <= todoMax + 10; insertId++) {
        await factory(Todo)({
          id: insertId,
        }).create();
      }
      return Promise.resolve();
    })();
  }
}
