import type { User } from "../types/user";

const userPromise: Promise<User> = new Promise((resolve) => {
  setTimeout(() => {
    console.log("DATA RETURNED");

    resolve({
      id: 1,
      name: "Krishna",
      email: "krishna@gmail.com",
      isAdmin: true,
    });
  }, 5000);
});

export function getUser() {
  return userPromise;
}