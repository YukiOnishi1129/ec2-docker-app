import axiosClientSideRendering from '@/config/axiosClientSideRendering';
import axiosServerSideRendering from '@/config/axiosServerSideRendering';
import { Todo } from '@/interfaces/Todo';

/**
 * fetchServerSideTodoListApi
 * @returns
 */
export const fetchServerSideTodoListApi = async (): Promise<Todo[]> => {
  const resultTodoList: Todo[] = [];
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
