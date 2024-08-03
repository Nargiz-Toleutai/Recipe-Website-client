interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  type: string;
  htmlFor: string;
  value: string;
}

const Input = ({ name, id, type, htmlFor, value, onChange }: InputProps) => {
  return (
    <div className="general-input">
      <label htmlFor={htmlFor}>{name}</label>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
