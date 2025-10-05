export interface MatchesProps {
  matches: number;
  onMatchChange: (value: number) => void;
  texts?: {
    noResults?: string;
  };
}
