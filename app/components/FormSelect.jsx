import Select from "react-select";

export default function FormSelect(props) {
  let {
    disabled = false,
    setValue,
    label,
    options,
    defaultVal,
    required = true,
  } = props;
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <Select
        options={options}
        onChange={(val) => setValue(val.value)}
        defaultValue={defaultVal}
        required={required}
        isDisabled={disabled}
      />
    </div>
  );
}
