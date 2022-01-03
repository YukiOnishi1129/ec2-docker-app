import type { NextPage } from 'next';
import React from 'react';
/* apis */
import { fetchTodoList } from '@/apis/TodoApi';
/* interface */
import { Todo } from '@/interfaces/Todo';
/* styles */
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  /* local */
  const [todoList, setTodoList] = React.useState<Todo[]>([]);

  /**
   * fetchData
   */
  const fetchData = async () => {
    const data = await fetchTodoList();
    setTodoList(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <section>
        {todoList.map((todo) => (
          <div key={todo.id}>
            <h6>{todo.title}</h6>
            <p>{todo.comment}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
