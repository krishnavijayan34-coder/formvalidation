import  type { User } from "../types/user";
export function getUser():Promise<User>{
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Krishna",
        email: "krishna@gmail.com",
        isAdmin: true,
      });
    }, 1000);
});
}
