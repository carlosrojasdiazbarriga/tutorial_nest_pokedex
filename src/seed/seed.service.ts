import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  populateDB() {
    return 'This action populates the database with seed data';
  }
}
