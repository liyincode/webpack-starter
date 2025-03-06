import { TodoFilterType } from "../../types/todo";
import { Button } from "../UI/Button";

interface TodoFilterProps {
  filter: TodoFilterType;
  onFilterChange: (filter: TodoFilterType) => void;
  onClearCompleted: () => void;
  hasCompleted: boolean;
}

export default function TodoFilter({
  filter,
  onFilterChange,
  onClearCompleted,
  hasCompleted,
}: TodoFilterProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-x-2">
        <FilterButton
          active={filter === "all"}
          onClick={() => onFilterChange("all")}
        >
          All
        </FilterButton>
        <FilterButton
          active={filter === "active"}
          onClick={() => onFilterChange("active")}
        >
          Active
        </FilterButton>
        <FilterButton
          active={filter === "completed"}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </FilterButton>
      </div>

      {hasCompleted && (
        <Button onClick={onClearCompleted} variant="ghost" size="sm">
          Clear completed
        </Button>
      )}
    </div>
  );
}

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1 text-sm transition-colors ${
        active
          ? "bg-purple-100 text-purple-700"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}
