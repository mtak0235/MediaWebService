# 미디어 웹 서비스 개발 과정
## 해당 프로젝트 참여 이유
web에 대한 이해 없이 spring으로 rest api만 만들왔다.
게시판 개발 과정에서 "여러개의 client에서 데이터를 받아서 하나의 시퀀스로 처리하는 서버 로직을 만들어봐라. 즉, input이 여러개인 아키테쳐를 설계해봐라" 라는 요구사항이 들어왔을 때 기술적으로 어떻게 그것이 가능한지 몰랐다. 
직접 만들어보면서 브라우저의 동작 매커니즘을 이해하기 위해 본 프로젝트에 참여했다.
## 프로젝트 운영 매커니즘
3명의 42서울 카뎃이 개포 클러스터에 모여서 매일 2시간동안 학습 및 코딩을 했다.
90분동안 자율 개발하고 30분 동안 서로의 코드를 보면서 리뷰했다.
github의 이슈 관리 툴을 사용하여 서로의 진행상황과 좋은 레퍼런스를 공유했다.

<img width="1483" alt="스크린샷 2022-06-03 오후 4 21 35" src="https://user-images.githubusercontent.com/48946398/171823836-d8523340-9cfd-4d9e-8916-466c68278a42.png">
<img width="508" alt="log0" src="https://user-images.githubusercontent.com/48946398/171824575-8e125b31-e536-4976-a995-bad60dd59ac0.png">
<img width="384" alt="log" src="https://user-images.githubusercontent.com/48946398/171824587-8dd2361f-3fe5-4c6c-af67-2716062f32b3.png">


## 개발 기간
2022.05.09 ~ 2022.06.02 

## 개발 내용
mission1에서는 영상 콘텐츠의 메인 화면을 구현한다.
레이아웃,다양한 형태의 팝업(layer popup, alert, popup etc),이벤트 핸들링, 브라우저에서 히스토리를 남기는 매커니즘, DOM tree 조작, browser Storage 등에 대해 배워갈 수 있다. 

<img width="1787" alt="1-1" src="https://user-images.githubusercontent.com/48946398/171824006-bb882f56-fe8c-42c4-b852-6900d79b0d8d.png">
<img width="1788" alt="1-2" src="https://user-images.githubusercontent.com/48946398/171824086-1cba2575-549c-4d75-acb7-d5dae362cb74.png">
<img width="1792" alt="1-3" src="https://user-images.githubusercontent.com/48946398/171824135-5e894be4-271a-4af9-b5d2-8a648b45b709.png">
<img width="1792" alt="1-3-2" src="https://user-images.githubusercontent.com/48946398/171824148-837d47e1-1ec6-48c9-ae23-edbfd26945f5.png">
<img width="1780" alt="1-3-3" src="https://user-images.githubusercontent.com/48946398/171824160-7674bb17-d7a1-4037-9e0c-7f55d2c0f77b.png">
<img width="1791" alt="1-4" src="https://user-images.githubusercontent.com/48946398/171824201-5431ed6b-f377-48d1-923d-cdfb9838e817.png">
<img width="1792" alt="1-4-2" src="https://user-images.githubusercontent.com/48946398/171824216-792b9313-15f7-49d7-8b28-8d6e47d6e179.png">
<img width="1791" alt="1-5" src="https://user-images.githubusercontent.com/48946398/171824233-3e283802-9d37-4ad4-b687-fe442baaf516.png">
<img width="1792" alt="1-5-2" src="https://user-images.githubusercontent.com/48946398/171824251-37dc6afd-7009-4439-bad9-bead0892d2af.png">


mission2에서는 플레이어 상세 페이지를 구현한다.
fetch()로 데이터 가져오는 법, video 태그 사용법, youtube api 사용법 등을 배워갈 수 있다. 

<img width="1792" alt="2-1" src="https://user-images.githubusercontent.com/48946398/171824294-452d8d0a-ce32-45b0-a423-bf4faa40f439.png">
<img width="1792" alt="2-2" src="https://user-images.githubusercontent.com/48946398/171824306-217fc377-965a-4851-85c3-eb440ed166b9.png">

## 프로젝트 일정

<img width="723" alt="timezone" src="https://user-images.githubusercontent.com/48946398/171824323-d28992e3-bb21-4443-a032-e717745d81f4.png">

## 후기
* 웹페이지를 만들면서 서버가 어느 지점에 필요한지 다시 한번 생각해보게 되었다.
* url 변경없이 프론트의 컴포넌트를 동적으로 변경하면서 동작하는 방식인 SPA도 media 쿼리를 사용하면 만들 수 있겠다는 생각을 했다.
* 여러사람이 같은 주제로 코드를 짜다 보니 다양한 접근법과 더 풍부한 키워드를 얻을 수 있어서 학습에 효율적이었다.
