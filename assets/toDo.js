// Metto dentro le variabili tutti gli elementi che mi servono per aggiungere e modificare
const addBtn = document.getElementById("add-btn"); // Corretto da "add-bnt" a "add-btn"
const delBtn = document.getElementById("del-btn"); // Corretto da "del-bnt" a "del-btn"
const activityForm = document.getElementById("activity");

// TODO: aggiungere la funzionlita' testo sbarrato

addBtn.addEventListener("click", function (event) {
  // Impedisce il refresh della pagina
  event.preventDefault();

  // prendo il valore di testo inserito nel campo input
  const inputText = document.getElementById("input-Text").value;

  // questo non serve //const newCont = document.createElement("ol");
  // Creo un elemento lista per ogni attivita' che vado ad aggiungere
  const newActivity = document.createElement("p");
  // prendo il testo inserito nel campo input e lo aggiungo all'elemento lista
  newActivity.innerText = inputText;
  // creo uno stile all'elemento lista
  newActivity.style.display = "inline-block";
  newActivity.addEventListener("click", function () {
    newActivity.classList.toggle("overline-text");
  });
  // creo un elemento input di tipo checkbox
  if (inputText === "") alert("campo vuoto");
  else {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    // aggiungo tutto al contenitore
    activityForm.append(newActivity, checkBox);
    document.getElementById("input-Text").value = "";
  }
  // aggiungo la nuova attivita' e il checkbox al form

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
