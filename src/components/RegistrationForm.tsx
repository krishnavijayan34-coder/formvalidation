import { useState } from "react";

import {
  validateFields,
  validateEmail,
  validatePassword,
} from "../utils/validation";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const [form, setForm] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateFields(form, [
      "name",
      "email",
      "password",
      "confirmPassword",
    ]);

    // Email validation
    if (!validateEmail(form.email)) {
      validationErrors.push("Invalid email format");
    }

    
    if (!validatePassword(form.password)) {
      validationErrors.push(
        "Password must be at least 6 characters"
      );
    }

    
    if (form.password !== form.confirmPassword) {
      validationErrors.push("Passwords do not match");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    alert("Registration successful");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
        value={form.name}
        onChange={handleChange}
      />

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

      <TextField
        fullWidth
        margin="normal"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />

      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{ mt: 2 }}
      >
        Register
      </Button>

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