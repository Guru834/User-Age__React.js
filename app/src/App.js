import "./App.css";
import React, { useState } from "react";
import AddInformation from "./components/AddInformation";
import DisplayInformation from "./components/DisplayInformation";

function App() {
  const [data, setData] = useState([]);
  let updatedData = data;

  function handleSavedInfo(userInformation) {
    setData((prevState) => {
      return [userInformation, ...prevState];
    });
  }
  console.log(data);
  function handleDelete(id) {
    console.log("clicked", id);
    setData((prevState) => {
      updatedData = prevState.filter((updateId) => updateId.id !== id);
      return updatedData;
    });
    console.log(updatedData);
  }
  return (
    <div>
      <AddInformation onSaveInformation={handleSavedInfo} />
      {updatedData.map((item) => {
        return (
          <DisplayInformation
            onDeleteHandler={handleDelete}
            key={item.id}
            id={item.id}
            username={item.username}
            age={item.age}
          />
        );
      })}
    </div>
  );
}

export default App;
