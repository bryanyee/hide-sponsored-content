function hideSponsoredContent(){
	var sponsoredAnchors = document.getElementsByClassName("uiStreamSponsoredLink"); //"sponsor" anchor elements are 18 child nodes deep from the containing element
	Array.prototype.forEach.call(sponsoredAnchors, element => {element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none"});
}

hideSponsoredContent();
window.addEventListener('scroll', hideSponsoredContent);