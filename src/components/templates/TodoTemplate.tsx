import React, { useState } from 'react';
import TodoForm from '../organisms/TodoForm';
import TodoSearch from '../organisms/TodoSearch';
import TodoList from '../organisms/TodoList';
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../../constants/data';

export interface Todo {
  id: number;
  title: string;
}

const TodoTemplate: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(INIT_TODO_LIST);
  const [uniqueId, setUniqueId] = useState<number>(INIT_UNIQUE_ID);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = { id: uniqueId + 1, title };
    setTodos([...todos, newTodo]);
    setUniqueId(uniqueId + 1);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todoリスト</h1>
      {/* 追加フォームを先に表示 */}
      <TodoForm addTodo={handleAddTodo} />
      {/* 検索フォームは追加フォームの下に配置 */}
      <TodoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Todoリスト（デフォルトのTodo1, Todo2 など）を表示 */}
      <TodoList todos={filteredTodos} deleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default TodoTemplate;
