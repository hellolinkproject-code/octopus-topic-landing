# Vercel 배포 가이드

## 1. GitHub 저장소 준비

1. GitHub에서 새 저장소를 만든다.
2. 저장소 이름 예시: `octopus-topic-landing`
3. 이 폴더의 파일을 저장소에 올린다.
4. 저장소가 Public인지 Private인지 확인한다.

## 2. Vercel 연결

1. Vercel에 로그인한다.
2. `Add New` → `Project`를 선택한다.
3. GitHub 저장소를 선택한다.
4. Framework Preset은 `Other` 또는 자동 감지를 사용한다.
5. Build Command는 비워 둔다.
6. Output Directory도 비워 둔다.
7. Deploy를 누른다.

## 3. 배포 확인

- 첫 화면이 보이는가
- CSS가 적용되는가
- SVG 이미지가 보이는가
- 모바일 메뉴가 작동하는가
- FAQ가 작동하는가
- 폼 성공 메시지가 나오는가

## 4. 수정 후 재배포

GitHub에 새 커밋을 push하면 Vercel이 자동으로 다시 배포한다.

## 5. 과제 제출 항목

- GitHub 저장소 URL
- Vercel 배포 URL
- 기획 요약
- 핵심 타깃
- 핵심 메시지
- CTA
- 제작 과정에서 배운 점
