import { GetRandomProps, Quote } from "./types";
import data from "../assets/quotes.min.json";

export function getRandomQuote({
  minLength,
  maxLength,
  minRank,
  maxRank,
  author,
  categories,
}: GetRandomProps): Quote | null {
  const filtered = (data as Quote[]).filter((quote) => {
    const normalizedAuthor = quote.Author.split(",")[0].trim().toLowerCase();

    if (minLength && quote.Quote.length < minLength) return false;
    if (maxLength && quote.Quote.length > maxLength) return false;
    if (minRank && quote.Rank < minRank) return false;
    if (maxRank && quote.Rank > maxRank) return false;
    if (author && normalizedAuthor !== author.toLowerCase()) return false;
    if (
      categories &&
      categories.length > 0 &&
      (categories.length === 1
        ? !quote.Categories.includes(categories[0])
        : !categories.every((category) => quote.Categories.includes(category)))
    )
      return false;
    return true;
  });

  if (filtered.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}
