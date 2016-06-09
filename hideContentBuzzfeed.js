function hideSponsoredContent(){
	var sponsoredContentT  = document.getElementsByClassName("bf-widget unit bf_dom gpt"),
		sponsoredContentTS = document.getElementsByClassName("bf-widget partner-area lede--bold-title  bf_dom gpt"),
		sponsoredContentM  = document.getElementsByClassName("bf-widget post partner-area viral-post   bf_dom "),
		sponsoredContentS  = document.getElementsByClassName("bf-widget partner-area lede--bold-title bf_dom gpt"),
		sponsoredContentS2 = document.getElementsByClassName("bf-widget dd post sidebar-post bf_dom lede--stacked gpt"),
		sponsoredContentB  = document.getElementsByClassName("bf-widget post partner-area viral-post  bf_dom gpt");

	Array.prototype.forEach.call(sponsoredContentT, element => {element.style.display = "none"});
	Array.prototype.forEach.call(sponsoredContentTS, element => {element.style.display = "none"});
	Array.prototype.forEach.call(sponsoredContentM, element => {element.style.display = "none"});
	Array.prototype.forEach.call(sponsoredContentS, element => {element.style.display = "none"});
	Array.prototype.forEach.call(sponsoredContentS2, element => {element.style.display = "none"});
	Array.prototype.forEach.call(sponsoredContentB, element => {element.style.display = "none"});
}

hideSponsoredContent();
window.addEventListener('scroll', hideSponsoredContent);
