import { MouseEvent } from "react";
interface Props {
  onDelete?: (e: MouseEvent) => void;
}

function DeleteButton({ onDelete }: Props) {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl transition-all w-40 h h-20 text-3xl"
      onClick={onDelete}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
