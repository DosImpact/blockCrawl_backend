# BlockCrawl/backend

# Install

```
# yarn install
- 모듈을 설치합니다.

# yarn start

- 서버를 실행합니다.(Dev)

# yarn test

- 크롤링 모듈을 테스트 하기 위한 모드 입니다.
- testMode.js에 인자와 테스트할 모듈(nmoive.js) 를 두고 실행합니다.

# yarn build

- 서버를 빌드합니다.


# docker build -t blockcrwalserver:0.0.1 .
- 도커 이미지를 빌드합니다.
```

# Process

```
1. 서버 셋팅 env

2. 비즈니스 로직 구현

2.1 크롤링 API 비즈니스 로직 API

- 동일 구조의 HTML 파일 구조에 대한, N개의 url 에 대응하여 동일한 선택자가 들어오면 크롤링
-


3. 베포하기 devops

4. 이슈 트러블 슈팅 issuse

```

# 백앤드 작업 진행

- Prisma 클라이언트 만들기
- 데이터 모델링 및 마이그레이션
- User 인증방법 JWT 토큰
- .env 설치
- 서버 로깅 모듈 morgan 설치

```
prisma login
prisma init

```
