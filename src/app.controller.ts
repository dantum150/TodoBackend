import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


const person = {
  name: 'John',
  sayHello() {
    console.log(this.name)
  }
}

person.sayHello()

const person2 = {...person}   //деструктуризация

person2.name = 'Max'
person2.sayHello()   // John


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();   // return 'hello world'
  }
}
