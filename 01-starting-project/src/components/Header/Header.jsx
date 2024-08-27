import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";
const Header = () => {
  let title = ["Fundamental", "Core", "Crucial"];
  const genRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const randomTitle = title[genRandomInt(title.length)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomTitle} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
