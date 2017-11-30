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
                   var u2=JSON.parse(sessionStorage.utente);
                   var l2=u2.length
                   u2[l2]=s;
                   alert(u2[l2].nome);
                   return true;                    
                }
            function signin(){
                   var u = JSON.parse(localStorage.utenti);
                   var l = u.length;
                   for (i=0;i<l;i++){
                       if(u[i].nome == document.getElementById("login").nome.value && u[i].password == document.getElementById("login").password.value) {
                       	       var u2=JSON.parse(sessionStorage.utente);
                       	       var l2=u2.length
                               var s= { nome:document.getElementById("login").nome.value,
                                        foto:u[i].foto
                               };
                       	       u2[l2]=s;
                       	       alert(u2[l2].nome);
                       	       sessionStorage.utente=JSON.stringify(u2);
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
                    if (typeof(sessionStorage.utente) == "undefined") {
                    sessionStorage.utente="[]";
               }
           }
           function turnvisible(){
               var d=document.getElementById("registrazione");
               var d2=document.getElementById("centro");
               d2.style.display="none";
               d.style.display="block";
           }
           console.log(sessionStorage.utente);