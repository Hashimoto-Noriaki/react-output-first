import React from 'react';
import TodoTemplate from './components/templates/TodoTemplate';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <TodoTemplate />
    </div>
  );
};

export default App;