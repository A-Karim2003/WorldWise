function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="primary-btn">
      {children}
    </button>
  );
}

export default Button;
