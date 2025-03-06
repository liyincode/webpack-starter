interface BadgeProps {
  count: number;
}

export function Badge({ count }: BadgeProps) {
  return (
    <div className="bg-opacity-30 rounded-full bg-purple-950 px-3 py-1 text-sm font-medium text-white">
      {count} {count === 1 ? "task" : "tasks"} left
    </div>
  );
}
