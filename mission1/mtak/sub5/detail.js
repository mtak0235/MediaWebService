let main_video_stream = document.querySelector(".main-video-stream");
let img = document.createElement("img");
img.src = localStorage.getItem("main-video-stream");
img.style.width = "100%";
img.style.height = "100%";
main_video_stream.appendChild(img);
let main_video_title = document.querySelector(".main-video-title");
let main_video_content = document.querySelector(".main-video-content > .content");
main_video_title.textContent = localStorage.getItem("main-video-title");
main_video_content.textContent = localStorage.getItem("main-video-content");


document.addEventListener('DOMContentLoaded', function () { //DOM 생성 후 이벤트 리스너 등록
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
            document.querySelector('.main-video-content').innerHTML = localStorage.getItem("main-video-content");
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
    let contentHeight = document.querySelector('.main-video-content > .content').offsetHeight; //컨텐츠 높이 얻기
    if (contentHeight <= this.document.querySelector('.main-video-content > .content').style.lineHeight * 4) {
        document.querySelector('.main-video-content').classList.remove('showstep1'); // 초기값보다 작으면 전체 컨텐츠 표시
        document.querySelector('.btn_open').classList.add('hide'); // 버튼 감춤
    } else {
        console.log("here");
        resize_content_to_fit();
        document.querySelector('.main-video-content').innerHTML = document.querySelector('.main-video-content').innerHTML + "...";
    }
});

function resize_content_to_fit() {
    let target = document.querySelector('.main-video-content');
    target.innerHTML = target.textContent.substring(0, target.textContent.length - 1);
    console.log(target.innerHTML);
    console.log(document.querySelector('.main-video-content > .content'));
    let contentHeight = document.querySelector('.main-video-content > .content').offsetHeight;
    if (contentHeight >= document.querySelector('.main-video-content > .content').style.lineHeight * 4) {
        resize_to_fit();
    }
}

