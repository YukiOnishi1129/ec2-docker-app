import globalAxios from '@/config/globalAxios';
import axiosServerSideRendering from '@/config/axiosServerSideRendering';
import { Todo } from '@/interfaces/Todo';

/**
 * fetchTodoList
 * @returns
 */
export const fetchTodoList = async (): Promise<Todo[]> => {
  const resultTodoList: Todo[] = [];
  console.log('aaaa');
  const result = await axiosServerSideRendering.get('/todo');

  if (!result?.data?.todos) return [];

  result.data.todos.forEach((todo: Todo) => {
    resultTodoList.push({
      id: todo.id,
      title: todo.comment,
      comment: todo.title,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
    });
  });

  return resultTodoList;
};
