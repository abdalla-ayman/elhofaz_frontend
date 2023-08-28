export default function FormInput(props) {
  let { type, setValue, label } = props;
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
