$(document).ready(function(e) {
	$("#add").on("click", function(e){
		e.preventDefault()
		var val1 = Number($("#number_1").val());
		var val2 = Number($("#number_2").val());

		$("#answer").val(val1 + val2)
	})

	$("#subtract").on("click", function(e){
		e.preventDefault()
		var val1 = Number($("#number_1").val());
		var val2 = Number($("#number_2").val());

		$("#answer").val(val1 - val2)
	})

	$("#multiply").on("click", function(e){
		e.preventDefault()
		var val1 = Number($("#number_1").val());
		var val2 = Number($("#number_2").val());

		$("#answer").val(val1 * val2)
	})

	$("#divide").on("click", function(e){
		e.preventDefault()
		var val1 = Number($("#number_1").val());
		var val2 = Number($("#number_2").val());

		$("#answer").val(val1 / val2)
	})
});