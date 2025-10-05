import { Tag, TagTypes } from "@core/components/tag";
import React from "react";
import { Attribute } from "../../card.types";
import { AttributesComponentProps } from "./attributes.types";

const AttributesComponent: React.FC<AttributesComponentProps> = ({ attributes, showTooltip }) => {
  const printAttributes = (attributes: Attribute[]): JSX.Element[] => {
    const attributesDom: JSX.Element[] = [];

    const getSeverityLastAttributes = (attributes: Attribute[]): TagTypes.Severity => {
      const anyHasDanger = attributes.some((attribute) => attribute.severity === TagTypes.Severity.Danger);
      const allHaveAmber = attributes.every((attribute) => attribute.severity === TagTypes.Severity.Warning);
      const allHaveGreen = attributes.every((attribute) => attribute.severity === TagTypes.Severity.Success);

      if (anyHasDanger) {
        return TagTypes.Severity.Danger;
      } else if (allHaveAmber) {
        return TagTypes.Severity.Warning;
      } else if (allHaveGreen) {
        return TagTypes.Severity.Success;
      }

      return TagTypes.Severity.Default;
    };

    const buildDescriptionLastAttributes = (attributes: Attribute[]): string => {
      let description = "";

      attributes.forEach((attribute, index) => {
        const comma = index < attributes.length - 1 ? ", " : "";
        description += `${attribute.label}${comma}`;
      });

      return description;
    };

    for (const [index, { label, description, severity, isHighlighted }] of attributes.entries()) {
      if (index < 3) {
        attributesDom.push(
          <Tag
            key={index}
            label={label}
            severity={severity}
            isBold={isHighlighted}
            onHover={description ? showTooltip?.(description) : undefined}
          />,
        );
      } else {
        const lastAttributes = attributes.slice(index);
        attributesDom.push(
          <Tag
            key={index}
            label={`+${attributes.length - index}`}
            severity={getSeverityLastAttributes(lastAttributes)}
            onHover={showTooltip?.(buildDescriptionLastAttributes(lastAttributes))}
          />,
        );
        break;
      }
    }

    return attributesDom;
  };

  return <>{printAttributes(attributes)}</>;
};

export default AttributesComponent;
