import React from "react";

const GroceryItems = ({ item, handleDelete }) => {
  return (
    <>
      <li className="flex items-center justify-between py-4">
        <span className="text-xl font-semibold capitalize tracking-wider">
          {item.item}
        </span>
        <div className="flex gap-3">
          <button className="rounded-lg bg-yellow-500 px-6 py-2 font-semibold tracking-wide outline-none hover:opacity-80">
            Edit
          </button>
          <button
            className="rounded-lg bg-emerald-500 px-6 py-2 font-semibold tracking-wide outline-none hover:opacity-80"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default GroceryItems;
