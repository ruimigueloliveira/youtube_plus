// funcoes a utilizar na pagina historia (aumenta a imagem e torne invisivel/visivel o texto) 


function imgAndTextOver(id, hidde){
	//mouseOver: aumenta a imagem e torna invisivel o texto sobre o fundador
	imagem = document.getElementById(id);
	imagemhidde = document.getElementById(hidde);
	imagemhidde.style.visibility ="hidden";
	imagem.width = "335";
	imagem.height = "335";
}

function imgAndTextOut(id, hidde){
	//mouseOut: diminui a imagem e torna visivel o texto sobre o fundador
	imagem = document.getElementById(id);
	imagemhidde = document.getElementById(hidde);
	imagemhidde.style.visibility ="visible";
	imagem.width = "65";
	imagem.height = "65";
}
