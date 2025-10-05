import React, { useImperativeHandle, useRef, useState } from "react";
import { ProgressBarElement, ProgressBarIndicator, ProgressBarWrapper } from "./progressBar.styles";
import { ProgressBarHandle, ProgressBarProps } from "./progressBar.types";

const getSeconds = (positionX: number, progressWidth: number, totalTime: number) =>
  Math.round((positionX / progressWidth) * totalTime * 100) / 100;

export const ProgressBar = React.forwardRef<ProgressBarHandle, ProgressBarProps>(({ onChange, totalTime }, ref) => {
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLButtonElement>(null);
  const [leftPosition, setLeftPosition] = useState<number | undefined>();

  const setProgressBarWidth = (width: number) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${width}%`;
      progressBarRef.current.setAttribute("aria-valuenow", width.toString());
    }
  };

  const setIndicatorLeftPositionOnClick = (width: number) => {
    const containerWidth = progressContainerRef.current?.getBoundingClientRect().width;
    const left = (width * (containerWidth || 0)) / 100;
    setLeftPosition(left);
  };

  useImperativeHandle(ref, () => ({
    updateTime: (width: number) => {
      setProgressBarWidth(width);
      setIndicatorLeftPositionOnClick(width);
    },
  }));

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === indicatorRef.current) return;
    const rect = progressContainerRef.current?.getBoundingClientRect();
    if (rect) {
      const positionX = event.pageX - rect.left;
      const currentTimeInSeconds = getSeconds(positionX, rect.width, totalTime);
      onChange(currentTimeInSeconds);
    }
  };

  const handleMouseDown = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const shiftX = ev.clientX - ev.currentTarget.getBoundingClientRect().left;
    let newShiftX: number | null = null;

    const onMouseMove = (event: MouseEvent) => {
      if (progressContainerRef.current) {
        newShiftX = event.clientX - shiftX - progressContainerRef.current.getBoundingClientRect().left;
        if (newShiftX < 0) {
          newShiftX = 0;
        }
        const rightEdge = progressContainerRef.current.offsetWidth;
        if (newShiftX > rightEdge) {
          newShiftX = rightEdge;
        }
        console.log(newShiftX);
        setLeftPosition(newShiftX);
      }
    };

    const onMouseUp = () => {
      if (progressContainerRef.current && typeof newShiftX === "number") {
        const currentTimeInSeconds = getSeconds(newShiftX, progressContainerRef.current.offsetWidth, totalTime);
        const currentProgress = (newShiftX / progressContainerRef.current.offsetWidth) * 100;
        console.log(currentProgress);

        onChange(currentTimeInSeconds);
      }

      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <ProgressBarWrapper data-testid="progressBar" onClick={handleClick} ref={progressContainerRef} tabIndex={1}>
      <ProgressBarElement ref={progressBarRef} role="progressbar" aria-valuemin={0} aria-valuemax={100}>
        <ProgressBarIndicator
          ref={indicatorRef}
          data-testid="progressBarIndicator"
          style={{ left: leftPosition }}
          onMouseDown={handleMouseDown}
        />
      </ProgressBarElement>
    </ProgressBarWrapper>
  );
});

export default ProgressBar;
