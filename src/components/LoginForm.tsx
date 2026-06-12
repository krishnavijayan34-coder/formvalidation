import { useActionState } from "react";

import {
  validateFields,
  validateEmail,
  validatePassword,
} from "../utils/validation";

import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import SubmitButton from "./submitButton";
type LoginData = {
  email: string;
  password: string;
};

async function loginAction(
  _previousState: string[],
  formData: FormData
) {

  await new Promise((resolve)=> setTimeout(resolve,3000));
  
  const form: LoginData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationErrors = validateFields(form, [
    "email",
    "password",
  ]);

  if (!validateEmail(form.email)) {
    validationErrors.push("Invalid email format");
  }

  if (!validatePassword(form.password)) {
    validationErrors.push(
      "Password must contain letters, numbers and minimum 6 characters"
    );
  }

  if (validationErrors.length > 0) {
    return validationErrors;
  }

  alert("Login successful");

  return [];
}

export default function LoginForm() {
  const [errors, formAction] =
    useActionState(loginAction, []);

  return (
    <Box
      component="form"
      action={formAction}
      sx={{ width: 300, margin: "auto", mt: 5 }}
    >
      <h2>Login Form</h2>

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
      />

      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        name="password"
      />

      <SubmitButton/>

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