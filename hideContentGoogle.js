/*
window.onload = function(){
	document.getElementById("taw").style.display = "none";
}
*/

var hideAdsTimeout = setInterval(hideAdContent,1000);

function hideAdContent(){
	var adContent = document.getElementById("taw");
	if(adContent) adContent.style.display = "none";	
}