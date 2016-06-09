function hideSponsoredContent(){
	var sponsoredContent = document.getElementsByClassName("js-stream-ad  Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)");
	var sponsoredVideoContent = document.getElementsByClassName("js-stream-ad js-video-content Wow(bw) Pos(r) Mx(a) Mt(-1px) Bxz(bb) Bgc(#fff)");
	Array.prototype.forEach.call(sponsoredContent, element => {element.style.display = "none"});
	if(sponsoredVideoContent !== undefined) Array.prototype.forEach.call(sponsoredVideoContent, element => {element.style.display = "none"});
}

hideSponsoredContent();
window.addEventListener('scroll', hideSponsoredContent);
