interface IconMultiplierProps {
  amount: number;
  icon?: string;
}

const IconMultiplier = ({ amount, icon }: IconMultiplierProps) => {
  const validatedAmount = Math.max(0, Math.min(Math.floor(amount), 5));

  const arr = Array.from({ length: validatedAmount });

  return (
    <>
      {arr.map((_, amount) => (
        <img key={amount} src={icon} alt={`${icon}-img`} />
      ))}
    </>
  );
};

export default IconMultiplier;
