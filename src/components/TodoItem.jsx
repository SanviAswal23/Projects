import "./TodoApp.css";

export default function TodoItem({ todo, onDelete, onMarkAsDone }) {
  return (
    <li className="todo-item">
  <span className={todo.isDone ? "done" : ""}>{todo.task}</span>
  <div>
    <button onClick={() => onMarkAsDone(todo.id)}>Done</button>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
</li>
  );
}
