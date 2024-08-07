import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}
  findByEmail(email: string) {
    return this.db.user.findFirst({ where: { email } });
  }
  async create(email: string, hash: string, salt: string) {
    return this.db.user.create({ data: { email, hash, salt } });
  }
}
