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

### Route

- Route Group : 폴더이름이 (user) 와 같이 사용되며, 이는 라우팅을 설정하는 것이 아닌 페이지들의 그룹을 명시하는 폴더이다. 라우팅 시스템에시는 포함되지 않으며, 단순 명시적 사용을 위해 쓰인다.

- Dynamic Route : params에 의해 정의되는 페이지 라우팅으로, 폴더 이름을 [id] / [slug] 등 으로 한다. 폴더 구성은 param을 받는 폴더의 하위에 폴더를 구성하고 해당 폴더 안에 page.js를 작성한다.

### Layout

- 레이아웃을 각 페이지마다 존재할 수 있으며, App폴더 최상단에 존재하는 (root)layout파일은 다른 layout파일을 포함한다.

  - 하지만 최상단의 layout 파일을 삭제한다면, 각 루트에 존재하는 layout파일이 해당 라우트의 root layout이 된다.

- 레이아웃은 기본적으로 서버 컴포넌트이지만, 클라이언트 컴포넌트로 설정할 수도 있다.
- 레이아웃에서 데이터 호출이 가능
- 부모 레이아웃과 자식 레이아웃 간의 데이터 전달은 불가하다.
- 여러 라우트에 하나의 레이아웃을 적용하고 싶다면, 하위 폴더로 해당 페이지들을 정의하고 상위폴더에 layout을 정의하면 된다.

### Template

- layout과 다르게 새로운 인스턴스를 생성 - DOM 재생성, 상태값 초기화(보존되지 않음 - 클라이언트 컴포넌트에서), effect 초기화

  - child 클라이언트 컴포넌트의 상태 초기화. (페이지 이동시, on navigation)

- layout < template < child 순서의 포괄형태를 가지고 있다.

**Template 와 Layout**

- template와 layout은 얼핏보면 비슷하다고 생각할 수 있다. 두가지다 페이지에 대한 구조를 나타내는 파일이라고 볼 수 있었기 때문이다.

차이점에 대해 이야기 하자면, layout은 template보다 좀더 큰 부분을 감싸는 컴포넌트이며, 고정적인 구조를 나타내기 때문에 next.js에서 재랜더링을 하지 않도록 하는 구조(레이아웃)이다.

반면에, template는 layout과 반대로 재랜더링에 필요한 부분을 감싸는 영역이라고 보면된다. 따라서, layout은 재랜더링이 필요없는 header/navigation/sidebar 등등을 포함하고 있으며, 내부에 useEffect,useState와 같이 상태에 따라서 혹은 리액트라이프사이클에 따라 변화하는 컴포넌트를 가지고 있으면 된다. 결과적으로 꼭 재랜더링이 필요한 부분만 랜더링을 하게되고 그외의 고정적 구조의 부분은 재랜더링에 포함되지 않기에, 퍼포먼스 향상을 기대할 수 있다.

레이아웃은 오직 한번만 실행(애니메이션)되고 재랜더링 되지 않는다.

### Fetching Data

- 서버에서 데이터를 가져오기 (권장)

  ```js
  export default async function Page() {
    let data = await fetch('url');
    let posts = await data.json();
    return <p>{data}</p>;
  }
  ```

- DB에서 데이터 가져오기 - 서버와 동일. db접속방법 필요
  `let data = await db.select().from(posts);`

- 클라이언트에서 데이터 가져오기 - 권장사항은 아니지만 사용가능( useEffect )

- 여러 함수에서 데이터 재사용
  - fetch를 사용하면 요청이 자동적으로 **memoized**된다. ( 캐싱과 비슷 )

### Data

- 두가지 방법의 데이터 가져오기

  - **parallel** - 라우트에 존재하는 컴포넌트가 일제히 데이터를 불러온다. 총 시간의 단축이 가능하다.
    - 각 호출 함수를 변수 선언하고 이를 `Promise.all`을 사용한다.
  - **sequential** - 상위 컴포넌트부터 순서대로 데이터를 fetch.
    - 기본적인 각 컴포넌트가 필요한 데이터를 불러오는 방식

- 클라이언트에 노출될수 있는 민감한 정보 숨기기

  - Next.js Config `experimental.taint` option to `true`
  - 데이터 fetching 단계에서 `experimental_taintObjectReference`(데이터 레퍼런스),
    `experimental_taintUniqueValue`(taint할 데이터 정보)

- server action은 함수 혹은 모듈 레벨에서 정의 가능하다.

  - 서버컴포넌트에서 정의시, 해당 컴포넌트 내부에 함수 정의.
  - 클라이언트 컴포넌트에서 정의시, `action` 파일을 따로 만들어 `server action`에 대해 정의하고, 컴포넌트에 해당 함수를 `import`하여 사용한다.
  - 해당 action을 정의한 함수를 prop로 전달이 가능하다. (`<form action={함수}></>`)
  - mutate - 가져온 데이터의 가공.

  https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

---

project NINE

three, next, react, styled-component, ..

---

### Benefits of Server Rendering

There are a couple of benefits to doing the rendering work on the server, including:

- **Data Fetching**: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of requests the client needs to make.
- **Security**: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
- **Caching**: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
- **Performance**: Server Components give you additional tools to optimize performance from the baseline. For example, if you start with an app composed of entirely Client Components, moving non-interactive pieces of your UI to Server Components can reduce the amount of client-side JavaScript needed. This is beneficial for users with slower internet or less powerful devices, as the browser has less client-side JavaScript to download, parse, and execute.
- **Initial Page Load and First Contentful Paint (FCP)**: On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
- **Search Engine Optimization and Social Network Shareability**: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
- **Streaming**: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.

---

### Static, Dynamic, and Streaming. (server component)

- Static Rendering (Default) : With Static Rendering, routes are rendered at **build time**

  - **static blog post** or a **product page**

- Dynamic Rendering : routes are rendered for each user at **request time**.

  - route has **data that is personalized** to the user or has information that can only be known at request time
  - automatically change reder method by itself
  - **Dynamic Functions**

- Streaming : render UI from the server, work is split into chunks and streamed to the client as it becomes ready.
  - Streaming is built into the Next.js App Router by default.
  - You can start streaming route segments using `loading.js` and UI components with `React Suspense`.

### Client Rendering

- **Interactivity**: Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
- **Browser APIs**: Client Components have access to browser APIs, like geolocation or localStorage.

### Client OR Server Component

- 언제 사용하는가?

  - **Server**

    - 데이터 가져오기
    - 백엔드 리소스 접근
    - 클라이언트에서 유출될 수 있는 민감한 정보
    - 클라이언트의 JS 부담 낮추기, 큰 의존성(dep)은 서버에

  - **Client**
    - 이벤트 리스너, 사용자 상호작용
    - 상태, 리액트 라이프사이클 관련
    - 브라우저-only API사용
    - 위 3개와 연관/의존성 있는 커스텀훅 사용시
    - 리액트 클래스 컴포넌트 사용시

- **Server Component Pattern**

  - 서버 컴포넌트간 호출한 데이터 전달/공유

    - 서버 컴포넌트는 React Context와 같은 Hook사용이 불가능하기 때문에, 가져온 데이터를 다른 서버 컴포넌트와 공유하고자 한다면 `fetch` 혹은 `cache` 를 사용하여 서버 컴포넌트간 데이터 전달 및 공유를 통해 같은 호출 함수를 반복사용하지 않아도 되도록 할 수 있다.

  - 서버 only 코드를 클라이언트에서 제외하기

    - `npm install server-only`
    - `server-only`를 사용해 해당 서버 코드를 클라이언트 컴포넌트에서 사용하지 못하도록 할 수 있다.
      - 서버에서만 사용하는 `API_KEY`를 실수로 클라이언트에서 작동하도록 하여 유출하는 것을 방지.
      - `server-only`를 사용하면 서버코드를 클라이언트에 import할시, `build-time error`를 발생시켜 오류를 발생.

  - 외부 라이브러리 사용시
    - 리액트와 호환하는 외부 라이브러리를 사용시, Next,js와 다르게 'use client'와 같은 명시를 하지 않았지만 `useState`와 같이 클라이언트 컴포넌트에서 쓰이는 것을 사용했기에, 서버 컴포넌트와 같이 사용되지 않고 원래 사용방법에 따라 작동 될 것이다.
    - 서버 컴포넌트에서 사용시 오류 발생
    - 서버 컴포넌트에서 사용 할 수 있는 방법도 있으나, 해당 사용법을 예상하지 않았기 때문에 사용을 권장하지 않음.

- **Client Component**

  - 클라이언트 JS 번들 사이즈를 줄이기 위해서 `component tree`로 나누는것을 권장.
    - 정적 요소를 클라이언트가 아닌 서버 컴포넌트로 구성하여 사용함으로 클라이언트를 보다 빠르게 show-up하고 부담을 줄일 수 있다.

**서버 컴포넌트 랜더링 이후 클라이언트 컴포넌트 랜더링**

- 서버 컴포넌트에서 클라이언트 컴포넌트로 데이터 전달

  - Unsupported

    - 클라이언트 컴포넌트에 서버 컴포넌트를 `import`하여 해당 컴포넌트를 클라이언트 컴포넌트 내부 `return`에 삽입하여 사용하는 방식.
    - 직접적인 `<ServerComponent/>`사용

  - **Supported**

    - 서버 컴포넌트를 클라이언트 컴포넌트의 `props`로 전달하여 사용하는 방식.

      - 컴포넌트 사이의 `{children}`형식의 사용
      - 클라이언트에서 해당 컴포넌트가 무엇일지 모르지만, 해당 children을 어디에 위치 시켜야 할지를 알고있다.

    - 상위 서버 컴포넌트(page/layout)에서 클라이언트 컴포넌트 내부에 서버 컴포넌트를 넣어 사용할 수 있다.
      ```js
      return (
        <client>
          <server/>
        </client>
      ) >
      ```

- Request-Response Lifecycle

  1. User Action: The user interacts with a web application. This could be clicking a link, submitting a form, or typing a URL directly into the browser's address bar.

  2. HTTP Request: The client sends an HTTP request to the server that contains necessary information about what resources are being requested, what method is being used (e.g. GET, POST), and additional data if necessary.

  3. Server: The server processes the request and responds with the appropriate resources. This process may take a couple of steps like routing, fetching data, etc.

  4. HTTP Response: After processing the request, the server sends an HTTP response back to the client. This response contains a status code (which tells the client whether the request was successful or not) and requested resources (e.g. HTML, CSS, JavaScript, static assets, etc).

  5. Client: The client parses the resources to render the user interface.

  6. User Action: Once the user interface is rendered, the user can interact with it, and the whole process starts again.

- Partial Prerendering (PPR)

  - PPR은 정적코드와 동적코드가 같이 존재할 수 있도록 해준다.
    - 동적(dynamic)코드를 `React Suspence`를 사용하여 fallback 기능을 활용해 prerender에 포함시킬 수 있다.

  ```js
  const nextConfig: NextConfig = {
    experimental: {
      ppr: 'incremental'
    }
  };
  ```

---

Next.js /public folder can be used to serve static assets like images, fonts, and other files.
