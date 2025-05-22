export function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  export function getTodos() {
    const saved = localStorage.getItem("todos");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }
  