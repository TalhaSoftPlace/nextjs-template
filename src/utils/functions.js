/**
 * Misc. functions
 */
import { logout } from "./auth.util";

export const capitalize = (str) => str?.charAt(0)?.toUpperCase() + str?.slice(1);

export const deepClone = (obj) => {
  var copy;

  if (obj == null || typeof obj != "object") {
    return obj;
  }

  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = deepClone(obj[attr]);
      }
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
};

export const isEmpty = (object, dataType = "object") => {
  switch (dataType) {
    case "object": {
      return !Object.keys(object).length;
    }
    default: {
      return false;
    }
  }
};


export const isNumber = (mobile) => {
  if (mobile) {
    let regex = new RegExp(/^[0-9]*$/);
    return regex.test(mobile);
  } else return false;
};

// UnAutherize user logout
export const unautherizeUser = () => {
  logout();
};

export const generateUniqueId = () => {
  return new Date().getTime().toString();
};

export function isJSON(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}