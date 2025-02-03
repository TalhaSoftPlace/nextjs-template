import { useState, useEffect, useLayoutEffect } from "react";
export const useSyncState = function (initialValue) {
  const [value, updateValue] = useState(initialValue);

  let current = value;

  const get = () => current;

  const set = (newValue) => {
    current = newValue;
    updateValue(newValue);
    return current;
  };

  return {
    get,
    set,
  };
};

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  return {
    width: 0,
    height: 0,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}
