function hideSponsoredContent(){
	var sponsoredContentT  = document.getElementsByClassName("bf-widget unit bf_dom gpt"),
		sponsoredContentTS = document.getElementsByClassName("bf-widget partner-area lede--bold-title  bf_dom gpt"),
		sponsoredContentM  = document.getElementsByClassName("bf-widget post partner-area viral-post   bf_dom "),
		sponsoredContentS  = document.getElementsByClassName("bf-widget partner-area lede--bold-title bf_dom gpt"),
		sponsoredContentS2 = document.getElementsByClassName("bf-widget dd post sidebar-post bf_dom lede--stacked gpt"),
		sponsoredContentB  = document.getElementsByClassName("bf-widget post partner-area viral-post  bf_dom gpt");

	var sponsoredContentArray = Array.from(sponsoredContentT)
								.concat(Array.from(sponsoredContentTS))
								.concat(Array.from(sponsoredContentM))
								.concat(Array.from(sponsoredContentS))
								.concat(Array.from(sponsoredContentS2))
								.concat(Array.from(sponsoredContentB));

	sponsoredContentArray.forEach( element => { element.style.display = "none" } );
}

hideSponsoredContent();
window.addEventListener('scroll', hideSponsoredContent);
