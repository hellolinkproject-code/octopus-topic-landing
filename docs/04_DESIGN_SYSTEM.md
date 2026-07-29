# 디자인 시스템

## 브랜드 방향

- 전문적인 TOPIK 학습 서비스
- 부담스럽지 않은 친근함
- 성장과 보상을 시각적으로 표현
- 게임 앱보다 학습 서비스가 먼저 보이도록 구성

## 컬러

```css
--primary-900: #5A2FB3;
--primary-700: #7C40DB;
--primary-500: #A678F6;
--primary-300: #D9C6FB;
--primary-100: #F1EAFE;

--accent-700: #2CC7A0;
--accent-500: #6EE7C8;
--accent-100: #E9FBF7;

--secondary-700: #FF8A4C;
--secondary-100: #FFF3EC;

--gray-900: #111827;
--gray-700: #374151;
--gray-500: #6B7280;
--gray-200: #E5E7EB;
--background: #F8F7FD;
--white: #FFFFFF;
```

## 사용 규칙

- 메인 CTA: Primary 700
- CTA hover: Primary 900
- 포인트·성공: Accent 700
- 강조 배지: Primary 100 + Primary 700
- 주의 문구: Secondary 100 + Secondary 700
- 본문: Gray 700
- 제목: Gray 900

## 타이포그래피

시스템 폰트 우선:

```css
font-family: Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
```

### 데스크톱

- H1: 56px / 1.12 / 800
- H2: 38px / 1.25 / 750
- H3: 22px / 1.35 / 700
- Body large: 18px / 1.7
- Body: 16px / 1.7
- Caption: 14px / 1.5

### 모바일

- H1: 38px / 1.18 / 800
- H2: 28px / 1.3 / 750
- H3: 20px / 1.4 / 700
- Body: 16px / 1.65

## 모서리

- 버튼: 14px
- 카드: 22px
- 배지: 999px
- 큰 CTA 패널: 28px

## 여백

- 4, 8, 12, 16, 24, 32, 48, 64, 96px 체계
- 섹션 상하: 데스크톱 96px, 모바일 72px
- 카드 내부: 24~32px

## 그림자

```css
box-shadow: 0 18px 50px rgba(31, 41, 55, 0.08);
```

그림자는 핵심 카드와 히어로 시각화에만 제한한다.
