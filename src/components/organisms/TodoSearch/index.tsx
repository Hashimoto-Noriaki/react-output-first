import React from 'react';
import Input from '../../atoms/Input';
import styles from './style.module.css';

interface TodoSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const TodoSearch: React.FC<TodoSearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.searchContainer}>
      <Input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="検索..."
      />
    </div>
  );
};

export default TodoSearch;
