function hideSponsoredContent(){
	//sponsored content and ads on homepage
	var topBannerAd = document.getElementById("Billboard-ad");
	var sponsoredContent1 = Array.from(document.getElementsByClassName("js-stream-ad  Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)"));
	var sponsoredContent2 = Array.from(document.getElementsByClassName("Pos(r) Va(t) D(ib) Bxz(bb) Whs(n) Ov(h) js-stream-related-item-ad"));	
	var sponsoredVideoContent = Array.from(document.getElementsByClassName("js-stream-ad js-video-content Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)"));
	var sidebarAd = Array.from(document.getElementsByClassName("bg"));	
	
	//sponsored content on articles
	var sponsoredSideContent1 = Array.from(document.getElementsByClassName("Whs-nw  sponsor-color ad-sponsor-color")).map( element => element.parentNode.parentNode.parentNode );
	var sponsoredSideContent2 = Array.from(document.getElementsByClassName("Mend(6px) C(#b9bdc5)")).map( element => element.parentNode.parentNode.parentNode.parentNode.parentNode );
	
	var allSponsoredContent = sponsoredContent1.concat(sponsoredContent2).concat(sponsoredVideoContent).concat(sidebarAd).concat(sponsoredSideContent1).concat(sponsoredSideContent2).concat(topBannerAd);
	allSponsoredContent.forEach( element => {element.style.display = "none"} );
}

hideSponsoredContent();
window.addEventListener('scroll', hideSponsoredContent);
