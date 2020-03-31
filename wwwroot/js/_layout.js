
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
  });



$(document).on('click', '#sidebarOpen', function () {
	document.getElementById('sidebarOpen').setAttribute("style", "visibility:hidden", "transition:0.1ms");
	document.getElementById('sidebarOpen').setAttribute("style", "font-size:0px;");

	
	$('#sidebar').removeClass('active');
	document.getElementById('sidebarClose').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel2').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel2').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel3').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel3').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel4').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel4').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel5').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel5').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel6').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel6').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel7').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel7').setAttribute("style", "font-size:18px");

	document.getElementById('sidebarCollapse').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse2').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse3').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse4').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse5').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse6').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse7').setAttribute("style", "text-align:left");
});


$(document).on('click', '#sidebarCollapse', function () {

	$('#sidebar').removeClass('active');
	document.getElementById('sidebarClose').setAttribute("style", "float:right");
	
	document.getElementById('sidebarOpen').setAttribute("style", "visibility:hidden");
	document.getElementById('sidebarClose').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel2').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel2').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel3').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel3').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel4').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel4').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel5').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel5').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel6').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel6').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel7').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel7').setAttribute("style", "font-size:18px");

	document.getElementById('sidebarCollapse').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse2').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse3').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse4').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse5').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse6').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse7').setAttribute("style", "text-align:left");
	document.getElementById('sidebarOpen').setAttribute("style", "font-size:0px;");

	document.getElementById('dropdown-container3').setAttribute("style", "display:none");
	document.getElementById('dropdown-container4').setAttribute("style", "display:none");
	document.getElementById('dropdown-container5').setAttribute("style", "display:none");
	document.getElementById('dropdown-container6').setAttribute("style", "display:none");
	document.getElementById('dropdown-container7').setAttribute("style", "display:none");
	document.getElementById('dropdown-container8').setAttribute("style", "display:none");
	$('.dropdown-btn').removeClass('active');
});
$(document).on('click', '#sidebarCollapse2', function () {

	$('#sidebar').removeClass('active');
	document.getElementById('sidebarClose').setAttribute("style", "float:right");
	
	document.getElementById('sidebarOpen').setAttribute("style", "visibility:hidden", "transition:0.1ms");
	document.getElementById('sidebarClose').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel2').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel2').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel3').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel3').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel4').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel4').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel5').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel5').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel6').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel6').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel7').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel7').setAttribute("style", "font-size:18px");

	document.getElementById('sidebarCollapse').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse2').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse3').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse4').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse5').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse6').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse7').setAttribute("style", "text-align:left");
	document.getElementById('sidebarOpen').setAttribute("style", "font-size:0px;");

	document.getElementById('dropdown-container2').setAttribute("style", "display:none");
	document.getElementById('dropdown-container4').setAttribute("style", "display:none");
	document.getElementById('dropdown-container5').setAttribute("style", "display:none");
	document.getElementById('dropdown-container6').setAttribute("style", "display:none");
	document.getElementById('dropdown-container7').setAttribute("style", "display:none");
	document.getElementById('dropdown-container8').setAttribute("style", "display:none");
	$('.dropdown-btn').removeClass('active');
});
$(document).on('click', '#sidebarCollapse3', function () {

	$('#sidebar').removeClass('active');
	
	document.getElementById('sidebarClose').setAttribute("style", "float:right");
	document.getElementById('sidebarOpen').setAttribute("style", "visibility:hidden");
	document.getElementById('sidebarClose').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel2').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel2').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel3').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel3').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel4').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel4').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel5').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel5').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel6').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel6').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel7').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel7').setAttribute("style", "font-size:18px");

	document.getElementById('sidebarCollapse').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse2').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse3').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse4').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse5').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse6').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse7').setAttribute("style", "text-align:left");
	document.getElementById('sidebarOpen').setAttribute("style", "font-size:0px;");
	document.getElementById('dropdown-container2').setAttribute("style", "display:none");
	document.getElementById('dropdown-container3').setAttribute("style", "display:none");
	document.getElementById('dropdown-container5').setAttribute("style", "display:none");
	document.getElementById('dropdown-container6').setAttribute("style", "display:none");
	document.getElementById('dropdown-container7').setAttribute("style", "display:none");
	document.getElementById('dropdown-container8').setAttribute("style", "display:none");
	$('.dropdown-btn').removeClass('active');
});
$(document).on('click', '#sidebarCollapse4', function () {

	$('#sidebar').removeClass('active');
	
	document.getElementById('sidebarClose').setAttribute("style", "float:right");
	document.getElementById('sidebarOpen').setAttribute("style", "visibility:hidden", "transition:0.1ms");
	document.getElementById('sidebarClose').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel2').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel2').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel3').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel3').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel4').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel4').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel5').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel5').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel6').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel6').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel7').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel7').setAttribute("style", "font-size:18px");

	document.getElementById('sidebarCollapse').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse2').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse3').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse4').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse5').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse6').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse7').setAttribute("style", "text-align:left");
	document.getElementById('sidebarOpen').setAttribute("style", "font-size:0px;");

	document.getElementById('dropdown-container2').setAttribute("style", "display:none");
	document.getElementById('dropdown-container3').setAttribute("style", "display:none");
	document.getElementById('dropdown-container4').setAttribute("style", "display:none");
	document.getElementById('dropdown-container6').setAttribute("style", "display:none");
	document.getElementById('dropdown-container7').setAttribute("style", "display:none");
	document.getElementById('dropdown-container8').setAttribute("style", "display:none");
	$('.dropdown-btn').removeClass('active');
});
$(document).on('click', '#sidebarCollapse5', function () {

	$('#sidebar').removeClass('active');
	
	document.getElementById('sidebarClose').setAttribute("style", "float:right");
	document.getElementById('sidebarOpen').setAttribute("style", "visibility:hidden", "transition:0.1ms");
	document.getElementById('sidebarClose').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel2').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel2').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel3').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel3').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel4').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel4').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel5').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel5').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel6').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel6').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel7').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel7').setAttribute("style", "font-size:18px");

	document.getElementById('sidebarCollapse').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse2').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse3').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse4').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse5').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse6').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse7').setAttribute("style", "text-align:left");
	document.getElementById('sidebarOpen').setAttribute("style", "font-size:0px;");
	document.getElementById('dropdown-container2').setAttribute("style", "display:none");
	document.getElementById('dropdown-container3').setAttribute("style", "display:none");
	document.getElementById('dropdown-container4').setAttribute("style", "display:none");
	document.getElementById('dropdown-container5').setAttribute("style", "display:none");
	document.getElementById('dropdown-container7').setAttribute("style", "display:none");
	document.getElementById('dropdown-container8').setAttribute("style", "display:none");
	$('.dropdown-btn').removeClass('active');
});
$(document).on('click', '#sidebarCollapse6', function () {

	$('#sidebar').removeClass('active');
	
	document.getElementById('sidebarClose').setAttribute("style", "float:right");
	document.getElementById('sidebarOpen').setAttribute("style", "visibility:hidden", "transition:0.1ms");
	document.getElementById('sidebarClose').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel2').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel2').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel3').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel3').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel4').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel4').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel5').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel5').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel6').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel6').setAttribute("style", "font-size:18px");
	document.getElementById('showLabel7').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel7').setAttribute("style", "font-size:18px");

	document.getElementById('sidebarCollapse').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse2').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse3').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse4').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse5').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse6').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse7').setAttribute("style", "text-align:left");
	document.getElementById('sidebarOpen').setAttribute("style", "font-size:0px;");

	document.getElementById('dropdown-container2').setAttribute("style", "display:none");
	document.getElementById('dropdown-container3').setAttribute("style", "display:none");
	document.getElementById('dropdown-container4').setAttribute("style", "display:none");
	document.getElementById('dropdown-container5').setAttribute("style", "display:none");
	document.getElementById('dropdown-container6').setAttribute("style", "display:none");
	document.getElementById('dropdown-container8').setAttribute("style", "display:none");
	$('.dropdown-btn').removeClass('active');
});
$(document).on('click', '#sidebarCollapse7', function () {

	$('#sidebar').removeClass('active');
	
	document.getElementById('sidebarClose').setAttribute("style", "float:right");
	document.getElementById('sidebarOpen').setAttribute("style", "visibility:hidden", "transition:0.1ms");
	document.getElementById('sidebarClose').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel').setAttribute("style", "font-size:22px");
	document.getElementById('showLabel2').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel2').setAttribute("style", "font-size:22px");
	document.getElementById('showLabel3').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel3').setAttribute("style", "font-size:22px");
	document.getElementById('showLabel4').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel4').setAttribute("style", "font-size:22px");
	document.getElementById('showLabel5').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel5').setAttribute("style", "font-size:22px");
	document.getElementById('showLabel6').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel6').setAttribute("style", "font-size:22px");
	document.getElementById('showLabel7').setAttribute("style", "visibility:visible");
	document.getElementById('showLabel7').setAttribute("style", "font-size:22px");

	document.getElementById('sidebarCollapse').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse2').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse3').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse4').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse5').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse6').setAttribute("style", "text-align:left");
	document.getElementById('sidebarCollapse7').setAttribute("style", "text-align:left");
	document.getElementById('sidebarOpen').setAttribute("style", "font-size:0px;");

	document.getElementById('dropdown-container2').setAttribute("style", "display:none");
	document.getElementById('dropdown-container3').setAttribute("style", "display:none");
	document.getElementById('dropdown-container4').setAttribute("style", "display:none");
	document.getElementById('dropdown-container5').setAttribute("style", "display:none");
	document.getElementById('dropdown-container6').setAttribute("style", "display:none");
	document.getElementById('dropdown-container7').setAttribute("style", "display:none");
	$('.dropdown-btn').removeClass('active');
});
$(document).on('click', '#sidebarClose', function () {
	document.getElementById('sidebarClose').setAttribute("style", "visibility:hidden", "transition:0.1ms");
	document.getElementById('sidebarOpen').setAttribute("style", "visibility:visible", "transition:0.1ms");
	document.getElementById('sidebarClose').setAttribute("style", "font-size:0px;");
	


	$('#sidebar').addClass('active');



	document.getElementById('dropdown-container2').setAttribute("style", "display:none");
	document.getElementById('dropdown-container3').setAttribute("style", "display:none");
	document.getElementById('dropdown-container4').setAttribute("style", "display:none");
	document.getElementById('dropdown-container5').setAttribute("style", "display:none");
	document.getElementById('dropdown-container6').setAttribute("style", "display:none");
	document.getElementById('dropdown-container7').setAttribute("style", "display:none");
	document.getElementById('dropdown-container8').setAttribute("style", "display:none");

	document.getElementById('showLabel').setAttribute("style", "visibility:hidden");
	document.getElementById('showLabel').setAttribute("style", "font-size:0px");
	document.getElementById('showLabel2').setAttribute("style", "visibility:hidden");
	document.getElementById('showLabel2').setAttribute("style", "font-size:0px");
	document.getElementById('showLabel3').setAttribute("style", "visibility:hidden");
	document.getElementById('showLabel3').setAttribute("style", "font-size:0px");
	document.getElementById('showLabel4').setAttribute("style", "visibility:hidden");
	document.getElementById('showLabel4').setAttribute("style", "font-size:0px");
	document.getElementById('showLabel5').setAttribute("style", "visibility:hidden");
	document.getElementById('showLabel5').setAttribute("style", "font-size:0px");
	document.getElementById('showLabel6').setAttribute("style", "visibility:hidden");
	document.getElementById('showLabel6').setAttribute("style", "font-size:0px");
	document.getElementById('showLabel7').setAttribute("style", "visibility:hidden");
	document.getElementById('showLabel7').setAttribute("style", "font-size:0px");

	document.getElementById('sidebarCollapse').setAttribute("style", "text-align:right");
	document.getElementById('sidebarCollapse2').setAttribute("style", "text-align:right");
	document.getElementById('sidebarCollapse3').setAttribute("style", "text-align:right");
	document.getElementById('sidebarCollapse4').setAttribute("style", "text-align:right");
	document.getElementById('sidebarCollapse5').setAttribute("style", "text-align:right");
	document.getElementById('sidebarCollapse6').setAttribute("style", "text-align:right");
	document.getElementById('sidebarCollapse7').setAttribute("style", "text-align:right");
	$('.dropdown-btn').removeClass('active');


	

});


$(document).ready(function () {
	$("div.dropdown-container a").click(function (e) {
		e.preventDefault(); // prevent default link button redirect behaviour    
		var url = $(this).attr("href");
		$('#content').load(url);

	
	});
});


