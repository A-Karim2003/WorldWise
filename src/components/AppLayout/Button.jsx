function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`primary-btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
