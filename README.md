# 오늘마켓

오늘마켓 프로젝트는 가짜 쇼핑몰을 만들어봄과 동시에 저의 학습을 위한 프로젝트입니다.

배포 주소: https://dongwook98-today-market.netlify.app/

# 프로젝트 설명

오늘마켓 프로젝트는 기본적인 CRUD 기반의 쇼핑몰 프로젝트입니다.

로그인의 종류에 따라서 기능들이 제한됩니다.

로그인은 Firebase의 Authentication을 사용하였습니다.

Firebase를 택한 이유는 손쉽게 유저의 인증을 구현 할 수 있기 때문이었습니다.

- 일반 로그인

  - 상품 조회
  - 장바구니
    ![Jan-02-2024 19-09-40](https://github.com/dongwook98/today-market/assets/119502777/78143af8-a93d-4b31-9d5b-35b9d78e39b9)

- 어드민 로그인

  - 새로운 상품 추가
    ![Jan-02-2024 18-47-50](https://github.com/dongwook98/today-market/assets/119502777/0550f613-41d4-45f3-be7d-ccc7546ad3ff)

이 때 상품의 이미지를 업로드를 하는데 업로드 URL을 얻기위해 cloudinary를 사용하였습니다.

cloudinary를 택한 이유는 손쉽게 이미지 URL을 얻을 수 있고 이미지 리 사이징 등 여러가지 편리한 기능들을 제공하기 때문입니다.

또한 위 로그인에서 언급한 Firebase를 택한 이유가 한 가지 더 있습니다.

바로 실시간 데이터 베이스를 지원하기 때문입니다.

Firebase의 Realtime Database(실시간 데이터 베이스)로 어드민 사용자의 정보와 장바구니 정보와 홈페이지에 등록된 상품들의 정보를 저장하였습니다.

또한 이 프로젝트에서 서버에서 받아온 데이터를 캐싱하기 위해 리액트 쿼리를 사용하였는데 리액트 쿼리의 단점으로 useQuery를 쓰는곳마다 키를 일일이 지정해줘야 하고 그 키에 대한 데이터를 캐싱하고 싶다면 그 키를 일일이 기억해야 했습니다. 그래서 저는 커스텀 훅을 사용하여 useQuery와 useMutation을 사용한 코드를 그룹화하여서 유지보수성을 높여주었고 컴포넌트에서는 리액트 쿼리 코드와 서버 통신 코드를 분리하여 최대한 독립적으로 UI의 기능만 담당 할 수 있게 코딩하였습니다.

# 기술 스택 버전 정보

- **@tanstack/react-query@4.36.1**
- **firebase@10.7.1**
- **react-dom@18.2.0**
- **react-icons@4.12.0**
- **react-router-dom@6.21.1**
- **react-scripts@5.0.1**
- **react@18.2.0**
- **tailwindcss@3.4.0**
- **uuid@9.0.1**
