// Metto dentro le variabili tutti gli elementi che mi servono per aggiungere e modificare
const addBtn = document.getElementById("add-btn"); // Corretto da "add-bnt" a "add-btn"
const delBtn = document.getElementById("del-btn"); // Corretto da "del-bnt" a "del-btn"
const activityForm = document.getElementById("activity");

addBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Impedisce il refresh della pagina
  const inputText = document.getElementById("input-Text").value;
  const newActivity = document.createElement("li");
  newActivity.innerText = inputText;
  const newCont = document.createElement("ol");
  newActivity.style.display = "inline-block";
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  newCont.append(newActivity, checkBox);
  activityForm.appendChild(newCont);
  if (checkBox.checked === true) newActivity.classList.add("overline-text");
  else newActivity.classList.remove("overline-text");
  document.getElementById("input-Text").value = "";
  // Modificato da activityForm a activityList per appendere i checkbox al div e non al form
});

delBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Impedisce il refresh della pagina
  //   newActivity.type = "checkbox";

  const lastChild = activityForm.lastChild;
  activityForm.removeChild(lastChild);
});
