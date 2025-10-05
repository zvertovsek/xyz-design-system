import { TagTypes } from "@core/components/tag";
import Typography from "@core/components/typography";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import styled from "styled-components";
import { Attributes } from "../components";
import BaseCard from "./baseCard";
import { BaseCardProps } from "./baseCard.types";

export default {
  title: "Components/Card",
  component: BaseCard,
} as Meta;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const AttributesContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Default: StoryFn<BaseCardProps> = (args) => {
  const [isSelected, setIsSelected] = useState<boolean>(args.isSelected || false);
  return (
    <div style={{ width: "300px" }}>
      <BaseCard {...args} isSelected={isSelected} onClickCard={() => setIsSelected(true)}>
        <Container>
          <Typography.H3>Base Card</Typography.H3>
          <AttributesContainer>
            <Attributes
              attributes={[{ label: "Complaint" }, { label: "Vulnerability", severity: TagTypes.Severity.Danger }]}
            />
          </AttributesContainer>
        </Container>
      </BaseCard>
    </div>
  );
};

export const CardBase = Default.bind({});

CardBase.storyName = "Base Card";
CardBase.args = {
  colorCard: "#dbff00",
};
CardBase.argTypes = {
  colorCard: {
    control: {
      type: "color",
    },
  },
};
