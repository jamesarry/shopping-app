import React from "react";


const ShoppingList = props => (
  <table className="display-item">
    <thead>
      <tr></tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(item);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteItem(item.id)}
                className="button muted-button"
              >
                Remove
              </button>

              <input type="checkbox" />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No item</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ShoppingList;