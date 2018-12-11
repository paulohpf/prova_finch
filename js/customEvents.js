$(function() {

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			}
		}
	});

	//Construção do conteudo About e Our Services
	$.ajax({
		url:"/info.json",
		dataType: 'json',
		success:function(data){
			aboutElements(data.about);
			ourservicesElements(data.ourservices);
		}
	});

	//Funções do formulário de E-mail
	$("#contactform").on('submit', function(e) {
		e.preventDefault();

		var confirmacao = confirm("confirmar?");

		if(confirmacao == true) {
			console.log($(this).serializeArray());
			alert("E-mail enviado");
			$(this)[0].reset();
		}
	});

});


