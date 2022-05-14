function video_alert(e){
	alert(e.target.textContent);
}

function video_popup(e){
	let win= window.open("popup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
	win.document.write(`<h1 id="video-title">${e.target.textContent}</h1>`);
}

function video_layer_popup(e) {

}

let video_titles = document.querySelectorAll('.video-title');
for (let i = 0; i < video_titles.length; i++) {
	// video_titles[i].addEventListener('click', video_alert);
	// video_titles[i].addEventListener('click', video_popup);
	video_titles[i].addEventListener('click', video_layer_popup);
}


