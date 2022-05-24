function Login() 
{  

  
  var usuario = document.getElementById("email").value;

  var senha = document.getElementById("senha").value;
  
   
   if (usuario == "admin@test.com" && senha == "admin") {
	
	window.open("pagina.html");
  
  }
 
  else  {
    alert("Dados incorretos, tente novamente");

  }
}