
import './App.css';
import TodoItem from './TodoItem';

function App() {

  const todo = {
    id:1,
    text:"My Task",
    completed: true
  };




  return (
    <div className="App">
      <header className="App-header">
    <TodoItem id={todo.id} text={todo.text} completed={todo.completed}  />   
      </header>
    </div>
  );
}

export default App;
