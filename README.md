# Quotely

A simple and easy to use typescript quotes package that provides you with over `120 thousand` different quotes from various authors ranked by popularity and divided into `30` different categories [stats file](https://github.com/Crysthamus/Quotely/blob/main/assets/stats.txt).<br>
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Installation

Quotely can be installed via npm

```bash
npm install quotely
```

## Usage/Examples

The following code returns a quote object with value between 10-200 characters long by C.S. Lewis.

```typescript
import { getRandomQuote } from "./functions";

getRandomQuote({
  minLength: 10,
  maxLength: 200,
  author: "C.S. Lewis",
  categories: ["Friendship", "Relationship"],
}),
```

Like So:

```
{
  Quote: 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
  Author: 'C.S. Lewis,  The Four Loves',
  Categories: [ 'Friendship', 'Relationship' ],
  Rank: 13
}
```

All the parameters are optional and running:

```
getRandomQuote({})
```

returns a random quote object from the json file.
