import React, { useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import styles from './style.module.css';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいTodoを追加..."
      />
      <Button type="submit">追加</Button>
    </form>
  );
};

export default TodoForm;
