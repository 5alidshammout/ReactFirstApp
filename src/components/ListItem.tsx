import { ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  classnames?: Array<string>;
  onClick?: (event: MouseEvent) => void;
}

function ListItem({ children, ...props }: Props) {
  return (
    <li
      className={
        "text-lime-800 hover:text-lime-900 bg-lime-200 hover:bg-lime-300 border-lime-800 hover:border-lime-900 border-x-4 border-solid p-3 text-2xl font-semibold !transition-colors" +
        " " +
        props.classnames?.join(" ")
      }
      {...props}
    >
      {children}
    </li>
  );
}
export default ListItem;
