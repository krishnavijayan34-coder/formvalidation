import  { useState } from "react";
import { validateFields,validateEmail,validatePassword } from "../utils/validation";
import  TextField  from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
type LoginData={
    email:string;
    password:string;
};
export default function LoginForm(){
    const[form,setForm]=useState<LoginData>({email:"",password:"",});
    const[errors,setErrors]=useState<string[]>([]);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form,[e.target.name]:e.target.value,});
    };
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateFields(form, [
      "email",
      "password",
    ]);


if (!validateEmail(form.email)) {
  validationErrors.push("Invalid email format");
}


if (!validatePassword(form.password)) {
  validationErrors.push(
    "Password must be at least 6 characters"
  );
}

if (validationErrors.length > 0) {
  setErrors(validationErrors);
  return;
}
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: 300, margin: "auto", mt: 5 }}
    >
      <h2>Login Form</h2>

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <Button variant="contained" type="submit" fullWidth>
        Login
      </Button>

      {errors.length > 0 && (
        <Box sx={{ color: "red", mt: 2 }}>
          {errors.map((err, i) => (
            <p key={i}>{err}</p>
          ))}
        </Box>
      )}
    </Box>
  );
}
export {};