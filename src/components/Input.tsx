interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  type: string;
  htmlFor: string;
}

const Input = ({ name, id, type, htmlFor, onChange }: InputProps) => {
  return (
    <div className="general-input">
      <label htmlFor={htmlFor}>Name</label>
      <input id={id} name={name} type={type} onChange={onChange} value={name} />
    </div>
  );
};

export default Input;
