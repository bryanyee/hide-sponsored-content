function hideSponsoredContent(){
	var topBannerAd = document.getElementById("Billboard-ad");
	var sponsoredContent = Array.from(document.getElementsByClassName("js-stream-ad  Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)"));
	var sponsoredVideoContent = Array.from(document.getElementsByClassName("js-stream-ad js-video-content Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)"));
	var sponsoredSideContent1 = Array.from(document.getElementsByClassName("Whs-nw  sponsor-color ad-sponsor-color")).map( element => element.parentNode.parentNode.parentNode );
	var sponsoredSideContent2 = Array.from(document.getElementsByClassName("Mend(6px) C(#b9bdc5)")).map( element => element.parentNode.parentNode.parentNode.parentNode.parentNode );
	var allSponsoredContent = sponsoredContent.concat(sponsoredVideoContent).concat(sponsoredSideContent1).concat(sponsoredSideContent2).concat(topBannerAd);
	allSponsoredContent.forEach( element => {element.style.display = "none"} );
}

hideSponsoredContent();
window.addEventListener('scroll', hideSponsoredContent);
