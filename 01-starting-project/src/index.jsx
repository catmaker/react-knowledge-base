import ReactDOM from "react-dom/client";

import App from "./App.jsx"; 
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

// ReactDOM을 사용하여 React 애플리케이션을 DOM에 렌더링합니다.
// ReactDOM.createRoot()는 React 18에서 도입된 새로운 API입니다.

// App 컴포넌트를 가져옵니다. 이는 애플리케이션의 최상위 컴포넌트입니다.
// index.css 파일을 가져와 전역 스타일을 적용합니다.

// DOM에서 'root' ID를 가진 요소를 찾아 React 애플리케이션의 진입점으로 사용합니다.
// createRoot()를 사용하여 새로운 React 루트를 생성하고, 
// render() 메소드를 호출하여 App 컴포넌트를 해당 루트에 렌더링합니다.
