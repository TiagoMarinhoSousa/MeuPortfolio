function enviar(){
	var nome = formuser.nome.value;
	var sobrenome = formuser.sobrenome.value;
	var email = formuser.email.value;
	var fone = formuser.fone.value;
	var mensagem = formuser.mensagem.value;

	if (nome == ""){
		alert('Preencha o campo Nome.');
		formuser.nome.focus();
		return false;
	}

	if (sobrenome == ""){
		alert('Preencha o campo Sobrenome.');
		formuser.sobrenome.focus();
		return false;
	}
	if (email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1){
		alert ('Preencha o campo E-mail.');
		formuser.email.focus();
		return false;
	}
	if (fone == "" || fone.length <=11){
		alert('Preencha o campo Telefone no formato (xx)XXXXX-XXXX');
		formuser.fone.focus();
		return false;
	}

	if (mensagem == ""){
		alert('Preencha o campo Assunto.');
		formuser.mensagem.focus();
		return false;
	}
}