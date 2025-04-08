$(document).on("mousemove", function(event){

    var mouseX = event.pageX;
    var mouseY = event.pageY;

    $("#mouse-follow").css("left", mouseX)
    $("#mouse-follow").css("top", mouseY)

    $("#mouse-pos")
    .html("mouseX: " + mouseX + "mouseY: " + mouseY)

    if (mouseX < 600 && mouseY < 400){
        console.log("Top Left")
        $("body").css("background-color", "FF92E9");
        $("#mouse-follow").css("background-color", "B366A4");
        $("#be").css("opacity", "5%");
        $("#yo").css("opacity", "5%");
        $("#n").css("opacity", "5%");
        $("#d").css("opacity", "5%");
        $("#bi").css("opacity", "5%");
        $("#as").css("opacity", "5%");

        $("#international").css("opacity", "10%")
        $("#lecture").css("opacity", "10%")
        $("#series").css("opacity", "10%")

        $("#shima").css("font-weight", "900");
        $("#shima").css("opacity", "100%");

        $("#maria").css("opacity", "10%");
        $("#maria").css("font-weight", "400");

        $("#isabel").css("opacity", "10%");

        $("#daniel").css("opacity", "10%");
       
        $("#date-1").css("opacity", "10%");

        $("#date-2").css("font-weight", "900");
        $("#date-2").css("opacity", "100%");

        $("#date-3").css("opacity", "10%");
        $("#date-3").css("font-weight", "400");

        $("#date-4").css("opacity", "10%");

        $(".appear-1").css("opacity", "100%")
        $(".appear-2").css("opacity", "0%")

        $(".grid-appear").css("opacity", "100%")
    }

    if (mouseX < 600 && mouseY > 400){
        console.log("Bottom Left")
        $("body").css("background-color", "DC92FF");
        $("#mouse-follow").css("background-color", "945FAD")
        $("#be").css("opacity", "5%");
        $("#yo").css("opacity", "5%");
        $("#n").css("opacity", "5%");
        $("#d").css("opacity", "5%");
        $("#bi").css("opacity", "5%");
        $("#as").css("opacity", "5%");

        $("#international").css("opacity", "10%")
        $("#lecture").css("opacity", "10%")
        $("#series").css("opacity", "10%")

        $("#shima").css("opacity", "10%");
        $("#shima").css("font-weight", "400");

        $("#maria").css("font-weight", "900");
        $("#maria").css("opacity", "100%");

        $("#isabel").css("opacity", "10%");

        $("#daniel").css("opacity", "10%");

        $("#date-1").css("opacity", "10%");

        $("#date-2").css("opacity", "10%");
        $("#date-2").css("font-weight", "400");

        $("#date-3").css("font-weight", "900");
        $("#date-3").css("opacity", "100%");

        $("#date-4").css("opacity", "10%");

        $(".appear-1").css("opacity", "0%")
        $(".appear-2").css("opacity", "100%")

        $(".grid-appear").css("opacity", "100%")
    }

    if (mouseX > 900 && mouseY < 400){
        console.log("Top Right")
        $("body").css("background-color", "FF92B1");
        $("#mouse-follow").css("background-color", "B46179")

        $("#be").css("opacity", "5%");
        $("#yo").css("opacity", "5%");
        $("#n").css("opacity", "5%");
        $("#d").css("opacity", "5%");
        $("#bi").css("opacity", "5%");
        $("#as").css("opacity", "5%");

        $("#international").css("opacity", "10%")
        $("#lecture").css("opacity", "10%")
        $("#series").css("opacity", "10%")

        $("#shima").css("opacity", "10%");

        $("#maria").css("opacity", "10%");

        $("#isabel").css("font-weight", "900");
        $("#isabel").css("opacity", "100%");

        $("#daniel").css("opacity", "10%");
        $("#daniel").css("font-weight", "400");

        $("#date-1").css("opacity", "10%");
        $("#date-1").css("font-weight", "400");

        $("#date-2").css("opacity", "10%");

        $("#date-3").css("opacity", "10%");

        $("#date-4").css("font-weight", "900");
        $("#date-4").css("opacity", "100%");

        $(".appear-3").css("opacity", "100%")
        $(".appear-4").css("opacity", "0%")

        $(".grid-appear").css("opacity", "100%")
    }

    if (mouseX > 900 && mouseY > 400){
        console.log("Bottom Right")
        $("body").css("background-color", "ABAFFF");
        $("#mouse-follow").css("background-color", "585C9A")

        $("#be").css("opacity", "5%");
        $("#yo").css("opacity", "5%");
        $("#n").css("opacity", "5%");
        $("#d").css("opacity", "5%");
        $("#bi").css("opacity", "5%");
        $("#as").css("opacity", "5%");
        
        $("#international").css("opacity", "10%")
        $("#lecture").css("opacity", "10%")
        $("#series").css("opacity", "10%")
       
        $("#shima").css("opacity", "10%");

        $("#maria").css("opacity", "10%");

        $("#isabel").css("opacity", "10%");
        $("#isabel").css("font-weight", "400");

        $("#daniel").css("font-weight", "900");
        $("#daniel").css("opacity", "100%");

        $("#date-1").css("font-weight", "900");
        $("#date-1").css("opacity", "100%");

        $("#date-2").css("opacity", "10%");

        $("#date-3").css("opacity", "10%");

        $("#date-4").css("opacity", "10%");
        $("#date-4").css("font-weight", "400");

        $(".appear-3").css("opacity", "0%")
        $(".appear-4").css("opacity", "100%")

        $(".grid-appear").css("opacity", "100%")
    }

    if (mouseX < 900 && mouseX > 600){
        console.log("Centre")
        $("body").css("background-color", "white");
        $("#mouse-follow").css("background-color", "grey");
        $("#be").css("opacity", "100%");
        $("#be").css("opacity", "100%");
        $("#yo").css("opacity", "100%");
        $("#n").css("opacity", "100%");
        $("#d").css("opacity", "100%");
        $("#bi").css("opacity", "100%");
        $("#as").css("opacity", "100%");

        $("#international").css("opacity", "100%")
        $("#lecture").css("opacity", "100%")
        $("#series").css("opacity", "100%")

        $("#shima").css("font-weight", "400");
        $("#shima").css("opacity", "100%");
        $("#maria").css("font-weight", "400");
        $("#maria").css("opacity", "100%");
        $("#isabel").css("font-weight", "400");
        $("#isabel").css("opacity", "100%");
        $("#daniel").css("font-weight", "400");
        $("#daniel").css("opacity", "100%");

        $("#date-1").css("opacity", "100%");
        $("#date-1").css("font-weight", "400");
        $("#date-2").css("opacity", "100%");
        $("#date-2").css("font-weight", "400");
        $("#date-3").css("opacity", "100%");
        $("#date-3").css("font-weight", "400");
        $("#date-4").css("opacity", "100%");
        $("#date-4").css("font-weight", "400");

        $(".appear-1").css("opacity", "0%")
        $(".appear-2").css("opacity", "0%")
        $(".appear-3").css("opacity", "0%")
        $(".appear-4").css("opacity", "0%")

        $(".grid-appear").css("opacity", "0%")
    }
})

