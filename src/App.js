import logo from './logo.svg';
import './App.css';
import Includes from './components/Includes/Includes';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {

  const [todo, setTodo] = useState([
    // {
    //   id: 1,
    //   title: 'first todo',
    //   status: true
    // },
    // {
    //   id: 2,
    //   title: 'second todo',
    //   status: true
    // },
    // {
    //   id: 3,
    //   title: 'third todo',
    //   status: false
    // }
  ])


  return (
    <Container>
      <Includes />
      <AddTodo todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
