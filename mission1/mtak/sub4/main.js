function video_alert(e){
	alert(e.target.textContent);
}

function video_popup(e){
	let win= window.open("popup.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
	win.document.write(`<h1 id="video-title">${e.target.textContent}</h1>`);
}

function video_layer_popup(e) {
	let title = e.target.textContent;
	let layer_popup = document.querySelector('#popup_bg');
	let popup_title = document.querySelector('#popup-title');
	popup_title.innerHTML = title;
	layer_popup.style.display = 'block';
}

function goDetail(e) {
	let fig = e.target.closest('figure');
	localStorage.setItem('main-video-stream', e.target.src);
	localStorage.setItem('main-video-title', fig.querySelector('.video-title').textContent);
	localStorage.setItem('main-video-content', fig.querySelector('.video-metadata').textContent);
	
	// localStorage.setItem('main-video-title', e.target.closet('figure'))
	// location.assign("http://127.0.0.1:5500/sub4/detail.html");
	location.href = "http://127.0.0.1:5500/sub4/detail.html";
	// location.replace("http://127.0.0.1:5500/sub4/detail.html");
}

let video_titles = document.querySelectorAll('.video-title');
for (let i = 0; i < video_titles.length; i++) {
	video_titles[i].addEventListener('click', video_alert);
	video_titles[i].addEventListener('click', video_popup);
	video_titles[i].addEventListener('click', video_layer_popup);
}

let layer_popup_close = document.querySelector('.popup-close');
layer_popup_close.addEventListener('click', () => {
	let layer_popup = document.querySelector('#popup_bg');
	layer_popup.style.display = 'none';
});

let videos = document.querySelectorAll('img');
for (let i = 0; i < videos.length; i++) {
	videos[i].addEventListener('click', goDetail);
}
