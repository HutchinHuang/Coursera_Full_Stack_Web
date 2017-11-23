$(document).ready(function(){
    // Carousel
    $("#mycarousel").carousel({interval:2000});
    
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        }
        else{
            $("#mycarousel").carousel("cycle");
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
    });

    // Reserve-Table Modal
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('toggle');
    });

    // Login Modal
    $("#loginButton").click(function(){
        $("#loginModal").modal('toggle');
    });
});