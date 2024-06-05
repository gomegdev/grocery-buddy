import React, { useState } from "react";
import GroceryItems from "./GroceryItems";

const GroceryComponent = () => {
  const [item, setItem] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);

  const handleAddItem = () => {
    if (item.trim() !== "") {
      const newItem = { id: crypto.randomUUID(), item };
      setGroceryItems([...groceryItems, newItem]);
      setItem("");
    }
  };

  const handleDelete = (id) => {
    const updatedGroceryItems = groceryItems.filter((item) => item.id !== id);
    setGroceryItems(updatedGroceryItems);
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-6 text-white">
      <h1 className="text-center text-4xl font-semibold">Grocery Buddy</h1>
      <div className="flex w-full justify-between gap-3">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="Add item..."
          className="w-full rounded-lg px-4 text-slate-900 shadow-lg outline-none focus:ring focus:ring-emerald-500"
        />
        <button
          className="rounded-lg border border-white px-8 py-2 shadow-lg hover:ring hover:ring-emerald-500"
          onClick={handleAddItem}
        >
          Add
        </button>
      </div>
      <ul className="flex flex-col divide-y divide-sky-200">
        {groceryItems.map((item) => (
          <GroceryItems key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default GroceryComponent;
