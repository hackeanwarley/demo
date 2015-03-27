$(function(){
	$(document).ready(function() {
		$("article .nav-tabs li:first").tab("show");
		$(".patient-note").summernote({
			height:300
		});

		$("[data-toggle='tooltip']").tooltip();
	});	
});
