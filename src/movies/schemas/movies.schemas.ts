import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: Number,
    genres: [String],
    runtime: Number,
    cast: [String],
    plot: String,
    fullplot: String,
    lastupdated: String,
    type: String,
    directors: [String],
    writers: [String],
    imdb: {
      rating: Number,
      votes: Number,
      id: Number,
    },
    countries: [String],
    rated: String,
    languages: [String],
    released: Date,
    awards: {
      wins: Number,
      nominations: Number,
      text: String,
    },
    posters: [String],
    metacritic: Number,
  },
  { timestamps: true },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface Movie extends mongoose.Document {
  title: string;
  year: number;
  genres: string[];
  runtime: number;
  cast: string[];
  plot: string;
  fullplot: string;
  lastupdated: string;
  type: string;
  directors: string[];
  writers: string[];
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  rated: string;
  languages: string[];
  released: Date;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  posters: string[];
  metacritic: number;
}
