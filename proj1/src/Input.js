import React from 'react'
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText  
}) => {
  return (
    <form className="inputForm" onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name</label>
        <input 
            autoFocus
            type="text"
            value={colorValue}
            placeholder="Add Color Name"
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value));
            }}
            required
        />
        <button 
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default Input