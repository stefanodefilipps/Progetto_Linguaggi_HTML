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
            	console.log($(this).parent());
            	if($(this).css("color") == "green" || ($(this).parent().children(".fa-thumbs-down"))[0].css("color")=="red") return;
            	$(this).css("color","green");
            	var h = $(this).html();
            	var somma =parseInt(h);
            	somma=somma + 1;
            	$(this).html(" "+somma+"");
            })

            $(".fa-thumbs-down").click(function(){
            	$(this).css("color","red");
            	var h = $(this).html();
            	var somma =parseInt(h);
            	somma=somma + 1;
            	$(this).html(" "+somma+"");
            })

        })
