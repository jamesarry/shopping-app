import React, { useState, Fragment } from "react";

import ShoppingList from "./tables/shopping-list.component";
import AddItem from "./forms/add-item.component";
import EditItem from "./forms/edit-item.component";

import "./App.css";

const App = () => {
  //Data
  const itemData = [
    { id: 1, name: "Egg" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Milk" }
  ];

  const initialItemState = { id: null, name: "" };

  //Setting state
  const [items, setItems] = useState(itemData);
  const [currentItem, setCurrentItem] = useState(initialItemState);
  const [editing, setEditing] = useState(false);

  //Add items
  const addItem = item => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  //Delete item.  take the ID of the user and filter them out of the user array
  const deleteItem = id => {
    setEditing(false);
    setItems(items.filter(item => item.id !== id));
  };

  //Update item
  const updateItem = (id, updatedItem) => {
    setEditing(false);
    setItems(items.map(item => (item.id === id ? updatedItem : item)));
  };

  //function to edit item. Turn on edit mode and set a current item
  const editRow = item => {
    setEditing(true);
    setCurrentItem({ id: item.id, name: item.name });
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit Item</h2>
              <EditItem
                editing={editing}
                setEditing={setEditing}
                currentItem={currentItem}
                updateItem={updateItem}
              />
            </Fragment>
          ) : (
            <Fragment>
              <AddItem addItem={addItem} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <ShoppingList
            items={items}
            editRow={editRow}
            deleteItem={deleteItem}
          />
        </div>
      </div>
    </div>
  );
};

export default App;