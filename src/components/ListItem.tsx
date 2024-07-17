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
        "text-slate-800 hover:text-slate-900 bg-slate-200 hover:bg-slate-300 border-slate-800 hover:border-slate-900 border-x-4 border-solid p-3 text-2xl font-semibold !transition-colors" +
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
