import { useTheme } from "styled-components";
import Layout from "@core/components/layout";
import { LinearBar, LinearGaugeBar, Text } from "./linearGauge.styles";
import { LinearGaugeProps } from "./linearGauge.types";

export const LinearGauge: React.FC<LinearGaugeProps> = ({ value, max, isHighlighted = false, text }) => {
  const theme = useTheme();

  return (
    <Layout.FlexboxContainer alignItems="center" gap={theme.spacing[3]}>
      <LinearGaugeBar>
        <LinearBar width={(value * 100) / max} isHighlighted={isHighlighted} data-testid="linear-bar" />
      </LinearGaugeBar>
      {text && <Text color={theme.colorPalettes.primary.accent[800]}>{text}</Text>}
    </Layout.FlexboxContainer>
  );
};

export default LinearGauge;
