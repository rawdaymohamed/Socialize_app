import { logout } from "./api-auth";

export default {
  authenticate(jwt: any, cb: Function) {
    if (typeof window !== "undefined")
      localStorage.setItem("jwt", JSON.stringify(jwt));
    cb();
  },
  isAuthenticated() {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt"))
      return JSON.parse(localStorage.getItem("jwt") as string);
    else return false;
  },
  clearJWT(cb: any) {
    if (typeof window !== "undefined") localStorage.removeItem("jwt");
    cb();
    logout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  },
};
