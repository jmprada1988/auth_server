import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): object {
    return {
      data: [],
      message: 'Welcome to Helix Genetics API'
    }
  }
}
