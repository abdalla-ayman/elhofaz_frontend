import Select from "react-select";

export default function FormSelect(props) {
  let { setValue, label, options, defaultVal } = props;
  return (
    <div>
      <label htmlFor="">{label}</label>
      <Select
        options={options}
        onChange={(val) => setValue(val)}
        defaultValue={defaultVal}
      />
    </div>
  );
}
