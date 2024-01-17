import React from "react";

const changeBorder = (e: React.FocusEvent<HTMLInputElement>) => {
  e.target.style.backgroundColor = "#f5f5f5";
};

const NewForm = () => {
  return (
    <div className="mt-20">
      <form>
        <input
          onFocus={changeBorder}
          onBlur={(e) => (e.target.style.backgroundColor = "white")}
          onChange={(e) => console.log(e.target.value)}
          onKeyDown={(e) => console.log(e.key)}
          onKeyUp={(e) => console.log(e.key)}
          type="text"
          placeholder="Enter your message"
        />
        <br />
        <br />
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <br />
        <br />
        <input type="radio" name="radioOption" value="option1" /> Option 1
        <br />
        <input type="radio" name="radioOption" value="option2" /> Option 2
        <br />
        <input type="radio" name="radioOption" value="option3" /> Option 3
        <br />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default NewForm;
