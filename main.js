let placeholder = document.querySelector("#messages");
const fragment = document.createDocumentFragment();

const newSection = (...extra) => {
  const newElement = document.createElement("section");
  newElement.setAttribute("class", extra[0]);
  newElement.textContent = extra[1];
  fragment.appendChild(newElement);
};

newSection("message", "1. This is the 1st message.");
newSection("message", "2. This is the 2nd message.");
newSection("message", "3. This is the 3rd message.");
newSection("message", "4. This is the 4th message.");
newSection("message", "5. This is the 5th message.");

placeholder.appendChild(fragment);