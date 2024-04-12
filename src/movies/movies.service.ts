import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from './schemas/movies.schemas';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel('Movie') private readonly movieModel: Model<Movie>,
  ) {}

  async findAll(title, pageNumber, pageSize) {
    const skipCount = (pageNumber - 1) * pageSize;
    return this.movieModel.aggregate([
      {
        $search: {
          index: 'dynamic',
          compound: {
            should: [
              {
                text: {
                  query: title,
                  path: ['title'],
                  fuzzy: {
                    maxEdits: 2,
                    prefixLength: 1,
                  },
                },
              },
            ],
          },
        },
      },
      {
        $addFields: {
          score: { $meta: 'searchScore' },
        },
      },
      { $sort: { score: -1 } },
      { $skip: skipCount },
      { $limit: pageSize },
    ]);
  }

  async findAllGenres(): Promise<any> {
    return await this.movieModel.aggregate([
      {
        $unwind: '$genres',
      },
      {
        $group: {
          _id: null,
          uniqueGenres: { $addToSet: '$genres' },
        },
      },
      {
        $project: {
          _id: 0,
          uniqueGenres: 1,
        },
      },
    ]);
  }

  async findCount() {
    return await this.movieModel.countDocuments();
  }
}
