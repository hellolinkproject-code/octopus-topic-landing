# 옥토퍼스 토픽 — 스프린트 미션 5 랜딩페이지 패키지

이 폴더는 Codex가 **HTML, CSS, JavaScript만으로 정적 랜딩페이지를 제작**하도록 전달하는 기획·디자인·개발 기준과 실행 가능한 시작 파일을 포함한다.

## 과제 목표

- 창업 아이템의 핵심 가치인 `문제 → 해결 → 기대효과`를 한 페이지에서 이해시킨다.
- 주요 타깃 사용자가 서비스 이용 흐름을 빠르게 이해하도록 한다.
- CTA를 통해 무료 체험 신청 행동을 유도한다.
- HTML, CSS, JavaScript만 사용한다.
- 완성 후 Vercel에 배포한다.

## 서비스 한 줄 정의

휴대전화와 PC에서 이용하는 하나의 반응형 웹서비스로, 어휘·읽기·53번 학습을 통해 포인트를 모으고 PC 화면에 최적화된 54번 정밀 첨삭을 이용하는 TOPIK 성장 학습 서비스.

## 주요 기능

- 한국어·영어·중국어·베트남어·몽골어·일본어 지원
- 360px 모바일부터 데스크톱까지 반응형 레이아웃
- 모바일 내비게이션, FAQ 아코디언, 스크롤 등장 효과
- 무료 체험 폼 검증과 브라우저 `localStorage` 저장
- 키보드 탐색과 모션 감소 설정 지원

## 폴더 구성

```text
.
├── AGENTS.md
├── CODEX_PROMPT.md
├── README.md
├── index.html
├── styles.css
├── script.js
├── vercel.json
├── .gitignore
├── assets/
│   ├── favicon.svg
│   ├── octopus-logo.svg
│   ├── hero-illustration.svg
│   ├── mascot-problem-feedback.png
│   ├── mascot-problem-cost.png
│   ├── mascot-problem-habit.png
│   ├── design-reference.png
│   └── design-tokens.json
└── docs/
    ├── 01_PROJECT_BRIEF.md
    ├── 02_LANDING_COPY.md
    ├── 03_WIREFRAME.md
    ├── 04_DESIGN_SYSTEM.md
    ├── 05_INTERACTIONS.md
    ├── 06_ACCEPTANCE_CRITERIA.md
    └── 07_VERCEL_DEPLOY.md
```

## Codex 사용 순서

1. 이 폴더를 Codex에서 연다.
2. `AGENTS.md`를 먼저 읽도록 한다.
3. `CODEX_PROMPT.md`의 명령문을 Codex에 전달한다.
4. Codex가 수정한 결과를 브라우저에서 확인한다.
5. `06_ACCEPTANCE_CRITERIA.md` 기준으로 점검한다.
6. GitHub에 올리고 Vercel에 배포한다.

## 로컬 확인

파일을 직접 열어도 되지만, 경로 문제를 줄이려면 간단한 로컬 서버를 사용한다.

```bash
python -m http.server 5500
```

브라우저에서 `http://localhost:5500`을 연다.
