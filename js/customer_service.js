let tableHeadbtn = document.querySelector(".table_head_btn");
let tableHeadbtn2 = document.querySelector(".table_head_btn2");
let tableHeadbtn3 = document.querySelector(".table_head_btn3");
let tableHeadbtn4 = document.querySelector(".table_head_btn4");

let tableContainer = document.querySelector(".table_container");
let tableContainer2 = document.querySelector(".table_container2");
let tableContainer3 = document.querySelector(".table_container3");
let tableContainer4 = document.querySelector(".table_container4");
tableHeadbtn.addEventListener("click", () => {
  tableHeadbtn.classList.add("active");
  tableHeadbtn2.classList.remove("active");
  tableHeadbtn3.classList.remove("active");
  tableHeadbtn4.classList.remove("active");
  tableContainer.style.display = "block";
  tableContainer2.style.display = "none";
  tableContainer3.style.display = "none";
  tableContainer4.style.display = "none";
});
tableHeadbtn2.addEventListener("click", () => {
  tableHeadbtn2.classList.add("active");
  tableHeadbtn.classList.remove("active");
  tableContainer2.style.display = "block";
  tableContainer.style.display = "none";
  tableContainer3.style.display = "none";
  tableContainer4.style.display = "none";
});
tableHeadbtn3.addEventListener("click", () => {
  tableHeadbtn3.classList.add("active");
  tableHeadbtn.classList.remove("active");
  tableHeadbtn2.classList.remove("active");
  tableHeadbtn4.classList.remove("active");

  tableContainer3.style.display = "block";
  tableContainer.style.display = "none";
  tableContainer2.style.display = "none";
  tableContainer4.style.display = "none";
});
tableHeadbtn4.addEventListener("click", () => {
  tableHeadbtn4.classList.add("active");
  tableHeadbtn.classList.remove("active");
  tableHeadbtn2.classList.remove("active");
  tableHeadbtn3.classList.remove("active");
  tableContainer4.style.display = "block";
  tableContainer.style.display = "none";
  tableContainer2.style.display = "none";
  tableContainer3.style.display = "none";
});
