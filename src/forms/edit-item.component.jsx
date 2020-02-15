import React, { useState, useEffect } from "react";

const EditItem = props => {
  const [item, setItem] = useState(props.currentItem);

  //Allow the EditItem component know the props has changed
  useEffect(() => {
    setItem(props.currentItem);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setItem({ ...item, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateItem(item.id, item);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={handleInputChange}
      />
      <button>Update item</button>
     
      
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditItem;