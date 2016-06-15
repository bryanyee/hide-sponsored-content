function hideSponsoredContent(){
	var sponsoredContentT  = Array.from(document.getElementsByClassName("bf-widget unit bf_dom gpt")),
		sponsoredContentTS = Array.from(document.getElementsByClassName("bf-widget partner-area lede--bold-title  bf_dom gpt")),
		sponsoredContentM  = Array.from(document.getElementsByClassName("bf-widget post partner-area viral-post   bf_dom ")),
		sponsoredContentS  = Array.from(document.getElementsByClassName("bf-widget partner-area lede--bold-title bf_dom gpt")),
		sponsoredContentS2 = Array.from(document.getElementsByClassName("bf-widget dd post sidebar-post bf_dom lede--stacked gpt")),
		sponsoredContentB  = Array.from(document.getElementsByClassName("bf-widget post partner-area viral-post  bf_dom gpt"));

	var sponsoredContentArray = sponsoredContentT
								.concat(sponsoredContentTS)
								.concat(sponsoredContentM)
								.concat(sponsoredContentS)
								.concat(sponsoredContentS2)
								.concat(sponsoredContentB);

	sponsoredContentArray.forEach( element => { element.style.display = "none" } );
}

hideSponsoredContent();
window.addEventListener('scroll', hideSponsoredContent);
