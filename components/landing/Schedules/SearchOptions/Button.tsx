interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button
      type="button"
      className="h-10 border-solid border-2 border-gray-200 rounded-3xl px-4 py-1 mx-1 font-extrabold"
    >
      <span>{text}</span>
    </button>
  );
}

export default Button;
