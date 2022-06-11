import React, { useState } from "react";

function List(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(props.data);

  const editFn = (event) => {
    event.preventDefault();
    if (value !== "") {
      props.dispatch({ type: "edit", value: value, index: props.index });
      setIsEdit(false);
    }
  };
  const deleteFn = () => {
    props.dispatch({ type: "delete", value: value, index: props.index });
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <li className="list">{props.data}</li>
      {isEdit ? (
        <div>
          <input
            className="editTask"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            required
          />
          <button className="saveTask btns" onClick={editFn}>Save</button>
        </div>
      ) : null}
      <button
        className="edit btns"
        onClick={() => {
          setIsEdit(true);
        }}
      >
        Edit
      </button>
      <button className="delete btns" onClick={deleteFn}>
        Delete
      </button>
    </div>
  );
}

export default List;
