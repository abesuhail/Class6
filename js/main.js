//After the document is loaded and ready
$(document).ready(function() {
	//Find all my buttons, when clicked
	$("#btn").click(function(){
		//Find my h1 and hide it
		$("ol").append("<div class='commentDiv'>comment</div>")
		$(".commentDiv").addClass("animated jello")
	})
	$("#divSnow").websnowjq();
})