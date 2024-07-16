import { MouseEvent } from "react";

interface Props {
  removeFn: (e: MouseEvent) => void;
  visibilty: number;
  content: string;
}

function AlertDialog({ removeFn, visibilty, content }: Props) {
  return (
    <div
      className="flex justify-between bg-red-600 text-slate-200 p-5 text-5xl m-3 absolute top-0 transition-all duration-300 ease-out"
      style={{
        width: "calc(100% - 1.5rem)",
        opacity: visibilty,
      }}
    >
      <h1 className="font-bold">{content}</h1>
      <button onClick={removeFn}>&#10006;</button>
    </div>
  );
}

export default AlertDialog;
