import Layout from "@core/components/layout";
import Typography from "@core/components/typography";
import { DescriptionWrapper } from "./paragraph.styles";
import { ParagraphProps } from "./paragraph.types";

const Paragraph: React.FC<ParagraphProps> = ({ title, description }) => {
  return (
    <Layout.Container data-testid="paragraph-assessment">
      {title && <Typography.Overline>{title}</Typography.Overline>}
      <DescriptionWrapper>{description}</DescriptionWrapper>
    </Layout.Container>
  );
};

export default Paragraph;
