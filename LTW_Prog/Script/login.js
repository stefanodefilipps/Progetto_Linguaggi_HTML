function signup(){
                    var u = JSON.parse(localStorage.utenti);
                    var l=u.length;
                    for (i=0;i<l;i++){
                       if(u[i].nome == document.getElementById("logup").nome.value){
                           alert("username già inserito");
                           return false;
                           }
                   }

                   var s= { nome:document.getElementById("logup").nome.value,
                           password:document.getElementById("logup").password.value,
                           foto:document.getElementById("logup").foto.value
                           };
                   u[l]=s;
                   alert("Ti sei registrato su MYBLOG!");
                   localStorage.utenti=JSON.stringify(u);
                   sessionStorage.setItem("nome",s["nome"]);
                   sessionStorage.setItem("foto",s["foto"]);
                   alert(sessionStorage.getItem("nome"));
                   return true;                    
                }
            function signin(){
                   var u = JSON.parse(localStorage.utenti);
                   var l = u.length;
                   for (i=0;i<l;i++){
                       if(u[i].nome == document.getElementById("login").nome.value && u[i].password == document.getElementById("login").password.value) {
                       	       sessionStorage.setItem("nome",u[i].nome);
                               sessionStorage.setItem("foto",u[i].foto);
                       	       return true;
                       }
                   }
                   alert("utente non registrato");
                   return false;
               }
            function inizializzaStorageUtenti(){
                    if (typeof(localStorage.utenti) == "undefined") {
                    localStorage.utenti="[]";
                }
                    if (typeof(sessionStorage) == "undefined") {
                    sessionStorage="[]";
               }
           }
           function turnvisible(){
               var d=document.getElementById("registrazione");
               var d2=document.getElementById("centro");
               d2.style.display="none";
               d.style.display="block";
           }