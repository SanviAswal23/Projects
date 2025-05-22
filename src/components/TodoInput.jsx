import "./TodoApp.css";
export default function TodoInput({ value, onChange, onAdd, selectedCategory, onCategoryChange, categories }) {
  const handleAddClick = () => {
    onAdd(selectedCategory);
  };
  return (
    <div className="todo-input-wrapper">
      <input
        className="todo-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add a new task..."
      />
      <select
        className="todo-category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        className="todo-add-button"
        onClick={handleAddClick}
        disabled={!value.trim()}
      >
        Add
      </button>
    </div>
  );
}
