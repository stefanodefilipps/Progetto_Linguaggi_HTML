$("document").ready(function(){
            var mostra = false;
            $("#icona").click(function(){

                
                if($("#sport").css("background-color")=="rgb(255, 165, 0)" || $("#arte").css("background-color")=="rgb(255, 165, 0)" || $("#attualità").css("background-color") =="rgb(255, 165, 0)"){
                $("#titolo").css("display","none");

                } else $("#titolo").css("display","block");
                $("#form").fadeToggle("slow");
                $("#icona").toggleClass("fa fa-plus-circle");
                $("#icona").toggleClass("fa fa-minus-circle");
                mostra=!mostra;
                var target;
                if(!mostra){
                    target = $("#barra");
                    $("#titolo").val(""); 
                    $("#testo").val("");
                    $("#titolo").css("border","1px solid #ccc");
                    $("#testo").css("border","1px solid #ccc");
                    $("#testo_icona").css("color","black");
                    $("#titolo2").css("border","1px solid #ccc");
                }
                else target = $("#form");
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  var $target = $(target);
                  $target.focus();
              });
            })
            $(".imm").click(function(){
            	$(this).parent().find(".context").slideToggle("slow");
            })
            $(".fa-thumbs-up").click(function(){
            	console.log($(this).parent().children(".fa-thumbs-up").css("color"));
            	if($(this).css("color") == "rgb(0, 128, 0)" || $(this).parent().children(".fa-thumbs-down").css("color")=="rgb(255, 0, 0)") return;
            	$(this).css("color","green");
            	var h = $(this).html();
            	var somma =parseInt(h);
            	somma=somma + 1;
            	$(this).html(" "+somma+"");
            	var h = $("#like").html();
            	var somma =parseInt(h);
            	somma=somma + 1;
            	$("#like").html(" "+somma+"");
            })

            $(".fa-thumbs-down").click(function(){
            	if($(this).css("color") == "rgb(255, 0, 0)" || $(this).parent().children(".fa-thumbs-up").css("color")=="rgb(0, 128, 0)") return;
            	$(this).css("color","red");
            	var h = $(this).html();
            	var somma =parseInt(h);
            	somma=somma + 1;
            	$(this).html(" "+somma+"");
            	var h = $("#dislike").html();
            	var somma =parseInt(h);
            	somma=somma + 1;
            	$("#dislike").html(" "+somma+"");
            })
            $("#icon_bar").click(function(){
                $("#icon_bar").slideToggle("slow");
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-rss").slideToggle();},800);
                $(".calcio").fadeIn();
                $(".italia").fadeIn();
                $(".estero").fadeIn();
                $(".cinema").fadeIn();
                $(".tennis").fadeIn();
                $(".musica").fadeIn();
                $("#attualità").css({"background": "black", "color": "white"});
                $("#arte").css({"background": "black", "color": "white"});
                $("#sport").css({"background": "black", "color": "white"});
                $("#form").fadeOut("slow");
                if($("#icona").hasClass("fa-minus-circle")){
                    $("#icona").toggleClass("fa fa-minus-circle");
                    $("#icona").toggleClass("fa fa-plus-circle");
                    mostra=!mostra;
                }
                var target = $("#barra");
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  var $target = $(target);
                  $target.focus();
              });

            })
            $("#provaC").click(function(){
                $("#icon_bar").slideToggle("slow");
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-futbol-o").slideToggle();},800);
                $(".tennis").fadeOut();
                $(".italia").fadeOut();
                $(".estero").fadeOut();
                $(".cinema").fadeOut();
                $(".musica").fadeOut();
                $(".calcio").fadeOut().delay(500).fadeIn();
                

                $("#attualità").css({"background": "black", "color": "white"});
                $("#arte").css({"background": "black", "color": "white"});
                $("#sport").css({"background": "orange", "color": "white"});
                $("#form").fadeOut("slow");
                if($("#icona").hasClass("fa-minus-circle")){
                    $("#icona").toggleClass("fa fa-minus-circle");
                    $("#icona").toggleClass("fa fa-plus-circle");
                    mostra=!mostra;
                }
                var target = $("#barra");
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  var $target = $(target);
                  $target.focus();
              });

            })
            $("#provaT").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-table").slideToggle();},800);
                $(".calcio").fadeOut();
                $(".italia").fadeOut();
                $(".estero").fadeOut();
                $(".cinema").fadeOut();
                $(".musica").fadeOut();
                $(".tennis").fadeOut().delay(500).fadeIn();
                $("#attualità").css({"background": "black", "color": "white"});
                $("#arte").css({"background": "black", "color": "white"});
                $("#sport").css({"background": "orange", "color": "white"});
                $("#form").fadeOut("slow");
                if($("#icona").hasClass("fa-minus-circle")){
                    $("#icona").toggleClass("fa fa-minus-circle");
                    $("#icona").toggleClass("fa fa-plus-circle");
                    mostra=!mostra;
                }
                var target = $("#barra");
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  var $target = $(target);
                  $target.focus();
              });

            })
             $("#provaI").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-home").slideToggle();},800);
                $(".calcio").fadeOut();
                $(".tennis").fadeOut();
                $(".estero").fadeOut();
                $(".cinema").fadeOut();
                $(".musica").fadeOut();
                $(".italia").fadeOut().delay(500).fadeIn();
                
                $("#attualità").css({"background": "orange", "color": "white"});
                $("#arte").css({"background": "black", "color": "white"});
                $("#sport").css({"background": "black", "color": "white"});
                $("#form").fadeOut("slow");
                if($("#icona").hasClass("fa-minus-circle")){
                    $("#icona").toggleClass("fa fa-minus-circle");
                    $("#icona").toggleClass("fa fa-plus-circle");
                    mostra=!mostra;
                }
                var target = $("#barra");
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  var $target = $(target);
                  $target.focus();
              });

            })
              $("#provaE").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-globe").slideToggle();},800);
                $(".calcio").fadeOut();
                $(".italia").fadeOut();
                $(".tennis").fadeOut();
                $(".cinema").fadeOut();
                $(".musica").fadeOut();
                $(".estero").fadeOut().delay(500).fadeIn();
                $("#attualità").css({"background": "orange", "color": "white"});
                $("#arte").css({"background": "black", "color": "white"});
                $("#sport").css({"background": "black", "color": "white"});
                $("#form").fadeOut("slow");
                if($("#icona").hasClass("fa-minus-circle")){
                    $("#icona").toggleClass("fa fa-minus-circle");
                    $("#icona").toggleClass("fa fa-plus-circle");
                    mostra=!mostra;
                }
                var target = $("#barra");
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  var $target = $(target);
                  $target.focus();
              });

            })
               $("#provaCin").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-film").slideToggle();},800);
                $(".calcio").fadeOut();
                $(".italia").fadeOut();
                $(".estero").fadeOut();
                $(".tennis").fadeOut();
                $(".musica").fadeOut();
                $(".cinema").fadeOut().delay(500).fadeIn();
                $("#attualità").css({"background": "black", "color": "white"});
                $("#arte").css({"background": "orange", "color": "white"});
                $("#sport").css({"background": "black", "color": "white"});
                $("#form").fadeOut("slow");
                if($("#icona").hasClass("fa-minus-circle")){
                    $("#icona").toggleClass("fa fa-minus-circle");
                    $("#icona").toggleClass("fa fa-plus-circle");
                    mostra=!mostra;
                }
                var target = $("#barra");
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  var $target = $(target);
                  $target.focus();
              });

            })
                $("#provaM").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-music").slideToggle();},800);
                $(".calcio").fadeOut();
                $(".italia").fadeOut();
                $(".estero").fadeOut();
                $(".cinema").fadeOut();
                $(".tennis").fadeOut();
                $(".musica").fadeOut().delay(500).fadeIn();
                $("#attualità").css({"background": "black", "color": "white"});
                $("#arte").css({"background": "orange", "color": "white"});
                $("#sport").css({"background": "black", "color": "white"});
                $("#form").fadeOut("slow");
                if($("#icona").hasClass("fa-minus-circle")){
                    $("#icona").toggleClass("fa fa-minus-circle");
                    $("#icona").toggleClass("fa fa-plus-circle");
                    mostra=!mostra;
                }
                var target = $("#barra");
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  var $target = $(target);
                  $target.focus();
              });
            })

            $("#check").click(function(){
                var categorie=["cinema","musica","italia","estero","calcio","tennis"];
                
                if($("#titolo").css("display")=="none"){
                    if($("#icon_bar").attr("class")=="fa fa-music") $("#titolo").val("musica");
                    if($("#icon_bar").attr("class")=="fa fa-futbol-o") $("#titolo").val("calcio");
                    if($("#icon_bar").attr("class")=="fa fa-film") $("#titolo").val("cinema");
                    if($("#icon_bar").attr("class")=="fa fa-home") $("#titolo").val("italia");
                    if($("#icon_bar").attr("class")=="fa fa-globe") $("#titolo").val("estero");
                    if($("#icon_bar").attr("class")=="fa fa-table") $("#titolo").val("tennis");
                }
                else{
                if($("#titolo").val() == "" || !categorie.includes($("#titolo").val().trim().toLowerCase() )){
                    $("#titolo").css("border","3px solid red");
                    if($("#titolo2").val() == "") $("#titolo2").css("border","3px solid red");
                    else $("#titolo2").css("border","1px solid #ccc");
                    if($("#testo").val() == "") $("#testo").css("border","3px solid red");
                    else $("#testo").css("border","1px solid #ccc");
                    if($("#file_")[0].files[0] == undefined){
                        $("#testo_icona").css("color","red");
                    }
                    else $("#testo_icona").css("color","black");
                    return;
                } 
                }
                
                if($("#testo").val() == ""){
                    $("#testo").css("border","3px solid red");
                    if($("#titolo").val() == "") $("#titolo").css("border","3px solid red");
                    else $("#titolo").css("border","1px solid #ccc");
                    if($("#titolo2").val() == "") $("#titolo2").css("border","3px solid red");
                    else $("#titolo2").css("border","1px solid #ccc");
                    if($("#file_")[0].files[0] == undefined){
                        $("#testo_icona").css("color","red");
                    }
                    else $("#testo_icona").css("color","black");
                    return;
                }
                if($("#titolo2").val() == ""){
                    $("#titolo2").css("border","3px solid red");
                    if($("#testo").val() == "") $("#testo").css("border","3px solid red");
                    else $("#testo").css("border","1px solid #ccc");
                    if($("#titolo").val() == "") $("#titolo").css("border","3px solid red");
                    else $("#titolo").css("border","1px solid #ccc");
                    if($("#file_")[0].files[0] == undefined){
                        $("#testo_icona").css("color","red");
                    }
                    else $("#testo_icona").css("color","black");
                    return;
                } 
                if($("#file_")[0].files[0] == undefined){
                    $("#testo_icona").css("color","red");
                    if($("#titolo2").val() == "") $("#titolo").css("border","3px solid red");
                    else $("#titolo2").css("border","1px solid #ccc");
                    if($("#titolo").val() == "") $("#titolo").css("border","3px solid red");
                    else $("#titolo").css("border","1px solid #ccc");
                    if($("#testo").val() == "") $("#testo").css("border","3px solid red");
                    else $("#testo").css("border","1px solid #ccc");
                    return;
                }  
                $("#titolo2").css("border","1px solid #ccc");
                $("#titolo").css("border","1px solid #ccc");
                $("#testo").css("border","1px solid #ccc");
                $("#testo_icona").css("color","black");

                var riga = $("<div class = \""+$("#titolo").val().toLowerCase().trim()+" row \""+ "><div class = \"_post\" ><div class=\"imm\"></div><div class=\"context\"><div class=\"icons\" >"+$("#nickname").html()+" <i  class=\"fa fa-thumbs-up\" aria-hidden=\"true\" > 0</i>\n<i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"> 0</i></div><div class=\"ta\" name=\"post_testo\"><div class =\"child\"></div></div></div></div></div>");
                
                riga.find("._post").css("background-image","url("+URL.createObjectURL($("#file_")[0].files[0])+")");
                riga.find(".child").html("<h1>"+$("#titolo2").val()+"</h1></br>"+$("#testo").val());
                riga.css("display","none");
                $("#titolo").val("");
                $("#titolo2").val("");
                $("#testo").val("");
                $("#post").prepend(riga);
                riga.find(".imm").click(function(){
                    $(this).parent().children(".context").slideToggle("slow");
                })
                riga.find(".fa-thumbs-up").click(function(){
                    if($(this).css("color") == "rgb(0, 128, 0)" || $(this).parent().children(".fa-thumbs-down").css("color")=="rgb(255, 0, 0)") return;
                    $(this).css("color","green");
                    var h = $(this).html();
                    var somma =parseInt(h);
                    somma=somma + 1;
                    $(this).html(" "+somma+"");
                })

                riga.find(".fa-thumbs-down").click(function(){
                    if($(this).css("color") == "rgb(255, 0, 0)" || $(this).parent().children(".fa-thumbs-up").css("color")=="rgb(0, 128, 0)") return;
                    $(this).css("color","red");
                    var h = $(this).html();
                    var somma =parseInt(h);
                    somma=somma + 1;
                    $(this).html(" "+somma+"");
                })

                riga.fadeIn("slow");
                $("#form").fadeToggle("slow");
                $("#icona").toggleClass("fa fa-plus-circle");
                $("#icona").toggleClass("fa fa-minus-circle");
                mostra=!mostra;
                var target = $("#barra");
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  var $target = $(target);
                  $target.focus();
              });
                var h = $("#mypost").html();
            	var somma =parseInt(h);
            	somma=somma + 1;
            	$("#mypost").html(" "+somma+"");
            })
            
                
            $("#nickname").html(" "+ sessionStorage.getItem("nome"));
            $("#foto").attr("src", sessionStorage.getItem("foto").split("fakepath")[1].substring(1));

            $("#cerca").click(function(){
                    var trovato;
                    var input = $("#find");
                    if(input.val() == ''){
                        alert('Nulla da cercare');
                        return;
                    }
                    else{
                        $("h1").each(function(index){
                            $(this).html().match(input.val());
                            trovato = $(this).html().match(input.val());
                            console.log(trovato);
                            var y = $(this).parent().parent().parent().parent().parent();
                            if(trovato!= null){
                                console.log(y);
                                y.fadeIn();
                            }
                            else{
                                y.fadeOut();
                            }
                        })
                        };
                        
                        var target = $("#barra");
		                $('html, body').animate({
		                  scrollTop: target.offset().top
		                }, 1000, function() {
		                  var $target = $(target);
		                  $target.focus();
		              });
            })

        })
                
