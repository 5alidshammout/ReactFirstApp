import ListGroup from "./components/ListGroup.tsx";
import DeleteButton from "./components/DeleteButton.tsx";
import AlertDialog from "./components/AlertDialog.tsx";
import { useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [arr] = useState(["A", "B", "C", "D", "E", "F"]);
  const [alertShown, setAlertShown] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <ListGroup
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          heading={"Hello"}
          arr={arr}
          classname={"mb-4"}
        />
        <DeleteButton
          onDelete={(_) =>
            activeIndex !== -1
              ? (arr.splice(activeIndex, 1), setActiveIndex(-1))
              : setAlertShown(1)
          }
        />
      </div>
      <AlertDialog
        visibilty={alertShown}
        removeFn={(_) => setAlertShown(0)}
        content="Select Item Before Deleting!!!"
      />
    </>
  );
}

export default App;
