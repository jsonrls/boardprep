import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const inner = innerRef.current;

    if (!cursor || !inner) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`;
      inner.style.left = `${clientX}px`;
      inner.style.top = `${clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add("custom-cursor-hover");
      inner.classList.add("custom-cursor-inner-hover");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("custom-cursor-hover");
      inner.classList.remove("custom-cursor-inner-hover");
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("a, button, [data-cursor='hover']")) {
        cursor.classList.add("custom-cursor-hover");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("a, button, [data-cursor='hover']")) {
        cursor.classList.remove("custom-cursor-hover");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={innerRef} className="custom-cursor-inner" />
    </>
  );
};

export default CustomCursor;

