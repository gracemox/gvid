function videoIdFromUrl(url){ return url.slice(-11); };

function buildIframe(videoId){
  var beginning = '<iframe src="https://www.youtube.com/embed/';
  var end = '" frameborder="0" allowfullscreen></iframe>';
  var iframe = beginning + videoId + end;
  return iframe;
};

function addVideo(){
	// extract video id from url
	// built iframe html string
	// add iframe string to the page
	var url = 'https://www.youtube.com/watch?v=v3kh4HVSqWQ';
	var videoId = videoIdFromUrl(url);
	var iframe = buildIframe(videoId);
	$('.flex-parent').append(iframe);
};

function clickHandler() {
	$('#add-video-button').click(addVideo);
}

$(document).ready(clickHandler);