interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  type: string;
  value?: string;
}

const Input = ({ name, id, type, value, onChange }: InputProps) => {
  return (
    <div className="general-input">
      <label htmlFor={id}>{name}</label>
      <input id={id} name={id} type={type} onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
