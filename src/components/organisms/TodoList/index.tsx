import React from 'react';
import TodoItem from '../../molecules/TodoItem';
import { Todo } from '../../templates/TodoTemplate';
import styles from './style.module.css';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
