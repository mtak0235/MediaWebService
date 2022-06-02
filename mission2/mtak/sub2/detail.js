console.log("normal state");

document.addEventListener('DOMContentLoaded', function () { //DOM 생성 후 이벤트 리스너 등록
	console.log("after DOMContentLoaded");

	let main_video_stream = document.querySelector(".main-video-stream");
	let img = document.createElement("img");
	img.src = localStorage.getItem("main-video-stream");
	main_video_stream.appendChild(img);
	let main_video_title = document.querySelector(".main-video-title");
	let main_video_content = document.querySelector(".main-video-content > .content");
	main_video_title.textContent = localStorage.getItem("main-video-title");
	main_video_content.textContent = localStorage.getItem("main-video-content");

	let playlist = document.querySelector(".playlist");
	fetch("./data.json")
		.then(response => response.json())
		.then(data => {
			console.log(data);
			data = data.playlist;
			data.forEach(item => {
				console.log(item);
				let sub_video = document.createElement('figure');
				sub_video.className = "sub-video";
				let sub_img = document.createElement('img');
				sub_img.src = item.src;
				sub_video.appendChild(sub_img);
				let sub_desc = document.createElement('figcaption');
				let sub_desc_title = document.createElement('div');
				sub_desc_title.className = "sub-video-desc-title";
				sub_desc_title.textContent = item.title;
				sub_desc.appendChild(sub_desc_title);
				// let sub_video_desc_content = document.createElement('div');
				// sub_desc_content.className = "sub-video-desc-content";
				// sub_desc_content.textContent = item.content;
				// sub_desc.appendChild(sub_video_desc_content);
				sub_video.appendChild(sub_desc);
				playlist.appendChild(sub_video);
			});
		});



		

		// 더보기 버튼 이벤트 리스너
		document.querySelector('.btn_open').addEventListener('click', function (e) {

			let classList = document.querySelector('.main-video-content').classList; // 더보기 프레임의 클래스 정보 얻기

			if (classList.contains('showstep1')) {
				classList.remove('showstep1');
				document.querySelector('.btn_open').classList.add('hide');
			}
			//전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시
			if (!classList.contains('showstep1') && !classList.contains('showstep2')) {
				e.target.classList.add('hide');
				document.querySelector('.btn_close').classList.remove('hide');
			}

			if (classList.contains('showstep2') && !classList.contains('showstep1')) {
				document.querySelector('.main-video-content > .content').innerHTML = localStorage.getItem("main-video-content");
				e.target.classList.add('hide');
				document.querySelector('.btn_close').classList.remove('hide');
			}

		});
});

document.querySelector('.btn_close').addEventListener('click', function (e) {
	e.target.classList.add('hide');
	document.querySelector('.btn_open').classList.remove('hide');
	document.querySelector('.main-video-content').classList.add('showstep1'); // 초기 감춤 상태로 복귀
});

//컨텐츠 로딩 완료 후 높이 기준으로 클래스 재처리
window.addEventListener('load', function () {
	console.log('after  Loading')
	let contentHeight = document.querySelector('.main-video-content > .content').offsetHeight; //컨텐츠 높이 얻기
	if (contentHeight <= this.document.querySelector('.main-video-content > .content').style.lineHeight * 4) {
		document.querySelector('.main-video-content').classList.remove('showstep1'); // 초기값보다 작으면 전체 컨텐츠 표시
		document.querySelector('.btn_open').classList.add('hide'); // 버튼 감춤
	} else {
		let main_video_content_short = localStorage.getItem("main-video-content").substring(0, 800) + "...";
		document.querySelector('.main-video-content > .content').innerHTML = main_video_content_short;
	}
});

// function resize_content_to_fit() {
//     let target = document.querySelector('.main-video-content');
//     target.innerHTML = target.textContent.substring(0, target.textContent.length - 1);
//     let contentHeight = document.querySelector('.main-video-content > .content').offsetHeight;
//     if (contentHeight == document.querySelector('.main-video-content > .content').style.lineHeight * 4)
//         return ;
//     if (contentHeight > document.querySelector('.main-video-content > .content').style.lineHeight * 4) {
//         resize_to_fit();
//     }
// }

var player = videojs("player");

player.playlist([
    {
        sources: [{
            src: 'https://www.youtube.com/watch?v=AZGcmvrTX9M',
            type: 'video/youtube'
        }]
    },
    {
        sources: [{
            src: 'https://www.youtube.com/watch?v=n4YXauObskA',
            type: 'video/youtube'
        }]
    },
    {
        sources: [{
            src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
            type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    }
]);

// Play through the playlist automatically.
player.playlist.autoadvance(0);
player.playlist.repeat(true);