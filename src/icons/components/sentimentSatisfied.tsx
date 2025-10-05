import { useTheme } from "styled-components";
import { IconProps, IconSize } from "../icon.types";
import BaseIcon from "./baseIcon";

const SentimentSatisfiedIcon: React.FC<IconProps> = ({ size = IconSize.lg, ...props }) => {
  const theme = useTheme();
  const color = props.color || theme.colorPalettes.black;

  const graphic = (
    <path
      d="M15.4 10.8q.55 0 .925-.375T16.7 9.5q0-.55-.375-.925T15.4 8.2q-.55 0-.925.375T14.1 9.5q0 .55.375.925t.925.375Zm-6.8 0q.55 0 .925-.375T9.9 9.5q0-.55-.375-.925T8.6 8.2q-.55 0-.925.375T7.3 9.5q0 .55.375.925t.925.375Zm3.4 6.4q1.575 0 2.863-.875Q16.15 15.45 16.775 14H15.45q-.55.925-1.462 1.462Q13.075 16 12 16t-1.988-.538Q9.1 14.925 8.55 14H7.225q.625 1.45 1.913 2.325 1.287.875 2.862.875Zm0 4.3q-1.975 0-3.712-.75Q6.55 20 5.275 18.725T3.25 15.712Q2.5 13.975 2.5 12t.75-3.713Q4 6.55 5.275 5.275T8.288 3.25Q10.025 2.5 12 2.5t3.713.75q1.737.75 3.012 2.025t2.025 3.012q.75 1.738.75 3.713t-.75 3.712q-.75 1.738-2.025 3.013t-3.012 2.025q-1.738.75-3.713.75Zm0-9.5Zm0 8q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Z"
      viewBox="0 96 960 960"
      fill={color}
    />
  );

  return <BaseIcon size={size} testId="SentimentSatisfied" graphic={graphic} />;
};

export default SentimentSatisfiedIcon;
