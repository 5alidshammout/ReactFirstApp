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
                ? "!bg-fuchsia-300 hover:!bg-fuchsia-400 !text-fuchsia-600 hover:!text-fuchsia-800 !border-fuchsia-600 hover:!border-fuchsia-800"
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
