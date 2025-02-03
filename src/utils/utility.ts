import {
  ApiResponseType,
  ValidatorType,
} from "@/types";
import { Action, AsyncThunkAction } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";
import { updateQuery } from "./update-query";
import useWindowDimensions from "./customHooks";
import { Device } from "@/enums/ui";
// import { FormStages } from "@/enums";
import "moment/locale/de";

import * as yup from "yup";
import moment from "moment";

//get next form

export function formatStrings(str: string, replaceValues: string[]): string {
  let formattedString = str;
  for (const [index, value] of replaceValues.entries()) {
    formattedString = formattedString.replace(`{${index}}`, value);
  }
  return formattedString;
}
export function setErrors(setError: Function, errors: object, translate: Function): void {
  if (!errors) return;
  for (const [key, value] of Object.entries(errors)) {
    if (key && !value) setError(key, { message: null });
    else
      setError(key, {
        message: formatStrings(
          translate(`validationMessages.${value?.split(":")[0]}`),
          value?.split(":").slice(1)
        ),
      });
  }
}
export function setErrorMessage(error: string | null, translate: Function): string {
  if (!error) return "";
  return translate(`validationMessages.${error}`);
}

export const combineClasses = (defaultClasses: string, className?: string): string => {
  if (!className) return defaultClasses;

  const defaultSet = new Set(defaultClasses.split(" "));
  const customSet = new Set(className.split(" "));

  // Remove classes with !! prefix from default classes
  [...customSet].forEach((customClass) => {
    if (customClass.startsWith("!!")) {
      defaultSet.delete(customClass.slice(2));
      customSet.delete(customClass);
    }
  });

  // Remove overlapping classes from default classes
  [...defaultSet].forEach((defaultClass) => {
    const baseClass = defaultClass.split("-")[0];
    [...customSet].forEach((customClass) => {
      if (customClass.startsWith(baseClass)) {
        defaultSet.delete(defaultClass);
      }
    });
  });

  return [...defaultSet, ...customSet].join(" ");
};

export const conditionHandler = (
  router: NextRouter,
  response: ApiResponseType,
  connect?: boolean
) => {
  if (!connect) {
    if (!response.data.data.User.isEmailVerified) {
      router.pathname = "/register/verifyEmailAddress";
      updateQuery(router, "en");
    } else if (!response.data.data.User.isProfileComplete) {
      router.pathname = "/register/profiledetails";
      updateQuery(router, "en");
    } else {
      if (response.data.data.User.accountStatus) {
        router.pathname = "/user-account-settings";
        updateQuery(router, "en");
      } else {
        router.pathname = "/user-account-settings";
      }
    }
  } else {
    router.query = {};
    updateQuery(router, "en");
  }
};

export const generateNumbersArray = function* (totalPages: number) {
  for (let i = 0; i < totalPages; i++) {
    yield i;
  }
};

export const isEqual = (value1: any, value2: any) => {
  return value1 === value2;
};

export const getDeviceType = (): Device => {
  const { width } = useWindowDimensions();
  if (width == 0) {
    return Device.LOADING;
  }
  const deviceType = width >= 768 ? Device.DESKTOP : Device.MOBILE;
  return deviceType;
};

export const debounce = (fn: (...args: any[]) => void, ms: number): (() => void) => {
  let timer: NodeJS.Timeout | null;
  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn(...args);
    }, ms);
  };
};

export const getValidationMethod = <T>(type: ValidatorType): yup.Schema<T> => {
  switch (type) {
    case "string":
      return yup.string() as unknown as yup.Schema<T>;
    case "number":
      return yup.number() as unknown as yup.Schema<T>;
    case "array":
      return yup.array() as unknown as yup.Schema<T>;
    case "email":
      return yup.string().email() as unknown as yup.Schema<T>;
    case "date":
      return yup.date() as unknown as yup.Schema<T>;
    case "boolean":
      return yup.boolean() as unknown as yup.Schema<T>;
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
};

export const capitalizeString = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export function getKeyByValue(object: any, value:any) {
  let key = Object.keys(object).find((key) => object[key] === value);
  if (!key) return "";
  return key;
}
export function getValueByKey(object: any, value: any) {
  return Object.values(object).find((key: any) => object[key] === value);
}