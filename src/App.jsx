import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import TodoStore from './components/TodoStore';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path="/notestore" element={<TodoStore />} />
      </Routes>
    </>
  );
}

export default App;

