import "./TodoApp.css";

export default function TodoActions({ onMarkAllAsDone }) {
  return (
    <div className="todo-actions">
      <button onClick={onMarkAllAsDone}>Mark All As Done</button>
    </div>
  );
}
