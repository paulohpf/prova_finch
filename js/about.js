function aboutElements(about) {
	let aboutTemplate = $('script[data="about"]').html();
	let aboutItemTemplate = $('script[data="about-itens"]').html();
	let aboutInsightTemplate = $('script[data="about-insights"]').html();
	let aboutClientsTemplate = $('script[data="about-clients"]').html();
	let aboutItens = '';
	let aboutInsights = '';
	let aboutClients = '';

	aboutTemplate = aboutTemplate.replace("{{$introabout}}", about.intro);

	for(var i=0; i < about.itens.length; i++) {
		let item = $('script[data="about-itens"]').html();
		item = item.replace("{{$item-imagelink}}", about.itens[i].image);
		item = item.replace("{{$item-intro}}", about.itens[i].intro);
		item = item.replace("{{$item-detail}}", about.itens[i].detail);

		aboutItens += item;
	}

	aboutTemplate = aboutTemplate.replace("{{$about-itens}}", aboutItens);

	for(var i=0; i < about.insights.length; i++) {
		let item = $('script[data="about-insights-item"]').html();
		item = item.replace("{{$insight-imagelink}}", about.insights[i].image);
		item = item.replace("{{$insight-number}}", about.insights[i].number);
		item = item.replace("{{$insight-text}}", about.insights[i].text);

		aboutInsights += item;
	}
	aboutInsightTemplate = aboutInsightTemplate.replace("{{$about-insights-itens}}", aboutInsights);

	$('.about .container.secondary').append(aboutTemplate);
	$('.about .insights .container').append(aboutInsightTemplate);
}