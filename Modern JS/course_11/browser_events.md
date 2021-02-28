Introduction to browser events

# Browser Evenets
Events are not limited to DOM, but all DOM nodes generates event signals 

## Commonly Used Events
1. Mouse events
1-1. Click (touchscreen devices generates this on a tap)
1-2. contextmenu (when the mouse right-clicks on an element)
1-3. mouseover/mouseout (when the mouse cursor comes over / leaves an element)
1-4. mousedown/mouseup (when the mouse button is pressed / released over an element)
1-5. mousemove (when the mouse is moved)

2. Keyboard events
2-1. keydown and keyup (when a keyboard key is pressed and released)

3. Form Element events
3-1. submit (when the visitor submits a <form>)
3-2. focus (when the visitor focuses on an element, e.g. on an <input>)

4. Document events
4-1. DOMContentLoaded (when the HTML is loaded and processed, DOM is fully built)

5. CSS events 
5-1. transitioned (when a css-animation finishes)


## Event Handlers
Events begins with assigning a handler, which is a function that runs in case of an event.  

### 1. HTML-attribute
```html
<input value="Clike me" onclick="alert('click')" type="button">
```

Or

```html
<input type="button" onclick="countRabbits()" value="count rabbits!">
<script>
function countRabbits() {
    for (let i = 1; i <= 3; i++) {
        alert("Rabit numbers : " + i)
    }
}
</script>
```

tip: HTML-attribute names are not case-sensitive: `ONCLICK` is fine, but usually attributes are lowercased.

### 2. DOM Property
```html
<button id="elem" onclick="console.log('before')">Click Me</button>
<script>
elem.onclick = () => {
    console.log('after') // This overwrites existing handler
}
</script>
```
To remove a handler we can use `elem.onclick = null`

### 3. addEventListener
As we can't assign multiple handlers to one event. `addEvenetListener` and `removeEventListener` will help this problem.

```js
element.addEventListener(event, handler, [options]);
```
- `event` : Event name such as 'click'
- `handler` : The handler function 
- `options` : An additional options object with properties:
    - `once` : if `true`, then the listener is automatically removed after it triggers. 
    - `capture` : the phase where to handle the event. `options` can also be `false/true`. This is same with `{capture: false/true}`
    - `passive` : if `true`, then the handler will not call `preventDefault()`.

### removeEventListener
```js
element.removeEventListener(event, handler, [optoins])
```
> For some events, hndlers only work with `addEventListener`
```js
// will not work
document.onDOMContnetLoaded = () => {
    // .. 
}

// This is correct way 
document.addEventListener('DOMContentLoaded', () => {
    // .. 
})
```
## Event Object
```js
elem.onclick = function(e) {
    console.log(`${e.type} at ${e.currentTarget}`);
    // click at [object HTMLButtonElement]
    console.log(`Coordinates ${e.clientX} : ${e.clientY}`);
    // Coordinates 18 : 22
}
```
- `event.type` : Evenet type, here it's clcik. 
- `event.currentTarget` : Element that handled the event. This is exactly same as `this`, unless the handler is an arrow function.

```js
elem.onclick = function (e) {
    console.log(`${e.type} at ${this}`);
    // click at [object HTMLButtonElement]
}
```

```js
// an arrow function 
elem.onclick = (e) => {
    console.log(`${e.type} at ${this}`);
    // click at [object Window]
    console.log(`Coordinates ${e.clientX} : ${e.clientY}`);
    // Coordinates 18 : 22
}
```
- `event.clientX` / `event.clientY` : Window-relative coordinates of the cursor, for pointer events.
[MDN, MouseEvent.clientX](https://developer.mozilla.org/ko/docs/Web/API/MouseEvent/clientX)

## Object handlers: handleEvent
```js
let obj = {
        handleEvent(e) {
            console.log(`${e.type} at ${e.currentTarget}`)
        }
    }
    elem.addEventListener('click', obj);
    // click at [object HTMLButtonElement]
```
- `addEventListener` receives an object as the handler. 
- `addEventListener` also uses a class

```js
```

## Accessing the element : `this`
The value of `this` inside a handler is the element. The one which has the handler on it. 
```html
<button id="elem" onclick="alert(this.innerHTML)">Click Me</button> 
<!-- Will alerts 'Click Me' -->
```

## Possible mistakes
### be careful when setting an existing function as a handler
```html
<button id="elem">Click Me</button>
<script>
    function sayThanks() {
        console.log('thanks')
    }
    elem.onclick = sayThanks;
    // elem.onclick = sayThanks(); won't be fired
</script>
```
Because parentheses makes the line of code function and takes the result of that function: `undefined` in this case.

### Use parentheses in the markup 
```html
<button id="elem" onclick="sayThanks()">Click Me</button>
```
But in the markup, we do need the parentheses. Becausse when the browser reads the attribute, it creates a handler function with body from the attribute content.

so the markup generates this property:
```javascript
button.onclick = function() {
    sayThanks(); // attribute content goes here
}
```

### Don't use `setAttribute` for handlers
because attributes are always strings, function becomes a string. 

### DOM-property case matters
Assign a handler to `elem.onclick`, not `elem.ONCLICK`, because DOM properties are case-sensitive.

# Missions
## Hide on Click
```html
<button id="btn">Click to hide the text</button>
<div id="text">TEXT</div>
<script>
    const btn = document.getElementById('btn');
    const text = document.getElementById('text')
    
    // 1. addEventListener
    // btn.addEventListener('click', function() {
    //     text.hidden = true;
    // })

    btn.onclick = function() {
        // text.classList.add('hide');
        // display.style
        text.hidden = true;
    }
</script>
<style>
    .hide {
        visibility: hidden  ;
    }
</style>
```

## Hide self 
Create a button that hides itself on click

```html
<button id="btn">click to hide</button>
<script>
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
        this.hidden = true;
    })
</script>
```

## Which handlers run?
Example 1
```js
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
// 함수를 선언한 뒤 참조를 하는 것이 아니라, 같은 내용의 코드인 새로운 함수를 사용하고 있으므로 이벤트가 삭제되지 않는다. 
button.onclick = () => alert(2);
// 즉, 최종적으로는 첫 번째 이벤트 핸들러인 alert(1)이 실행되고, alert(2)가 차례로 실행된다. 
// button.addEventListener('click', () => { alert('2')}) 도 중첩되지 않고, 차례로 실행된다. 
```

Example 2
```html
<button id="btn" onclick="alert('0')">click to hide</button>
<script>
    const btn = document.getElementById('btn')
    btn.addEventListener("click", () => alert("1"));
    btn.removeEventListener("click", () => alert("1"));
    btn.addEventListener('click', () => {
        alert('2')
    })
</script>
```
- 0, 1, 2 순으로 출력된다. 

Exmple 3 
```html
```
<button id="btn" onclick="alert('0')">click to hide</button>
<script>
    const btn = document.getElementById('btn')
    btn.onclick = () => { // 1
        alert('1')
    }
    btn.removeEventListener("click", () => alert("1"));
    btn.addEventListener('click', () => {
        alert('2') // 2
    })
    btn.onclick = () => alert(3); // 3
</script>
- button에 inline으로 삽입한 onclick 핸들러는 script에서 1에 의해 덮어쓰기된다. 
- 다시 3에 의해 덮어쓰기 된다. 덮어쓰기 된 이벤트가 먼저 실행되어 alert에는 3이 먼저 출력되고, 
- 마지막으로 addEventListener를 통해 핸들러를 등록한 이벤트가 실행되어 2가 alert된다. 

## Move the ball across the field
Requirements 
- The ball center should come exactly under the pointer on click (if possible without crossing the field edge)
- CSS-animation is welcome
- The ball must not cross field boundaries
- When the page is scrolled, nothing should break;

Notes:
- The code should also work with different ball and field sizes, not be bound to any fixed values;
- Use properties event.clientX, event.clinetY for click coordinates
    - [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
    - This method returns a `DOMRect` object providing information about the size of an element and its position relative to the viewport. 
    > The amound of scrolling that has been done of the viewport area is taken into account when computing the bounding rectangle. to avoid this, just add the current scrollingPostiion to the top and left properties (which can be obtained using `window.scrollX`, `windowScrollY`)
    
solution
First we need to choose a method of positioniong the ball.
we can't use `position: fixed` for it, because scrolling the page would move the ball from the field. 
so we should use `position: absolute` and to make the positioning really solid, make `field` itself positioned. 
    - [transition: all](https://www.impressivewebs.com/css3-transition-all/)

Next we need to assign the correct `ball.style.left/top`. They contain field-relative coordinates now. 

We have `event.clientX/clientY`, which is windo-relative coordinates of the click. 
To get field-relative `left` coordinate of the click, we can subtrackt the filed left edge and the border width.
```js
let left = event.clientX - fieldCoords.left - field.clientLeft;
```

normally, `ball.style.left` means 'left edge of the element'. so if we assign that `left`, then the ball edge, not center, would be under the mouse cursor.
we need to move the ball half-width and half-height up to make it center.

```js
let left = event.clientX - fieldCoords.left - field.cliendLeft - ball.offsetWidth/2;
```

## Create a sliding menu
A menu is a standalone graphical component on the page, so it's better to put it into a single DOM element. A list of menu items can be laid out as a list `ul/li`
- `classList.toggle()`
- `::before`