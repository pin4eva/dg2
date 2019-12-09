const items = document.querySelectorAll(".dropdownn");
items.forEach(item => {
  item.addEventListener("click", () => {
    const child = item.children[0];
    child.classList.toggle("shows");
    console.log(child);
  });
});
