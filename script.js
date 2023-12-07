
function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email== "projetogrupo2@gmail.com" && password=="admin123"){
        window.location.assign("inicial.html");
        alert("Login com sucesso ");
    }
    else {
        alert("informação inválida ");
        return;
    }
}
