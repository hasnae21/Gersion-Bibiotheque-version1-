let formulaire = document.querySelector('form'), tableau = document.querySelector("table"), tbody = document.querySelector("tbody");
function vider_formulaire() {
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("date").value = "";
    document.getElementById("Selectlangue").value = "";
    //document.querySelector('input[name="name"]:checked').checked = false;
};

// 1:  ajouter les informations entrer ds le tableau
function insererDsTable() {
        let titre = document.querySelector('#titre').value.trim();
        let auteur = document.querySelector('#auteur').value.trim();
        let prix = document.querySelector('#prix').value.trim();
        let date = document.querySelector('#date').value;
        let selectlangue = document.querySelector('#Selectlangue').value;
        let selectype = document.querySelector('input[name="name"]:checked').value;
        tbody.innerHTML += `<tr>
                <td>${titre} </td>
                <td>${auteur}</td>
                <td> ${prix} </td>
                <td> ${date} </td>
                <td> ${selectlangue} </td>
                <td> ${selectype} </td>
                <td>${innerHTML = `<input type="image" class="Edit" src="./fonts/edit-solid.svg" ></input> `}</td>
                <td>${innerHTML = `<input type="image" class="Delete" src="./fonts/minus-circle-solid.svg" ></input> `}</td>
                </tr> ` ; vider_formulaire();
}; formulaire.addEventListener("submit", insererDsTable);

// 2:  supprimer une ligne ds le tableau
function suprimer_Ligne(b) {
    if (!b.target.classList.contains("Delete")) return;
    alert("Est-vous sûre de vouloir supprimer cette Ouvrage de votre tableau ?!! ");
    b.target.closest("tr").remove();

}; tableau.addEventListener("click", suprimer_Ligne);

// 3: modifier les informations saisi
function update_ouvrage(c) {
    if (!c.target.classList.contains("Edit")) return;
    let un_titre = document.getElementById("titre").value.trim();
    let un_auteur = document.getElementById("auteur").value.trim();
    let le_prix = document.getElementById("prix").value.trim();
    let la_date = document.getElementById("date").value;
    let une_selectlangue = document.getElementById("Selectlangue").value;
    let un_selectype = document.querySelector('input[name="name"]:checked').value;
    
    if (un_titre != "")
    c.target.closest('tr').getElementsByTagName("td")[0].innerHTML = un_titre;
    if (un_auteur != "") 
    c.target.closest('tr').getElementsByTagName("td")[1].innerHTML = un_auteur;
    if (le_prix != "") 
    c.target.closest('tr').getElementsByTagName("td")[2].innerHTML = le_prix;
    if (la_date != "") 
    c.target.closest('tr').getElementsByTagName("td")[3].innerHTML = la_date;
    if (une_selectlangue != "") 
    c.target.closest('tr').getElementsByTagName("td")[4].innerHTML = une_selectlangue;
    if (un_selectype == "Roman" || "Essai" || "Bande-Dessinée") 
    c.target.closest('tr').getElementsByTagName("td")[5].innerHTML = un_selectype;       

}; tableau.addEventListener("click", update_ouvrage); 