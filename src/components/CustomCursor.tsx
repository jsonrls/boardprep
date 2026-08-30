import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) {
      return;
    }

    const cursor = cursorRef.current;
    const inner = innerRef.current;

    if (!cursor || !inner) {
      return;
    }

    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const positionCursor = () => {
      cursor.style.transform = `translate3d(calc(${pointerX}px - 50%), calc(${pointerY}px - 50%), 0)`;
      inner.style.transform = `translate3d(calc(${pointerX}px - 50%), calc(${pointerY}px - 50%), 0)`;
      animationFrame = 0;
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(positionCursor);
      }
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
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div ref={innerRef} className="custom-cursor-inner" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
