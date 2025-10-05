import Icons from "@icons";
import React, { useEffect, useState } from "react";
import { MatchButton, MatchElement, MatchLabel, MatchLabelSelected, NoResult } from "./matches.styles";
import { MatchesProps } from "./matches.types";

export const NO_RESULTS_LABEL = "no results found";

const Matches: React.FC<MatchesProps> = ({ matches, onMatchChange, texts }) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    onMatchChange(selected);
  }, [selected]);

  const increment = () => {
    setSelected((value) => (value + 1 >= matches ? value : value + 1));
  };

  const decrement = () => {
    setSelected((value) => (value === 0 ? value : value - 1));
  };

  if (matches === 0) {
    return <NoResult>{texts?.noResults || NO_RESULTS_LABEL} </NoResult>;
  }

  return (
    <MatchElement>
      <MatchButton type="button" onClick={decrement} data-testid="searchMatch-increment">
        <Icons.ChevronUpIcon />
      </MatchButton>
      <MatchLabel>
        <MatchLabelSelected>{selected + 1}</MatchLabelSelected> of {matches}
      </MatchLabel>
      <MatchButton type="button" orientation="bottom" onClick={increment} data-testid="searchMatch-decrement">
        <Icons.ChevronUpIcon />
      </MatchButton>
    </MatchElement>
  );
};

export default Matches;
