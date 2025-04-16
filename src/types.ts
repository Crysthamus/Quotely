export type GetRandomProps = {
  minLength?: number;
  maxLength?: number;
  author?: string;
  categories?: string[];
  minRank?: number;
  maxRank?: number;
};

export type Quote = {
  Quote: string;
  Author: string;
  Categories: string[];
  Rank: number;
};
