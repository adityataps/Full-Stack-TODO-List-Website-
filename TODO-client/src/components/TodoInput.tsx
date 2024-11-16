import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { TextField } from "@mui/material";
import { useState } from "react";

export function TodoInput({ addTodo }: any) {
  const [inputValue, setInputValue] = useState<string>("");

  function onChangeTextValue(event: any) {
    console.log("input value : ", event.target.value);
    setInputValue(event.target.value);
  }

  function handleAddNewTodo() {
    addTodo({ todoItem: inputValue, isComplete: false });
    setInputValue("");
  }

  return (
    <div className="todo-input">
      <PanoramaFishEyeIcon></PanoramaFishEyeIcon>
      <TextField
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddNewTodo();
          }
        }}
        onChange={onChangeTextValue}
        placeholder="Create a new todo..."
        color="primary"
        className="text-field"
        label=""
        variant="filled"
        slotProps={{
          input: {
            style: {
              color: "#ffffff",
              paddingBottom: 12,
              // fontSize: 18,
              fontWeight: 200,
            },
            disableUnderline: true,
          },
        }}
      />
    </div>
  );
}
