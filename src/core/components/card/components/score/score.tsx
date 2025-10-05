import { Tag } from "@core/components/tag";
import { useTheme } from "styled-components";
import { ScoreWrapper, ScoreCategory } from "./score.styles";
import { AssessmentAttributeProps } from "./score.types";

const Score: React.FC<AssessmentAttributeProps> = ({ title, value, severity, boldLevel }) => {
  const theme = useTheme();

  return (
    <ScoreWrapper>
      <ScoreCategory boldGrade={boldLevel}>{title}</ScoreCategory>
      <Tag className="tag-score" label={value} severity={severity} isBold={boldLevel === theme.fontWeights.bold} />
    </ScoreWrapper>
  );
};

export default Score;
