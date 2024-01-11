import React from "react";

const NewForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter your message" />
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <input type="radio" name="radioOption" value="option1" /> Option 1
        <input type="radio" name="radioOption" value="option2" /> Option 2
        <input type="radio" name="radioOption" value="option3" /> Option 3
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default NewForm;
