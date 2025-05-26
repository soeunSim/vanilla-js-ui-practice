# 햄버거 메뉴 UI 프로젝트

## 피드백 기반, 필요한 개선 사항
- 인덴팅이 들쑥날쑥하다 → 일관된 코드 스타일 필요함
- 단순 기능 구현에 머물러선 안 된다 → “왜”부터 고민하고 “어떻게”까지 기록  
- 코드에 대한 태도를 바꿀 것 → 설계–구현–검증의 사이클을 문서화

## 요약
- **코드 스타일**: 모든 함수는 화살표 함수, 중괄호·세미콜론 필수  
- **모듈화**: 유연한 활용을 위해 ARIA 헬퍼, 포커스 트랩 유틸 분리 필요
- **접근성**: WAI-ARIA 속성 완전 적용연구, 스크린리더 또는 tab 테스트로 검증 결과 첨부


## 학습 목표
1. **코드 스타일**  
   - Prettier·ESLint 설정한 것 처럼 모든 파일 2스페이스 인덴팅, 중괄호 항상 사용  
2. **코드 태도**  
   - 기능 구현 전 의사코드 작성  
   - 구현 후 리팩토링 · 검증 단계 거치기  
3. **고민 기록**  
   - 의사코드, 설계 다이어그램, 테스트 스니펫을 README에 고민을 기록하기  


## 기술 설계 (리팩토링 의사코드)
### handleOpenMenu()
1. 메뉴 보이기/숨기기 클래스 토글  
2. aria 상태 변경  
3. 스크롤 잠금  
4. 첫 요소 포커스 이동

### handleCloseMenu()
1. 메뉴 보이기/숨기기 클래스 해제  
2. aria 상태 변경  
3. 스크롤 복원  
4. 버튼으로 포커스 복귀


## WAI-ARIA 역할 및 상태 관리

### 역할(role) 사용 예시
- `<nav role="navigation">…</nav>`  
- `<ul role="menu">…</ul>` / `<li role="menuitem">…</li>`

### 상태(state) 토글
- openMenu 실행 시  
  - `aria-expanded="true"`  
  - `aria-hidden="false"`  
- closeMenu 실행 시  
  - `aria-expanded="false"`  
  - `aria-hidden="true"`

## 최종 검증 전략
- **Unit Test (Jest + JSDOM)**: `aria-*` 토글, focus-trap 순환  
- **E2E Test (Playwright)**: 버튼 클릭·Tab 순환·Esc 키 시나리오  
