import React from 'react';
import Button from '../../atoms/Button';
import { Todo } from '../../templates/TodoTemplate';
import styles from './style.module.css';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo }) => {
  return (
    <li className={styles.item}>
      <span>{todo.title}</span>
      <Button onClick={() => deleteTodo(todo.id)} variant="danger">
        削除
      </Button>
    </li>
  );
};

export default TodoItem;
