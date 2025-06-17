const InputItem = ({
  label,
  type,
  placeholder,
  required = false,
  value,
  onChange,
}) => {
  return (
    <>
      <label className="label">{label}</label>
      <input
        type={type}
        className="input border-none "
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputItem;
