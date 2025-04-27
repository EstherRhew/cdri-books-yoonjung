# 프로젝트 개요

Certicos Books는 사용자가 원하는 책을 검색하고, 마음에 드는 책을 찜할 수 있는 애플리케이션입니다.

### 주요 기능

- **도서 검색**:  
  키워드를 입력하여 전체 도서를 검색 및 상세 검색을 통해 제목/저자/출판사 별로 세부 검색
- **검색 기록 저장**:  
  입력창 focus 시 최근 검색어 8개까지 표시하며 이후 브라우저 재 접속시에도 유지
- **찜하기 및 목록 저장**:  
  마음에 드는 책을 찜하고 이후 브라우저 재 접속시에도 유지
- **페이지네이션 지원**:  
  많은 검색 결과를 10개씩 페이지네이션하여 탐색

# 실행 방법 및 환경 설정

### 실행 방법

```bash
# 1. 프로젝트 클론
git clone https://github.com/EstherRhew/cdri-books-yoonjung.git

# 2. 패키지 설치
yarn install
# 또는
npm i

# 3. 개발 서버 실행
yarn dev
# 또는
npm dev
```

### 환경 설정

- Node.js: v22.15.0
- yarn: v1.22.22
- React: v19.0
- 빌드도구: Vite
- Kakao API Key .env 파일 설정 (VITE_API_KEY)

## 폴더 구조 및 주요 코드 설명

```
src/
├── assets/ # 이미지 및 아이콘
├── components/ # 공통 컴포넌트
├── configs/ # 상수
├── hooks/ # 커스텀 훅 모음
├── pages/ # 페이지 및 해당 페이지 전용 컴포넌트
├── services/ # API 모듈
├── styles/ # 글로벌 스타일 및 테마
└── utils/ # 유틸리티 함수
```

components/

- common :  
  피그마 스타일 가이드를 기반으로 한 Text, Button 등 공통 디자인 시스템 컴포넌트
- BookItem, BookList :  
   Compound Pattern과 ContextAPI를 사용한 BookItem 컴포넌트 설계

services/

- API 요청을 담당하며, Axios와 React Query를 추상화해 일관된 데이터 패칭 관리

hooks/

- 로컬스토리지 관리, 컴포넌트 외부 클릭 감지, 비즈니스 로직을 커스텀 훅으로 추상화하여 재사용성을 강화

styles/

- 테마 및 공통 스타일을 관리하여, 디자인 일관성과 유지보수성을 높임

# 라이브러리 선택 이유

- React Query (@tanstack/react-query)  
  서버 상태를 효율적으로 관리하고, Suspense 지원을 통해 자연스러운 로딩 UX를 제공하기 위해 선택

- styled-components  
  컴포넌트 단위 스타일링 및 테마 기반 스타일 일관성 유지를 위해 선택

- rc-pagination  
  간단하고 러닝커브가 낮은 페이지네이션 라이브러리로 빠른 적용이 가능하여 선택

- Radix UI Popover(@radix-ui/react-popover)  
  상세 검색과 같은 팝업 인터페이스를 접근성을 고려하여 빠르고 안정적으로 구성하기 위해 선택

# 강조 하고 싶은 기능

- Skeleton UI 적용  
  API 응답 대기 및 이미지 로딩 시 사용자 경험(UX)을 향상시키기 위해 Skeleton 컴포넌트를 추가했습니다.

- 디자인 시스템 구축  
  Typography, Button, BookItem 등 공통 컴포넌트를 기반으로 일관된 디자인 시스템을 구축했습니다.

- 텍스트 길이 처리  
  책 제목, 작가명, 책 정보 등에 ellipsis 스타일을 적용하여 다양한 데이터 길이를 자연스럽게 처리했습니다.

- 찜하기 UX 개선  
  "내가 찜한 책" 페이지에서 실수로 좋아요를 해제해도 즉시 리스트에서 사라지지 않고,  
  페이지 재진입 시 반영되도록 UX를 고려했습니다.

- 협업 및 깃 컨벤션 준수  
  기능별로 브랜치를 나누고 PR을 작성하여 머지하였으며, 커밋 메시지도 명확한 컨벤션을 따랐습니다.
