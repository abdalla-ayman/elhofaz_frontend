export default function FormTextarea(props) {
  let { setValue, label, required = true } = props;
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <textarea
        onChange={(e) => setValue(e.target.value)}
        required={required}
      />
    </div>
  );
}
