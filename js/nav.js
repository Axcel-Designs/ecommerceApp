const ham = document.getElementById("ham");
const navList = document.querySelector("nav ul");

ham.addEventListener("click", () => {
  navList.style.display === 'flex' ? navList.style.display = 'none' : navList.style.display = 'flex'
//   navList.style.display = "flex";
 navList.style.marginTop = "3vh";
 navList.style.flexDirection = "column";
});
