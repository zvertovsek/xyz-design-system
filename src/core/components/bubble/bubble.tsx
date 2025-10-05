import Icons from "@icons";
import React from "react";

import {
  BubbleContent,
  BubbleDisplayName,
  BubbleElement,
  BubbleHeader,
  BubblePlayButton,
  BubbleTime,
} from "./bubble.styles";
import { BubbleProps } from "./bubble.types";
import dateParserUtility from "@utils/dateParser";

const addZeroPrefix = (num: number | undefined): string => (num !== undefined ? String(num).padStart(2, "0") : "");

const convertSeconds = (value: string): string => {
  const secondsNumber = parseFloat(value);
  const { hours, minutes, seconds } = dateParserUtility.intervalToDuration(0, secondsNumber * 1000);
  const timeWithoutHours = `${addZeroPrefix(minutes)}:${addZeroPrefix(seconds)}`;
  return hours ? `${addZeroPrefix(hours)}:${timeWithoutHours}` : timeWithoutHours;
};

export const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>(
  ({ active, children, alignment = "left", startTime, displayName, onPlay, onClick }, ref) => {
    return (
      <BubbleElement alignment={alignment} ref={ref} active={active} onClick={onClick}>
        <BubbleHeader>
          {onPlay && <BubblePlayButton icon={Icons.PlayIcon} onClick={() => onPlay(startTime)} />}
          {startTime && <BubbleTime>{convertSeconds(startTime)}</BubbleTime>}
          {displayName && <BubbleDisplayName>{displayName}</BubbleDisplayName>}
        </BubbleHeader>
        <BubbleContent>{children}</BubbleContent>
      </BubbleElement>
    );
  },
);

export default Bubble;
