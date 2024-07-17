import { MouseEvent } from "react";
import ListItem from "./ListItem.tsx";

interface Props {
  arr: string[];
  heading?: string;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  classname?: string;
}

function ListGroup({
  arr,
  heading,
  activeIndex,
  setActiveIndex,
  classname,
}: Props) {
  return (
    <div className={"flex flex-col " + classname}>
      <h1 className="text-slate-800 font-semibold text-6xl m-6">{heading}</h1>
      <ul>
        {arr.map((item, index) => (
          <ListItem
            key={index}
            classnames={[
              activeIndex === index
                ? "!bg-blue-300 hover:!bg-blue-400 !text-blue-700 hover:!text-blue-900 !border-blue-700 hover:!border-blue-900"
                : "",
              index === 0 ? "rounded-t-xl border-t-4" : "",
              index === arr.length - 1 ? "rounded-b-xl border-b-4" : "",
            ]}
            onClick={(e: MouseEvent) => {
              if (activeIndex === index) {
                setActiveIndex(-1);
              } else {
                setActiveIndex(index);
              }
              console.log(e.target);
            }}
          >
            {item}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
