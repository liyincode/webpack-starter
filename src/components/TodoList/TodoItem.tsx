import { Todo, TodoStatus } from "../../types/todo";
import { Checkbox } from "../UI/Checkbox";
import { Button } from "../UI/Button";

interface TodoItemProps {
  todo: Todo;
  onStatusChange: (id: string, status: TodoStatus) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ todo, onStatusChange, onDelete }: TodoItemProps) {
  const handleStatusChange = () => {
    const newStatus: TodoStatus =
      todo.status === "active" ? "completed" : "active";
    onStatusChange(todo.id, newStatus);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="group flex items-center justify-between rounded-md px-2 py-3 hover:bg-gray-50">
      <div className="flex flex-1 items-center">
        <Checkbox
          checked={todo.status === "completed"}
          onChange={handleStatusChange}
        />
        <span
          className={`ml-3 text-gray-700 ${
            todo.status === "completed" ? "text-gray-400 line-through" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      <Button
        onClick={handleDelete}
        variant="danger"
        size="sm"
        className="opacity-0 transition-opacity group-hover:opacity-100"
      >
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;
