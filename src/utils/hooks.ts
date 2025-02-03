import { Dispatch } from "@reduxjs/toolkit";
import { useCallback, useEffect, useRef, useState } from "react";
import { isJSON } from "./functions";
import { getCookie } from "cookies-next";

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  callback: VoidFunction
): React.RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export const useGlobalUser = (user: any | null, dispatch: Dispatch) => {
  const cookieUser = isJSON(getCookie("kaufesuser"));
  if (!user) {
    // dispatch(setUser(cookieUser));
  }
};

export const useTimeLeft = (endDate: string) => {

  const [timeLeft, setTimeLeft] = useState<string>("");
  const [isTimeInHurry, setIsTimeInHurry] = useState(false);
  const [isTimeEnded, setIsTimeEnded] = useState<boolean>(false);
  const startTickingRef = useRef<boolean>(false);

  const getTimeLeft = (shouldTick = false) => {
    startTickingRef.current = shouldTick;
    return timeLeft;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const end = new Date(endDate);
      const difference = end.getTime() - now.getTime();

      if (difference < 86400000 && !startTickingRef.current) {
        startTickingRef.current = true;
      }

      let newTimeLeft = "";

      if (difference <= 0) {
        newTimeLeft = ("my_selling.selling_tab.product.not_sold");
        if (!isTimeEnded) setIsTimeEnded(true);
      } else if (difference < 3600000) {
        // Less than an hour
        const minutes = Math.floor(difference / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        newTimeLeft = `00:${minutes}:${seconds}`;
        setIsTimeInHurry(true);
      } else {
        // const hours = Math.floor(difference / (1000 * 60 * 60));
        // const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        // const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const day = end.getDate();
        const month = monthNames[end.getMonth()];
        const year = end.getFullYear();
        newTimeLeft = `${day}. ${month} ${year}`;
      }

      setTimeLeft(newTimeLeft);
    };
    updateTimer();

    let interval: ReturnType<typeof setInterval>;
    if (startTickingRef.current) {
      interval = setInterval(updateTimer, 1000);
    }

    return () => clearInterval(interval);
  }, [endDate, isTimeEnded]);

  return { getTimeLeft, isTimeInHurry, isTimeEnded };
};

export const useClipboardCopy = <T extends HTMLElement = HTMLInputElement>() => {
  const inputRef = useRef<T | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = useCallback(async () => {
    if (inputRef.current) {
      let textToCopy: string = "";
      if (inputRef.current instanceof HTMLInputElement) {
        textToCopy = inputRef.current.value;
      } else {
        textToCopy = inputRef.current.textContent || "";
      }

      try {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
      } catch (err) {
        setIsCopied(false);
      }
    }
  }, []);

  return { inputRef, handleCopy, isCopied };
};

export const useInterval = (callback: Function, delay: number | null) => {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useScroll = <T extends HTMLElement = HTMLDivElement>({
  scrollSpeed = 1,
}: {
  scrollSpeed: number;
}) => {
  const ref = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const handleScroll = useCallback(
    (e: WheelEvent): void => {
      e.preventDefault();
      if (ref.current) {
        ref.current.scrollLeft += e.deltaY * scrollSpeed;
      }
    },
    [scrollSpeed]
  );

  const handleMouseDown = (e: React.MouseEvent<T>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragDistance(0);
  };

  const handleMouseMove = (e: React.MouseEvent<T>) => {
    if (!isDragging || !ref.current) return;

    e.preventDefault();
    const scrollSpeedFactor = scrollSpeed;
    // Calculate the distance moved since the last event
    const distanceMoved = (e.clientX - startX) * scrollSpeedFactor;
    // Update the scroll position
    ref.current.scrollLeft -= distanceMoved;
    // Update the drag distance for detecting click vs drag
    setDragDistance((prevDistance) => prevDistance + Math.abs(e.clientX - startX));
    // Set the new start position for the next movement
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleScroll, { passive: false });

      return () => {
        currentRef.removeEventListener("wheel", handleScroll);
      };
    }
  }, [handleScroll]);
  return {
    dragDistance,
    ref,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};

export const useEmptyStates = ({
  CurrentComponent,
  LoadingComponent,
  EmptyComponent,
  condition,
  isLoading,
}: {
  CurrentComponent: JSX.Element;
  LoadingComponent: JSX.Element;
  EmptyComponent: JSX.Element;
  condition?: boolean;
  isLoading?: boolean;
}) => {
  let ComponentToShow = LoadingComponent;
  if (!isLoading) {
    ComponentToShow = condition ? CurrentComponent : EmptyComponent;
  }
  return { ComponentToShow };
};
