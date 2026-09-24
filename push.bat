@echo off
chcp 65001 >nul
REM ============================================
REM CAIPEX 메인 페이지 GitHub 배포 스크립트
REM  - 이 폴더의 변경사항을 커밋하고 caipex.site로 push
REM  - push 후 1~2분 내 caipex.site에 반영됩니다
REM ============================================
cd /d %~dp0

git add -A
git commit -m "메인 페이지 업데이트 %date% %time%" 2>nul
if %errorlevel% neq 0 (
    echo [정보] 커밋할 변경사항이 없습니다.
)

echo GitHub로 push 중...
git push origin main
if %errorlevel% equ 0 (
    echo.
    echo ✓ 배포 완료! 1~2분 후 https://caipex.site 에 반영됩니다.
) else (
    echo.
    echo ✗ push 실패. GitHub 로그인 인증을 확인해주세요.
)
pause
