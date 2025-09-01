import { Href, router } from "expo-router";
import { useRef } from "react";

export function useSafeNavigation() {
  const isNavigating = useRef(false);

  function navigateTo(path: Href, delay = 1000) {
    if (isNavigating.current) return;

    isNavigating.current = true;

    router.push(path);

    setTimeout(() => {
      isNavigating.current = false;
    }, delay);
  }

  return navigateTo;
}
