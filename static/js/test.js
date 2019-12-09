// onClick: () => {
//   const items = document.querySelectorAll(".dropdownn");
//   items.forEach(item => {
//     item.addEventListener("click", () => {
//       const child = item.children[0];
//       child.classList.toggle("shows");
//       console.log(child);
//     });
//   });
// };
const items = document.querySelectorAll(".dropdownn");
items.forEach(item => {
  item.addEventListener("click", e => {
    let target = e.target;
    target = target.children[0];
    target.classList.toggle("shows");
    // console.log(child);
  });
});
