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

            $("#check").click(function(){
                if($("#titolo").val() == ""){
                    $("#titolo").css("border","3px solid red");
                    if($("#testo").val() == "") $("#testo").css("border","3px solid red");
                    else $("#testo").css("border","1px solid #ccc");
                    if($("#file_")[0].files[0] == undefined){
                        $("#testo_icona").css("color","red");
                    }
                    else $("#testo_icona").css("color","black");
                    return;
                } 
                if($("#testo").val() == ""){
                    $("#testo").css("border","3px solid red");
                    if($("#titolo").val() == "") $("#titolo").css("border","3px solid red");
                    else $("#titolo").css("border","1px solid #ccc");
                    return;
                }
                if($("#file_")[0].files[0] == undefined){
                    $("#testo_icona").css("color","red");
                    if($("#titolo").val() == "") $("#titolo").css("border","3px solid red");
                    else $("#titolo").css("border","1px solid #ccc");
                    if($("#testo").val() == "") $("#testo").css("border","3px solid red");
                    else $("#testo").css("border","1px solid #ccc");
                    return;
                }
                $("#titolo").val(""); 
                $("#titolo").css("border","1px solid #ccc");
                $("#testo_icona").css("color","black");
                var riga = $("<div class = \"row\"><div class = \"_post\" ><div class=\"imm\"></div><div class=\"context\"><div class=\"icons\" > Giorgio Coccia<i  class=\"fa fa-thumbs-up\" aria-hidden=\"true\" > 0</i>\n<i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"> 0</i></div><textarea class=\"ta\" name=\"post_testo\" placeholder=\"qui va il testo del post pubblicato\"></textarea></div></div></div>");
                riga.find("._post").css("background-image","url("+URL.createObjectURL($("#file_")[0].files[0])+")");
                riga.find(".ta").val($("#testo").val());
                riga.css("display","none");
                $("#icona_").before(riga);
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
            })
                var u2=JSON.parse(sessionStorage.utente);
                var l2=u2.length;
                $("#nickname").html(" "+ u2[l2-1].nome);
                $("#foto").attr("src", u2[l2-1].foto.split("fakepath")[1].substring(1));
                


        })
                
