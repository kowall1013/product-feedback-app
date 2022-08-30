import { useEffect, RefObject } from "react";

type Callback = () => void;

function useOutsideClick(
  ref: RefObject<HTMLElement>,
  refHandle: RefObject<HTMLElement>,
  callback: Callback
): void {
  useEffect(() => {
    console.log();
    function handleClick(e: MouseEvent): void {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !refHandle.current?.contains(e.target as Node)
      ) {
        console.log("odpalam");
        callback();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
