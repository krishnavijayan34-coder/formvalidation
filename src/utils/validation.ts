export function validateFields<T extends object>(
  data: T,
  requiredFields: (keyof T)[]
): string[] {
  const errors: string[] = [];

  requiredFields.forEach((field) => {
    const value = data[field];

    if (
      value === "" ||
      value === null ||
      value === undefined
    ) {
      errors.push(`${String(field)} is required`);
    }
  });

  return errors;
}


export function validateEmail(email: string): boolean {
     const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return regex.test(email);
  return email.includes("@") && email.includes(".");
}


export function validatePassword(
  password: string
): boolean {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  return regex.test(password);
}