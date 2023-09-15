export default function FormTextarea(props) {
  let { setValue, label, required = true , value = "" } = props;
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <textarea
        onChange={(e) => setValue(e.target.value)}
        required={required}
        defaultValue={value}
        disabled
      />
    </div>
  );
}