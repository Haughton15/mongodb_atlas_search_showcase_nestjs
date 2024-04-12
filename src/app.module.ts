import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MDB_URI, { dbName: 'sample_mflix' }),
    MoviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
