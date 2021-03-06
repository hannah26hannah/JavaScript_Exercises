# Browser History Mode

```javascript
// Usage
window.history.pushState({ data: 'some data' }, 'some history entry title', '/some-path')
```

- `history.pushState` API를 이용해 페이지를 다시 로드하지 않고 URL을 탐색한다.
-  새 데이터 전달을 위한 상태, 제목, url을 지정할 수 있다. 
- Browser History의 url 형태는 site/some-path 같이 표현되지만, 이 방법은 서버 사이드 지원이 일부 필요하다. 예를 들어, http://domain.com/site/another-path처럼 존재하지 않는 경로로 접속할 경우 오류를 출력한다. 이런 문제를 해결하고 대체할 url은 서버에서 지정해야 한다. 

```javascript
window.onpropstate = () => {
    appDiv.innerHTML = routes[window.location.pathname]
}
```

## 🔶 `History.pushSate()`
```javascript
// Basic Syntax
window.history.pushState(state, title[, url]);
```
HTML 문서에서, `history.pushState()` 메서드는 브라우저의 세션 기록 스택에 상태를 추가한다. 

### Parameter
- `state` : 새로운 세션 기록 항목에 연결할 상태 객체. 사용자가 새로운 상태로 이동할 때마다 `popstate` 이벤트가 발생하는데, 이때 이벤트 객체의 state 속성에 해당 상태의 복제본이 담긴다. 상태 객체는 직렬화 가능한 객체라면 모두 가능하다. 
- `title` : 대부분 브라우저는 이 매개변수를 무시하고 있지만, 사용하지 않는다면 공백('')으로 남겨두거나 상태에 대한 짧은 제목을 제공할 수 있다고 한다. Safari에서 title argument가 유일하게 사용되고 있다. *(21-03-06 last updated)*
- `url` *optional* : 새로운 세션 기록 항목의 URL. `pushState()` 호출 이후에 브라우저는 주어진 URL로 탐색하지 않는다. 그러나 이후, 브라우저를 재시작할 경우 탐색을 시도할 수 있다. 상대 URL을 지정할 수 있으며, 이때에는 현재 URL을 기준으로 사용한다. 새로운 URL은 현재 URL과 같은 출처를 가져야 하며 그렇지 않을 경우 예외가 발생한다. 지정하지 않는다면 현재 문서의 URL을 사용한다.

### `pushState()` vs `Window.location='#foo'`
- 공통점 : 둘다 새로운 세션 기록 항목을 생성하고 활성화한다. 
- 차이점 : 

|`pushState()`|`Window.location = '#foo'`|
|--|--|
|새로운 URL은 같은 출처에 한해 아무 URL이나 가능|해시만 수정해야 같은 문서에 머무름|
|원할 경우 URL을 바꾸지 않을 수도 있다. | 현재 해시가 `#foo`가 아닐 때만 새로운 기록 항목을 생성|
|임의의 데이터를 세션 기록 항목에 연결 가능| 필요한 모든 데이터를 인코딩해 짧은 문자열로 생성해야 함|
|이전 URL과 신규 URL의 해시가 다르더라도 `hashchange` 이벤트 발생 X | `hashchange` 이벤트 발생 O |


### example
```js
const state = { 'page_id' : 1, 'user_id' : 5 }
const title = '';
const url = 'hello-world.html'

history.pushState(state, title, url);
```


# Hash History Mode
- url 해쉬를 사용하여 전체 URL을 시뮬레이트하며, url이 변경될 때 페이지가 다시 로드되지 않는다. 
- `#` 앵커를 통해 이동하는 방법으로, `site/#some-path`처럼 `#`이 붙은 url로 표현된다. 보통 정적 페이지에서 사용된다. 
- 현재 url의 hash는 `window.location.hash`를 통해 확인할 수 있다. 라우팅 시스템을 구축할 경우 `window.location.hash`를 사용해 라우팅을 변경할 수 있다. 
- hash 변경 시마다 `hashchange` 이벤트가 발생한다. 
- 보통 hash History는 웹 페이지 내부에서 이동을 하기 위한 것으로 history가 관리되지 않는다. 서버가 없는 정적 페이지의 경우 hashHistory만으로도 충분하다.

```JavaScript
window.addEventListener('hashchange', () => {
    addDiv.innderHTML = routes[window.location.hash.replace('#', '')]
})
```
- 보통 hash History는 웹 페이지 내부에서 이동을 위할 것으로, history가 관리되지 않는다. 
하지만, 서버가 없는 정적 페이지의 경우 hashHistory 만으로도 충분하다. 

## 🔶 `window.location`
- 읽기 전용 `Location` 오브젝트를 얻는다. 현재 문서의 location 정보를 담고 있다.
- `location.assign('http://www.mozilla.org')` 또는 `location = 'http://www.mozilla.org'`을 통해 새 페이지로 이동한다.
- `location.reload(true)`를 통해 서버로부터 현재 페이지를 강제로 다시 로드한다. 
- `replace()` 메서드를 통해 해시에 `location.pathname` 값을 삽입해 페이지를 리로드한다.
    ```javascript
    function reloadPageWithHash() {
        const initialPage = location.pathname;
        location.replace('http://example.com/#' + initialPage)
    }
    ```

## 🔶 `Location: hash`
- `Location`의 `hash` 프로퍼티는 '`#`'를 포함한 USVString(unicode scalar values)을 반환한다. 값이 없을 경우는 빈 공백이다. 
    ```html
    <a id="myAnchor" href="/en-US/docs/Location.href#Examples">Examples</a>
    <script>
    const anchor = document.getElementById("myAnchor");
    console.log(anchor.hash); // Returns '#Examples'
    </script>
    ```
## 🔶 history.replaceState()
- 현재 history를 수정해 메소드의 매개변수로 전달된 `stateobj, title, url`로 대체한다. 
```js
history.replaceState(stateObj, title[, url])
```
- state obj 는 replaceState에 전달된 history 항목과 연관된 JS 객체로, state obj는 null일 수 있다. 
- title : ''
- url *optional* : history 항목의 URL로, 새 URL은 현재 URL과 출처가 동일해야 한다. (same origin) 그렇지 않으면 `replaceState`는 예외를 발생시킨다.

# 🔶 `WindowEventHandlers.onpopstate`
- window의 `popstate` 이벤트 핸들러. 
- 동일 문서에 관한 history entry에 변화가 생길 때, `popstate event`가 window 객체에 붙는다. 활성화된 entry가 `history.pushState()` 메서드 또는 `history.replaceState()` 메서드에 의해 생성되면 popstate 이벤트의 state 속성은 history entry state 객체의 복사본을 갖는다. 
- 하지만, `history.pushState()` 또는 `history.replaceState()`는 popstate 이벤트를 발생시키지 않는다. 
- 이 이벤트는 브라우저의 뒤로가기 버튼(`history.push()` 호출) 등을 통해 발생한다. 또한, 이 이벤트는 동일 문서 내 두 history entry 간 이동이 있을 경우에만 발생이 된다. 
- 브라우저별로 페이지 로딩 시 해당 이벤트는 다르게 처리된다. 

    |페이지 로딩 시|Chrome(< v34), Safari|Firefox|
    |--|--|--|
    |`popState` 이벤트|발생 O | 발생 X|

- `window.onpopstate = funcRef;`
# Reference
- [History.pushState()](https://developer.mozilla.org/ko/docs/Web/API/History/pushState)
- [Window.location](https://developer.mozilla.org/ko/docs/Web/API/Window/location)
- [Location:hash](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash)
- [WindowEventHandlers.onpopstate](https://developer.mozilla.org/ko/docs/Web/API/WindowEventHandlers/onpopstate)
- [History.replaceState()](https://developer.mozilla.org/ko/docs/Web/API/History/replaceState)