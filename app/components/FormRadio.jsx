import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function FormRadio(props) {
  let { labels, answer } = props;
  return (
    <RadioGroup defaultValue={answer}>
      <FormControlLabel value="a" control={<Radio />} label={labels.a} />
      <FormControlLabel value="b" control={<Radio />} label={labels.b} />
      <FormControlLabel value="c" control={<Radio />} label={labels.c} />
      <FormControlLabel value="d" control={<Radio />} label={labels.d} />
    </RadioGroup>
  );
}
