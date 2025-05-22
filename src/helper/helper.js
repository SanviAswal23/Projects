import { v4 as uuidv4 } from "uuid";

export function addTodo(todos, task, category) {
  if (task.trim() === "") {
    return todos;
  } else {
    return [...todos, { task, id: uuidv4(), isDone: false, category: category }];
  }
}

export function deleteTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}

export function markAsDone(todos, id) {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, isDone: true } : todo
  );
}

export function markAllAsDone(todos) {
  return todos.map((todo) => ({
    ...todo,
    isDone: true,
  }));
}

export function onCategoryChange(){
  return todos.ma
}