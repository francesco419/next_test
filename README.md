### File Conventions

> Next.js provides a set of special files to create UI with specific behavior in nested routes:

- **layout** - Shared UI for a segment and its children
- **page** - Unique UI of a route and make routes publicly accessible
- **loading** - Loading UI for a segment and its children
- **not-found** - Not found UI for a segment and its children
- **error** - Error UI for a segment and its children
- **global-error** - Global Error UI
- **route** - Server-side API endpoint
- **template** - Specialized re-rendered Layout UI
- **default** - Fallback UI for Parallel Routes

### Parallel Routes

- 각각 다른 2개의 페이지를 한페이지에 디스플레이 할 수 있는 라우팅 기능. ( 대쉬보드 혹은 피드 등 )

- **Slot** 이라는 라우트(폴더)를 만듬으로서 이를 이용할 수 있다. **( ex. @team - page.tsx)**

- use
  - 모달 창
  - 사용자 설정 라우팅
  - 탭 그룹
  - Loading / Error UI

### Intercepting Routes

- 현재 페이지 레이아웃에서 다른 페이지 레이아웃을 로드 할 수 있도록 하는 **스위칭** 기능.

- **ex)** 이미지 오베레이 혹은 모달 창을 띄울때 라우트(주소)가 변경. 라우트가 변경되었지만, **Intercepting Routes** 기능으로 페이지 전환이 아닌 원래 페이지 레이아웃 위에 모달 창을 띄움.

- (.), (..), (..)(..), (...) 와 같은 형식의 이름 폴더를 **Intercepting Routes**를 사용하고자 하는 라우트(폴더)와 이름을 같게 하여 설정. ( ex. photo -> (..)photo )

_(...)_ 은 경로 설정에서의 폴더 위치 ( import a from '../../' 처럼)

---

project NINE

three, next, react, styled-component, ..
