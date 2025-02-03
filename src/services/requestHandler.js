import { del, get, patch, post, put } from "./HttpProvider";
import featureConstants from "./features-constants";

const SERVICE_URLS = {
  // service URL's (API End-Points)
  readProfile: "/profile",
  login: "/auth/login",
  logout: "/logout",
  verifyProfile: "/verify-profile",
  updateProfile: "/update-profile",
};

const readUserProfile = (data) => get(SERVICE_URLS.readProfile, {}, { feature: featureConstants.login });
const login = (data) => post(SERVICE_URLS.login, data, { feature: featureConstants.login });
const logoutUser = (data) => del(SERVICE_URLS.logout, data, { feature: featureConstants.login });
const verifyProfile = (data) => put(SERVICE_URLS.verifyProfile, data, { feature: featureConstants.login });
const updateProfile = (data) => patch(`${SERVICE_URLS.updateProfile}`, data, { feature: featureConstants.login });



export const apiServices = {

  login,
  readUserProfile,
  verifyProfile,
  updateProfile,
  logoutUser,
};
