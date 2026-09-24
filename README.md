# CAIPEX 메인 페이지 (caipex.site) — GitHub 호스팅 폴더

이 폴더는 **caipex.site 메인 페이지**의 배포용 사본입니다.
원격 저장소: https://github.com/teamprotofelix/caipex (GitHub Pages, `main` 브랜치, CNAME: caipex.site)

## 일의 흐름 (워크플로)

```
참고_폴더\caipex-main        → 이 폴더로 복사 → push.bat 실행 → caipex.site 반영 (1~2분)
   (메인 페이지 소스)            (배포 사본)       (GitHub Pages)
```

게시판(trademark.moip.ai.kr)은 루트 폴더의 `node server.js`로 관리하고,
메인 페이지는 여기서 `push.bat` 하나로 배포하면 됩니다.

## 수정 후 배포 방법

1. 이 폴더(또는 참고_폴더\caipex-main)에서 파일 수정
2. (참고_폴더에서 수정했다면) 수정한 파일을 이 폴더로 복사
3. `push.bat` 더블클릭 → GitHub 로그인(최초 1회) → 자동 push

또는 수동으로:
```bash
git add -A
git commit -m "메인 페이지 업데이트"
git push origin main
```

## 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` 외 5개 페이지 | 메인 사이트 각 페이지 (테마/언어 전환 포함) |
| `assets/site.css` | 공통 스타일 (라이트/다크/시스템 테마 변수) |
| `assets/i18n.js` | 한국어/영어/일본어 번역 사전 |
| `assets/site.js` | 테마 토글·언어 적용·라이트박스 로직 |
| `favicon.svg` | 파비콘 |
| `CNAME` | 도메인 설정 (caipex.site — 삭제 금지) |
| `images/`, `background.jpg`, `hero-image.jpg`, `caipexlogo.*` | 이미지 자산 |
| `index_preparing.html` | 구버전 대기 페이지 (링크 없음) |

## 참고

- 이 폴더는 게시판 프로젝트 루트의 `참고_폴더\caipex-main`과 내용이 같아야 합니다 (이 폴더가 배포 소스).
- GitHub Pages는 push 후 1~2분 내 자동 배포됩니다.
