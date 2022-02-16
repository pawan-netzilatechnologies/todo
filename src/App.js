import { Routes, Route } from "react-router-dom";

import TodosList from "./components/TODO_List/todos-list.component";
import CreateTodos from "./components/Create_TODO/create-todo.component";
import EditTodos from "./components/Edit_TODO/edit-todo.component";
import { Header } from "./components/Header/header.component";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<TodosList />} />
        <Route path="/edit/:id" element={<EditTodos />} />
        <Route path="/create" element={<CreateTodos />} />
      </Routes>
    </div>
  );
}

export default App;
