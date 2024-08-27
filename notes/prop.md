# Props

Props (Properties의 줄임말)는 React 컴포넌트 간에 데이터를 전달하는 방법이다. 다음은 Props에 대한 주요 특징과 사용법이다:

1. 데이터 전달

   - 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달한다.
   - 객체, 배열, 함수 등 다양한 타입의 데이터를 전달할 수 있다.

2. 읽기 전용

   - Props는 읽기 전용으로, 자식 컴포넌트에서 직접 수정할 수 없다.
   - 데이터 흐름의 단방향성을 유지하여 예측 가능한 코드를 작성할 수 있다.

3. 사용 방법

   - 부모 컴포넌트: <ChildComponent propName={value} />
   - 자식 컴포넌트: function ChildComponent(props) { ... }

4. 기본값 설정

   - defaultProps를 사용하여 props의 기본값을 지정할 수 있다.
   - 예: ChildComponent.defaultProps = { propName: defaultValue }

5. Props 검증

   - PropTypes를 사용하여 props의 타입을 검증할 수 있다.
   - 개발 모드에서 타입 오류를 미리 발견할 수 있다.

6. 구조 분해 할당
   - props 객체를 구조 분해하여 간결하게 사용할 수 있다.
   - 예: function ChildComponent({ propName1, propName2 }) { ... }

Props를 효과적으로 사용하면 컴포넌트 간의 결합도를 낮추고, 재사용성을 높일 수 있다. 또한, 데이터 흐름을 명확하게 하여 애플리케이션의 상태 관리를 용이하게 한다.

# 다양한 Props 문법

React에서는 Props를 다루는 여러 가지 방법이 있다. 이전에 배운 기본적인 방법 외에도 더 다양하고 유연한 방식으로 Props를 활용할 수 있다.

## 단일 Prop 객체 전달

데이터가 이미 JavaScript 객체로 구성되어 있다면, 이를 개별 Props로 분리하지 않고 하나의 Prop으로 전달할 수 있다. 이 방법은 코드를 더 간결하고 관리하기 쉽게 만들어 준다.

즉,

<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
또는

<CoreConcept
{...CORE_CONCEPTS[0]} />
대신,

이처럼 CoreConcept 컴포넌트에 하나의 concept Prop를 전달할 수 있다 (Prop 이름은 선택적이다):

<CoreConcept
  concept={CORE_CONCEPTS[0]} />
그러면 CoreConcept 컴포넌트에서는 그 하나의 Prop만 받게 된다:

export default function CoreConcept({ concept }) {
// concept.title, concept.description 등을 사용
// 또는 concept 객체를 구조 분해: const { title, description, image } = concept;
}
어떤 문법과 접근 방식을 선호하는지는 전적으로 개발자의 선택이다.

받은 Prop들을 단일 객체로 그룹화

여러 Prop을 컴포넌트에 전달한 다음, 컴포넌트 함수 내에서 자바스크립트의 "Rest Property" 문법을 사용하여 단일 객체로 그룹화할 수도 있다.

예를 들어, 컴포넌트가 이런 식으로 사용되었다면:

<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />

받은 prop들을 다음과 같이 단일 객체로 그룹화할 수 있다:

export default function CoreConcept({ ...concept }) {
// ...concept groups multiple values into a single object
// Use concept.title, concept.description etc.
// Or destructure the concept object: const { title, description, image } = concept;
}

기본 Prop 값

가끔 선택적 Prop을 받을 수 있는 컴포넌트를 만들게 될 때가 있다. 예를 들어, 'type' Prop을 받을 수 있는 커스텀 Button 컴포넌트가 있다.

그러면 Button 컴포넌트는 type 설정 여부와 상관 없이 모두 사용할 수 있어야 한다.

type 설정이 된 경우:

<Button type="submit" caption="My Button" />

되지 않은 경우:

<Button caption="My Button" />

이 컴포넌트가 작동하도록 하려면, type Prop에 대한 기본 값을 설정할 수 있다 - 전달되지 않을 경우를 대비하는 것이다.

자바스크립트는 객체 비구조화를 사용할 때 기본 값을 지원함으로 이를 쉽게 달성할 수 있다:

export default function Button({ caption, type = "submit" }) {
// caption has no default value, type has a default value of "submit"
}
