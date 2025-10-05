import { Severity } from "@core/components/tag/tag.types";

export interface AssessmentAttributeProps {
  title: string;
  value: string;
  severity: Severity;
  boldLevel?: number;
}
