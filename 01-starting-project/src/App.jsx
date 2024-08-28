import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TapButton from "./components/TapButton";
import { useState } from "react";
function App() {
  const [selectedButton, setSelectedButton] = useState(null);
  const handleClick = (selectedButton) => {
    // 클릭한 버튼의 타이틀을 콘솔에 출력
    console.log(selectedButton);
    setSelectedButton(selectedButton);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton
              onClick={() => handleClick("components")}
              isSelected={selectedButton === "components"}
            >
              Components
            </TapButton>
            <TapButton
              onClick={() => handleClick("jsx")}
              isSelected={selectedButton === "jsx"}
            >
              JSX
            </TapButton>
            <TapButton
              onClick={() => handleClick("props")}
              isSelected={selectedButton === "props"}
            >
              Props
            </TapButton>
            <TapButton
              onClick={() => handleClick("state")}
              isSelected={selectedButton === "state"}
            >
              State
            </TapButton>
          </menu>
          {!selectedButton ? (
            "Please select a button"
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedButton].title}</h3>
              <p>{EXAMPLES[selectedButton].description}</p>
              <pre>
                <code>{EXAMPLES[selectedButton].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
