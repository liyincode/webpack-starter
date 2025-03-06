import { useState, useEffect } from "react";
import { Todo, TodoFilterType } from "../../types/todo";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { Badge } from "../UI/Badge";
import TodoFilter from "./TodeFilter";
import emptyIcon from "@/assets/empty-state.svg";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos).map((todo: Todo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
    }
    return [];
  });

  const [filter, setFilter] = useState<TodoFilterType>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text,
          status: "active",
          createdAt: new Date(),
        },
      ]);
    }
  };

  const updateTodoStatus = (id: string, status: "active" | "completed") => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status } : todo)),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.status !== "completed"));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    return todo.status === filter;
  });

  const activeTodos = todos.filter((todo) => todo.status === "active").length;

  return (
    <div className="mx-auto my-10 max-w-lg overflow-hidden rounded-xl bg-white shadow-lg md:max-w-xl">
      <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">TodoList</h1>
          <Badge count={activeTodos} />
        </div>
        <TodoInput onAdd={addTodo} />
      </div>

      <div className="p-4">
        {filteredTodos.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onStatusChange={updateTodoStatus}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <img
              src={emptyIcon}
              alt="No todos"
              className="mb-4 h-40 w-40 opacity-50"
            />
            <p className="text-gray-500">No todos to display</p>
          </div>
        )}

        {todos.length > 0 && (
          <div className="mt-4 border-t pt-4">
            <TodoFilter
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
              hasCompleted={todos.some((todo) => todo.status === "completed")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;
