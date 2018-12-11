function ourservicesElements(ourservices) {
	let ourservicesTemplate = $('script[data="ourservices-services"]').html();
	let ourservicesRecomendationTemplate = $('script[data="ourservices-recommendations"]').html();
	let outservicesItens = '';

	let countItens = 0;
	for (var i = 0; i < ourservices.services.length; i++) {
		let item = $('script[data="ourservices-services-itens"]').html();
		item = item.replace("{{$ourservices-service-imagelink}}", ourservices.services[i].image);
		item = item.replace("{{$ourservices-service-title}}", ourservices.services[i].title);
		item = item.replace("{{$ourservices-service-detail}}", ourservices.services[i].detail);

		outservicesItens += item;
		countItens++;
		if(countItens == 3){
			ourservicesTemplate = ourservicesTemplate.replace("{{$ourservices-services-itens}}", outservicesItens);
			$('.services .container.secondary').append(ourservicesTemplate);
			ourservicesTemplate = $('script[data="ourservices-services"]').html();

			countItens = 0;
			outservicesItens = '';
		}
	}

	ourservicesRecomendationTemplate = ourservicesRecomendationTemplate.replace("{{$ourservices-recommendations-text}}", ourservices.recomendation.text);
	ourservicesRecomendationTemplate = ourservicesRecomendationTemplate.replace("{{$ourservices-recommendations-author}}", ourservices.recomendation.author)

	$('.services .third .container').append(ourservicesRecomendationTemplate);

}