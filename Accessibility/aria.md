# label

## aria-label
- 사용할 문자열을 지정한다. `label`처럼 다른 네이티브 레이블링 메커니즘을 무시한다. 
    예 : button 의 텍스트 콘텐츠와 aria-label 모두 존재할 경우 aria-label 만 사용된다. 
- Hamburger button처럼 그래픽만 존재하는, 요소의 목적을 시각적으로 표현할 경우에 aria-label을 사용할 수 있다.



## aria-labelledby
- 어떤 요소의 레이블로서 DOM에 있는 다른 요소의 ID를 지정할 수 있다. 
- label 요소와의 차이점

|label|aria-labelledby|
|--|--|
|레이블이 지정 가능한 요소에서 사용 가능|어떤 요소에서든 사용 가능|
|자신이 레이블을 지정하는 대상을 참조|레이블을 지정하는 대상이 레이블을 지정하는 주체를 참조|
|한 레이블 요소만 레이블 지정 가능한 요소와 연결됨|IDREF 목록을 선택해 여러 요소에서 레이블 작성 가능|
||숨겨져 있거나 접근성 트리에 없는 요소 참조 가능|

- `aira-labelledby` > `aria-label` > `label` 순으로 우선순위를 가짐



# Reference
- [Aria Label and Relationship](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships?hl=ko)