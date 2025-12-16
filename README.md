# AI NEXUS

기자의, 기자에 의한, 기자를 위한 AI 서비스 플랫폼

## 🚀 배포된 사이트

- **CloudFront**: https://dulds2wv0e0ts.cloudfront.net
- **S3 Direct**: http://ai-nexus-app-unique-2024.s3-website.ap-northeast-2.amazonaws.com

## 📋 프로젝트 개요

AI NEXUS는 기자들을 위한 통합 AI 도구 플랫폼입니다. 취재는 10배 깊게, 작성은 100배 빠르게, 불가능은 가능하게 만드는 것이 목표입니다.

## 🛠 기술 스택

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Deployment**: AWS S3 + CloudFront
- **Language**: JavaScript/JSX

## 🎯 주요 기능

### 4개 AI 서비스
1. **📝 Article Writing** - AI 기반 기사 작성
2. **✏️ Proofreading** - 스마트 교정 및 검수
3. **🏷️ Title Generation** - 매력적인 제목 생성
4. **🤖 AI Tools** - 다양한 AI 도구 모음

### 사용자 기능
- 로그인/회원가입 시스템
- 반응형 디자인
- SPA 라우팅
- 별자리 애니메이션 배경

## 🚀 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 배포
npm run deploy
```

## 📦 배포 구조

```
AWS Infrastructure
├── S3 Bucket (ai-nexus-app-unique-2024)
│   ├── Static Website Hosting
│   └── Public Read Access
└── CloudFront Distribution (E3AXEZWXFEOYE3)
    ├── Custom Error Pages (SPA 라우팅)
    ├── HTTPS Redirect
    └── Global CDN
```

## 🔧 배포 설정

### SPA 라우팅 지원
- `_redirects`: 모든 경로를 index.html로 리다이렉트
- CloudFront 커스텀 에러 응답: 403/404 → 200 (index.html)

### 자동 배포
```bash
npm run deploy
```
- S3 업로드
- CloudFront 캐시 무효화

## 📁 프로젝트 구조

```
src/
├── App.jsx              # 메인 앱 (라우팅)
├── Desktop.jsx          # 포털 메인 페이지
├── Hero.jsx             # 별자리 애니메이션
├── HeaderSection.jsx    # 헤더
├── HeroSection.jsx      # 히어로 섹션
├── CategorySection.jsx  # 서비스 카테고리
├── FeaturesSection.jsx  # 기능 소개
└── [Service]Page.jsx    # 각 서비스 페이지
```

## 🎨 디자인 특징

- **그라디언트 배경** 및 **블러 효과**
- **펜 일러스트**를 활용한 창작 테마
- **유리 모피즘** 스타일 UI
- **별자리 애니메이션** 배경

## 📄 라이선스

© 2024 서울경제신문. All rights reserved.
Powered by AWS & AI Technology