export default function Information() {
  return (
    <>
      <TextField
        id="outlined-basic"
        onChange={(e) => setUsername(e.target.value)}
        label="اسم المستخدم"
        variant="outlined"
        type="text"
        className="my-5"
        sx={{ my: 1 }}
      />

      <TextField
        id="outlined-basic"
        onChange={(e) => setPassword(e.target.value)}
        label="كلمة المرور"
        variant="outlined"
        type="password"
        sx={{ my: 1 }}
      />
      <TextField
        id="outlined-basic"
        onChange={(e) => setFullname(e.target.value)}
        label="الاسم الكامل"
        variant="outlined"
        type="text"
        className="my-5"
        sx={{ my: 1 }}
      />
      <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
        <Autocomplete
          id="country-select-demo"
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.dialCode}
          sx={{ marginRight: 1, width: 100 }}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
              key={option.code}
            >
              {/* <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                /> */}
              {option.name} ({option.code}) {option.dialCode}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="مفتاح البلد"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <TextField
          id="outlined-basic"
          onChange={(e) => setPhone_number(e.target.value)}
          label="رقم الهاتف"
          variant="outlined"
          type="tel"
          sx={{ my: 1 }}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
        <FormControl sx={{ marginRight: 1, width: 100 }}>
          <InputLabel id="demo-simple-select-label">النوع</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="النوع "
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"male"}>ذكر</MenuItem>
            <MenuItem value={"female"}>انثى</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          onChange={(e) => setAge(e.target.value)}
          label="العمر"
          variant="outlined"
          type="number"
          sx={{ my: 1 }}
        />
      </Box>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={countries.map((country) => ({
          label: country.name,
        }))}
        sx={{ my: 1 }}
        renderInput={(params) => <TextField {...params} label="الجنسية" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={countries.map((country) => ({
          label: country.name,
        }))}
        sx={{ my: 1 }}
        renderInput={(params) => <TextField {...params} label="مكان الاقامة" />}
      />

      <FormControl sx={{ my: 1 }}>
        <FormLabel id="demo-radio-buttons-group-label">التسجيل ك </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="user"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="user" control={<Radio />} label="طالب" />
          <FormControlLabel value="teacher" control={<Radio />} label="شيخ" />
        </RadioGroup>
      </FormControl>
    </>
  );
}
