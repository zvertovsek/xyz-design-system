import { ButtonTypes, TextButton } from "@core/components";
import { ChevronUpIcon } from "@icons";
import { ReportBackLinkWrapper } from "./reports.styles";
import { ReportBackLinkProps } from "./reports.types";

export const ReportBackLink: React.FC<ReportBackLinkProps> = ({ text, onClick }) => {
  return (
    <ReportBackLinkWrapper>
      <TextButton
        testId="backlink-button"
        label={text}
        onClick={onClick}
        icon={ChevronUpIcon}
        size={ButtonTypes.CommonButtonSize.sm}
      />
    </ReportBackLinkWrapper>
  );
};
