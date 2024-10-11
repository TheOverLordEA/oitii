interface btnProps {
  text: string;
}

const Button: React.FC<btnProps> = ({ text }) => {
  return (
    <button type="button" className="btn">
      {text}
    </button>
  );
};

export default Button;
