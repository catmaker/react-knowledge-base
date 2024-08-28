const TapButton = ({ children, onClick, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default TapButton;
