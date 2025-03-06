import { useState, KeyboardEvent } from "react";
import { Button } from "../UI/Button";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="mt-4 flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        className="flex-1 rounded-l-md p-2 focus:ring-2 focus:ring-purple-300 focus:outline-none"
      />
      <Button
        onClick={handleSubmit}
        variant="primary"
        className="rounded-l-none"
      >
        Add
      </Button>
    </div>
  );
}

export default TodoInput;
