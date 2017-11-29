$("document").ready(function(){
            $("#icona").click(function(){
                $("#form").fadeToggle("slow");
                $("#icona").toggleClass("fa fa-plus-circle");
                $("#icona").toggleClass("fa fa-minus-circle")
            })
            $(".imm").click(function(){
            	$(".context").slideToggle("slow");
            })
            $(".fa-thumbs-up").click(function(){
            	console.log($(this).parent().children(".fa-thumbs-up").css("color"));
            	if($(this).css("color") == "rgb(0, 128, 0)" || $(this).parent().children(".fa-thumbs-down").css("color")=="rgb(255, 0, 0)") return;
            	$(this).css("color","green");
            	var h = $(this).html();
            	var somma =parseInt(h);
            	somma=somma + 1;
            	$(this).html(" "+somma+"");
            })

            $(".fa-thumbs-down").click(function(){
            	if($(this).css("color") == "rgb(255, 0, 0)" || $(this).parent().children(".fa-thumbs-up").css("color")=="rgb(0, 128, 0)") return;
            	$(this).css("color","red");
            	var h = $(this).html();
            	var somma =parseInt(h);
            	somma=somma + 1;
            	$(this).html(" "+somma+"");
            })
            $("#provaC").click(function(){
                $("#icon_bar").slideToggle("slow");
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-futbol-o").slideToggle();},800);
                $("#attualità").css({"background": "black", "color": "white"});
                $("#arte").css({"background": "black", "color": "white"});
                $("#sport").css({"background": "orange", "color": "white"});

            })
            $("#provaT").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-table").slideToggle();},800);
                $("#attualità").css({"background": "black", "color": "white"});
                $("#arte").css({"background": "black", "color": "white"});
                $("#sport").css({"background": "orange", "color": "white"});

            })
             $("#provaI").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-home").slideToggle();},800);
                $("#attualità").css({"background": "orange", "color": "white"});
                $("#arte").css({"background": "black", "color": "white"});
                $("#sport").css({"background": "black", "color": "white"});

            })
              $("#provaE").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-globe").slideToggle();},800);
                $("#attualità").css({"background": "orange", "color": "white"});
                $("#arte").css({"background": "black", "color": "white"});
                $("#sport").css({"background": "black", "color": "white"});

            })
               $("#provaCin").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-film").slideToggle();},800);
                $("#attualità").css({"background": "black", "color": "white"});
                $("#arte").css({"background": "orange", "color": "white"});
                $("#sport").css({"background": "black", "color": "white"});

            })
                $("#provaM").click(function(){
            	$("#icon_bar").slideToggle();
                window.setTimeout(function(){
                $("#icon_bar").removeClass().addClass("fa fa-music").slideToggle();},800);
                $("#attualità").css({"background": "black", "color": "white"});
                $("#arte").css({"background": "orange", "color": "white"});
                $("#sport").css({"background": "black", "color": "white"});
            })

                var u2=JSON.parse(sessionStorage.utente);
                var l2=u2.length;
                $("#nickname").html(" "+ u2[l2-1].nome);
                $("#foto").attr("src", u2[l2-1].foto.split("fakepath")[1].substring(1));
                


        })
                
