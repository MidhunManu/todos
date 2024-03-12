$(document).ready(function() {
	$("button").click(function() {
		let task = $("input").val().trim();
		if(task !== "") {
			$("ol").append(`<li>${task} <button class="done btn btn-danger mx-5">done</button></li>`);
			$(".done").click(function() {
				$(this).parent().hide();
			});
		}
	});
});
