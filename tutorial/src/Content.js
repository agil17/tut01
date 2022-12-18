import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "bag of flour"
    },
    {
      id: 2,
      checked: false,
      item: "milk"
    },
    {
      id: 3,
      checked: false,
      item: "almonds"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    // console.log(id);
  }

  return (
    <main>
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label 
                onDoubleClick={() => handleCheck(item.id)}
                style={(item.checked) ? {textDecoration: 'line-through'} : null}
              >
                {item.item}
              </label>
              <FaTrashAlt 
                role="button" 
                tabIndex="0" 
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
    </main>
  )
}

export default Content