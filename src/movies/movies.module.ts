import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema } from './schemas/movies.schemas';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Movie',
        schema: MovieSchema,
      },
    ]),
  ],
})
export class MoviesModule {}
