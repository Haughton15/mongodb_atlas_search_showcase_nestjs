import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(
    @Query('title') title: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.moviesService.findAll(title, +page, +pageSize);
  }
}
