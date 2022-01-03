import { NextPage, GetServerSideProps } from 'next';
import React from 'react';
/* apis */
import { fetchServerSideTodoListApi } from '@/apis/TodoApi';
/* interface */
import { Todo } from '@/interfaces/Todo';
/* styles */
import styles from '@/styles/Home.module.css';

/**
 * HomePageProps
 */
interface HomePageProps {
  todoList: Todo[];
}

/**
 * Home
 * @param {HomePageProps} props
 * @returns
 */
const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
  /* props */
  const { todoList } = props;

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

/**
 * getServerSideProps
 * @returns
 */
export const getServerSideProps: GetServerSideProps = async () => {
  // Todo一覧データ取得 ---------
  const todoList = await fetchServerSideTodoListApi();

  const props: HomePageProps = {
    todoList,
  };

  return { props };
};

export default Home;
