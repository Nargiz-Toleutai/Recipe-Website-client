interface IconMultiplierProps {
  amount: number;
  icon?: string;
}

const IconMultiplier = ({ amount, icon }: IconMultiplierProps) => {
  const arr = Array(amount).fill(0);

  return (
    <>
      {arr.map((_, amount) => (
        <img key={amount} src={icon} alt={`${icon}-img`} />
      ))}
    </>
  );
};

export default IconMultiplier;
