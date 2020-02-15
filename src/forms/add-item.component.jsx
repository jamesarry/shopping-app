import React, { useState } from "react";

const AddItem = props => {
  const initialItemState = { id: null, name: "" };
  const [item, setItem] = useState(initialItemState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setItem({ ...item, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!item.name) return;

        props.addItem(item);
        setItem(initialItemState);
      }}
    >
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  );
};

export default AddItem;