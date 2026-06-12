import { useActionState } from "react";

import {
  validateFields,
  validateEmail,
  validatePassword,
} from "../utils/validation";

import SubmitButton from "./submitButton";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

async function registerAction(
  _previousState: string[],
  formData: FormData
) {

   await new Promise((resolve)=>setTimeout(resolve,3000));

  const form: RegisterData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const validationErrors = validateFields(form, [
    "name",
    "email",
    "password",
    "confirmPassword",
  ]);

  if (!validateEmail(form.email)) {
    validationErrors.push("Invalid email format");
  }

  if (!validatePassword(form.password)) {
    validationErrors.push(
      "Password must contain letters, numbers and minimum 6 characters"
    );
  }

  if (form.password !== form.confirmPassword) {
    validationErrors.push("Passwords do not match");
  }

  if (validationErrors.length > 0) {
    return validationErrors;
  }

  console.log("Registration Data:", form);

  alert("Registration successful");

  return [];
}

export default function RegisterForm() {
  const [errors, formAction] = useActionState(
    registerAction,
    []
  );

  return (
    <Box
      component="form"
      action={formAction}
      sx={{ width: 320, margin: "auto", mt: 5 }}
    >
      <Typography variant="h5" gutterBottom>
        Register Form
      </Typography>

      <TextField
        fullWidth
        margin="normal"
        label="Name"
        name="name"
      />

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

      <TextField
        fullWidth
        margin="normal"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
      />

      <Box sx={{ mt:2}}>
        <SubmitButton />
      </Box>

      {errors.length > 0 && (
        <Box sx={{ color: "red", mt: 2 }}>
          {errors.map((err, index) => (
            <p key={index}>{err}</p>
          ))}
        </Box>
      )}
    </Box>
  );
}