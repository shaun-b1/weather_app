export { form };

function form() {
  const form = document.createElement("form");

  const searchDiv = document.createElement("div");
  searchDiv.classList.add("search");

  const searchLabel = document.createElement("label");
  searchLabel.setAttribute("for", "search");
  searchLabel.textContent = "Search Here: ";

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("id", "search");
  searchInput.setAttribute("name", "search");

  const button = document.createElement("button");
  button.textContent = "Search";
  button.setAttribute("type", "submit");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(form);
  });
  form.addEventListener("formdata", (e) => {
    console.log("it's working!");

    const data = e.formData;
    for (const value of data.values()) {
      console.log(value);
    }
  });

  searchDiv.append(searchLabel, searchInput);
  form.append(searchDiv, button);

  return form;
}

// function testFormDataObject() {
//     const formData = new FormData(form)
//     console.log(formData)
// }