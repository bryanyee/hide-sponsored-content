function hideSponsoredContent(){
	var sponsoredAnchors = Array.from(document.getElementsByClassName("uiStreamSponsoredLink")); //"sponsor" anchor elements are 18 child nodes deep from the containing element
	sponsoredAnchors.forEach( element => {element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none"} );
}

hideSponsoredContent();
window.addEventListener('scroll', hideSponsoredContent);