export type TodoStatus = "active" | "completed";

export type TodoFilterType = "all" | TodoStatus;

export interface Todo {
  id: string;
  text: string;
  status: TodoStatus;
  createdAt: Date;
}
