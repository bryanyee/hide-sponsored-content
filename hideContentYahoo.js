function hideSponsoredContent(){
	var sponsoredContent = Array.from(document.getElementsByClassName("js-stream-ad  Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)"));
	var sponsoredVideoContent = Array.from(document.getElementsByClassName("js-stream-ad js-video-content Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)"));
	sponsoredContent.forEach( element => {element.style.display = "none"} );
	sponsoredVideoContent.forEach( element => {element.style.display = "none"} );
}

hideSponsoredContent();
window.addEventListener('scroll', hideSponsoredContent);
