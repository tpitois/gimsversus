var document;
var array = [
["https://fr.wikipedia.org/wiki/Jean-Claude_Van_Damme", "images/jcvd.jpg", "JCVD", "Est AWARE.", "Adore l'eau. Dans 20-30 ans, y'en aura plus", "\"Il ne faut pas écouter les bruits du monde, mais le silence de l'âme.\""],
["https://fr.wikipedia.org/wiki/Chuck_Norris", "images/norris.jpg", "Chuck Norris", "A déjà compté jusqu'à l'infini. 2 fois.", "Sait parler le braille.", "Ne se mouille pas, c'est l'eau qui se Chuck Norris."],
["https://fr.wikipedia.org/wiki/Perceval_(Kaamelott)", "images/perceval.jpg", "Perceval", "C'est pas faux.", "\"Vous, vous avez une idée derrière la main, j'en mettrais ma tête au feu !\"", "\"Incandescente, c’est : qui peut accaparer des objets sans resurgir sur autrui.\""],
["https://fr.wikipedia.org/wiki/Gims", "images/gims.jpg", "Gims", "N'a jamais montré ses yeux.", "Est toujours sapé comme jamais.", "Adoré par M. Grossé."]
];

var indice_dernier_element = array.length - 1;

function change() {
	
	"use strict";
	
	var select;
	
	select = array[document.getElementById("select_perso").value];
	
	document.getElementById("wiki_frame").src = select[0];
	document.getElementById("photo").src = select[1];
	document.getElementById("titre").innerHTML = select[2];
	document.getElementById("1").innerHTML = select[3];
	document.getElementById("2").innerHTML = select[4];
	document.getElementById("3").innerHTML = select[5];
}

function load() {
	
	"use strict";
	
	var select, option, i;
	
	select = document.getElementById("select_perso");

	for (i = 0; i < indice_dernier_element; i++) {
		option = document.createElement('option');
		option.text = array[i][2];
		option.value = i;
		select.add(option, 0);
	}

	change();

	document.getElementById("wiki_frame").src = array[indice_dernier_element][0];
	document.getElementById("photo_gims").src = array[indice_dernier_element][1];
	document.getElementById("titre_gims").innerHTML = array[indice_dernier_element][2];
	document.getElementById("1_gims").innerHTML = array[indice_dernier_element][3];
	document.getElementById("2_gims").innerHTML = array[indice_dernier_element][4];
	document.getElementById("3_gims").innerHTML = array[indice_dernier_element][5];
}
	
function tableau() {
	
	"use strict";
	
	var tableBody, i, j, tr, td, img;
	
	tableBody = document.getElementById("tableau");

	for (i = 0; i < array.length; i++) {
		tr = document.createElement('TR');
		for (j = 1; j < 3; j++) {
			td = document.createElement('TD');
			if (i%2 === 0) {
				if (j === 1) {
					img = document.createElement("img");
					img.src = array[i][j];
					img.classList.add("photo_tab");
					td.appendChild(img);
				} else {
					td.appendChild(document.createTextNode(array[i][j]));
				}
			} else {
				if (j === 2) {
					img = document.createElement("img");
					img.src = array[i][1];
					img.classList.add("photo_tab");
					td.appendChild(img);
				} else {
					td.appendChild(document.createTextNode(array[i][2]));
				}
			}
			tr.appendChild(td);
		}
		tableBody.appendChild(tr);
	}

	document.getElementById("tableau").appendChild(tableBody);
}

function wiki(gims = 0) {
	
	var select;
	
	select = array[document.getElementById("select_perso").value];
	
	if (gims === 1) {
		document.getElementById("wiki_frame").src = array[indice_dernier_element][0];
	} else {
		document.getElementById("wiki_frame").src = select[0];
	}
}
