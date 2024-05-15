// Metto dentro le variabili tutti gli elementi che mi servono per aggiungere e modificare
const addBtn = document.getElementById("add-btn"); // Corretto da "add-bnt" a "add-btn"
const delBtn = document.getElementById("del-btn"); // Corretto da "del-bnt" a "del-btn"
const activityForm = document.getElementById("activity");

addBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Impedisce il refresh della pagina
  // prendo il valore di testo inserito nel campo input
  const inputText = document.getElementById("input-Text").value;
  const newCont = document.createElement("ol");
  // Creo un elemento lista per ogni attivita' che vado ad aggiungere
  const newActivity = document.createElement("li");
  // prendo il testo inserito nel campo input e lo aggiungo all'elemento lista
  newActivity.innerText = inputText;
  // creo uno stile all'elemento lista
  newActivity.style.display = "inline-block";
  // creo un elemento input di tipo checkbox
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  // aggiungo tutto al contenitore
  newCont.append(newActivity, checkBox);
  // aggiungo la nuova attivita' e il checkbox al form
  activityForm.appendChild(newCont);
  if (checkBox.checkValidity()) newActivity.classList.add("overline-text");
  else newActivity.classList.remove("overline-text");
  document.getElementById("input-Text").value = "";
  // Modificato da activityForm a activityList per appendere i checkbox al div e non al form
});

delBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Impedisce il refresh della pagina
  //   newActivity.type = "checkbox";
  // creo una variobile per prendere l'ultima attivita' aggiunta
  const lastChild = activityForm.lastChild;
  // e la cancello
  activityForm.removeChild(lastChild);
});
