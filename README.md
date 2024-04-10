## 포트폴리오 사이트

- 섬네일, 프로젝트별 간략한 설명 추가

### 오늘 할 일

### TodoList

- 컴포넌트간 상태 전달
- 배열을 사용한 컴포넌트 렌더링에서 key 와 불변성의 중요도 인지

### ImageList

- 외부 API 연동
- 비동기 함수 처리
- 로딩 중 처리
- API 키 보안
- isLoading 에 따른 조건부 렌더링에서 Images 컴포넌트가 통째로 unmount 되면서 key 가 동일함에도 전체가 다시 렌더링되는 문제 고민 중...
  - 임시방편으로 별도 태그 부여

### Login

- id 랑 password 를 받았으니 이제 googleAuth 같은데로 보내서 토큰을 받아야 한다. **_진행 중..._**

### 문제 & 해결

- 문제
  - Login
    - hide 와 valid 로 상태를 나누고 onChange 와 onSubmit 상황에서 두 상태를 부분적으로 동기화하며 안내 문자를 렌더링하고자 한다.
    - 하지만 Enter 가 입력될 때 submit 이벤트를 발생시키자 submit 기본 동작처럼 전체가 다시 렌더링 된다. preventDefault() 가 있음에도 그렇다.
  - javascript 에서 ref 로 발생시킨 submit 이벤트는 무한루프와 같은 경우를 방지하기 위해 기본적으로 onSubmit 에 바인딩 된 핸들러를 호출하지 않는다.
    - 예를들어 onSubmitHandler() 안에서 formRef.sumbit() 을 발생시키면 무한루프가 발생할 수 있다.
  - **_해결_** 우선은 Enter 입력을 감지하는 함수(catchEnter) 안에서 submitHandler 를 바로 호출했다. 다만 이러면 `<form>` 태그에서 핸들러가 바로 눈에 들어오지 않아 컴포넌트를 파악할 때 어려울 수 있다.
