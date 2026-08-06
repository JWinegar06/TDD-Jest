type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          aria-label={text}
        />

        <span>{text}</span>
      </label>

      <button
        type="button"
        onClick={() => onDelete(id)}
        aria-label={`Delete ${text}`}
      >
        Delete
      </button>
    </li>
  );
}
