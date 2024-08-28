const TapButton = ({ children, onClick }) => {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default TapButton;
