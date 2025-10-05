import Typography from "@core/components/typography";
import { ChevronUpIcon, IconSize } from "@icons";
import React from "react";
import { useTheme } from "styled-components";
import { BacklinkWrapper, BreadcrumbWrapper, ModuleHeaderTitle, ModuleHeaderWrapper, PageTitle } from "./module.styles";
import { ModuleHeaderProps } from "./module.types";

export const ModuleHeader: React.FC<ModuleHeaderProps> = ({
  backlink,
  pageTitle,
  breadcrumbItems,
  titleEndElement,
}) => {
  const { colorPalettes } = useTheme();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, callback: () => void) => {
    event.preventDefault();
    callback();
  };

  return (
    <ModuleHeaderWrapper data-testid="module-header">
      {backlink && (
        <BacklinkWrapper as="a" href="#" data-testid="backlink" onClick={(e) => handleLinkClick(e, backlink.onClick)}>
          <ChevronUpIcon size={IconSize.sm} />
          <Typography.Breadcrumb color={colorPalettes.primary.accent[600]}>{backlink.label}</Typography.Breadcrumb>
        </BacklinkWrapper>
      )}
      {breadcrumbItems?.length && (
        <BreadcrumbWrapper data-testid="breadcrumb">
          {breadcrumbItems.map(({ label, onClick }, index) => (
            <React.Fragment key={label}>
              <Typography.Breadcrumb
                as="a"
                href="#"
                color={colorPalettes.primary.accent[600]}
                onClick={(e) => handleLinkClick(e, onClick)}
              >
                {label}
              </Typography.Breadcrumb>
              {index < breadcrumbItems.length - 1 && <ChevronUpIcon size={IconSize.sm} />}
            </React.Fragment>
          ))}
        </BreadcrumbWrapper>
      )}
      <ModuleHeaderTitle>
        <PageTitle data-testid="page-title">{pageTitle}</PageTitle>
        {titleEndElement}
      </ModuleHeaderTitle>
    </ModuleHeaderWrapper>
  );
};
