import localStore from "./localstore.util";
import { updateHeaders } from "../services/HttpProvider";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const getToken = () => getCookie("hopToken");
export const setToken = (token) => setCookie("hopToken", token);

export const getUser = () => getCookie("hopUser");
export const setUser = (user) => setCookie("hopUser", user);

export const setUserRole = (token) => localStore.store_data("hopUserRole", token);

export const logout = async () => {
  Promise.all[
    (deleteCookie("hopToken"),
    deleteCookie("hopUser"),
    localStore.remove_data("hopUserRole"),
    updateHeaders())
  ];
  return true;
};

class Auth {
  constructor() {
    this.user = {};
  }

  async setUserFromLocal() {
    const user = await getToken();
    this.user = user ? user : {};
  }

  set setUser(user) {
    this.user = user;
  }

  get getUser() {
    return this.user;
  }

  async logout() {
    await logout();
    this.user = {};
  }
}

export const authClass = new Auth();

export const userRole = {
  Admin: 0,
  personal: 1,
  business: 2,
};
export const userRoleObject = {
  Admin: 0,
  Individual: 1,
  Business: 2,
};