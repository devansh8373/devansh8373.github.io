$(document).ready(function(){
	$(".header-subtitle").on("click",function(){
 		$(".banner").slideToggle();
 	});

    $(".call-button").click(function(e){
       e.preventDefault();
       $(".column1 img, .column2 img").toggleClass("bigger");
});

});