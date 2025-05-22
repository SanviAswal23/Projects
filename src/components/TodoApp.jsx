import { useEffect, useState } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoItem from "./TodoItem.jsx";
import TodoActions from "./TodoActions.jsx";
import { addTodo, deleteTodo, markAsDone, markAllAsDone } from "../helper/helper.js";
import { getTodos, saveTodos } from "../helper/localStorage.js";
import "./TodoApp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';



export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const categories = ["Work/Professional", "Personal/Home", "Shopping", "Health & Fitness", "Learning/Development", "Financial", "Social", "Urgent/Important", "Later/Someday"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const handleAdd = (category) => {
    const updatedTodos = addTodo(todos, newTodo, category);
    setTodos(updatedTodos);
    setNewTodo("")
    setSelectedCategory("");
  };

  const handleDelete = (id) => {
    setTodos(deleteTodo(todos, id));
  };

  const handleMarkAsDone = (id) => {
    setTodos(markAsDone(todos, id));
  };

  const handleMarkAllAsDone = () => {
    setTodos(markAllAsDone(todos));
  };

  const groupedTodos = todos.reduce((acc, todo) => {
    const category = todo.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(todo);
    return acc;
    }, {});
  
  return (
    <div className="body yellow-theme">
      <div className="todo-card">
        <div className="todo-header">
          <h1>TaskFlow</h1>
          <p>Organize your day with ease</p>
        </div>

        <TodoInput
          value={newTodo}
          onChange={setNewTodo}
          onAdd={handleAdd}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        <div className="task-header">
          <h3>My Tasks</h3>
          <span className="task-count">{todos.length} tasks</span>
        </div>

        {todos.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon"><FontAwesomeIcon icon={faClipboardList} fade style={{ color: "#FFD43B" }} />
            </div>
            <p className="empty-text">No tasks yet</p>
            <p className="empty-subtext">Add a task to get started</p>
          </div>
        ) : 
          Object.entries(groupedTodos).map(([category, todosInCategory]) => (
            <div key={category} className="todo-category-group">
              <h3 className="category-heading">{category}</h3>
              <ul>
                {todosInCategory.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={handleDelete}
                    onMarkAsDone={handleMarkAsDone}
                  />
                ))}
              </ul>
            </div>
          ))}

        {todos.length > 0 && <TodoActions onMarkAllAsDone={handleMarkAllAsDone} />}
      </div>
    </div>
  );
}
