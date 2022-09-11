function calcular(tipo, valor) {
	if (tipo === "acao") {
		if (valor === "c") {
			// limpar o visor -> atribui um valor vazio ao visor
			document.getElementById("visor").value = "";
		}

		if (valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === ".") {
			// concatena as ações aos valores
			document.getElementById("visor").value += valor;
		}

		if (valor === "=") {
			// eval() -> transrma uma string em uma operação nativa js
			var valorCampo = eval(document.getElementById("visor").value);
			
			document.getElementById("visor").value = valorCampo;
		}

	} else if (tipo === "valor") {
		// += faz a concatenação dos caracteres digitados
		document.getElementById("visor").value += valor;
	}
}