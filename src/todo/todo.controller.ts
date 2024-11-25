import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { TodoService, ITodo, Prioritet } from "./todo.service";

interface IObjectFromUrl {
    id: string
}

interface IObjectFromBody {
    text: string,
    prioritet?: Prioritet
}

// http://localhost:3000/todo
// 1. В конструктор должен попадать экземпляр сервиса
// 2. Нужно описать методы, которые вызывают методы экземпляры
@Controller ('/todo')
export class TodoController {

    constructor(public TodoService: TodoService ) {}
    
    // get, post, patch, delete

    // Получение всех тудушек http://localhost:3000/todo
    @Get()
    getAll(): ITodo []  {
        return this.TodoService.getAllTodo()
    }

    // Получение одной тудушки по id  http://localhost:3000/todo/1
    @Get(":id")
    GetOne(@Param() objectFromUrl: IObjectFromUrl){ //param() { return { id: '1' }}
        console.log(objectFromUrl)
        return this.TodoService.getOneTodo(+objectFromUrl.id)
    }



    // <input>'new todo'</input>

    // <select>
    //     <option>high</option>
    //     <option>low</option>
    // </select>


    // <button>создать туду</buttom>
    // axios.post('http://localhost:3000/todo', {text: 'new todo', prioritet: 'high'})

    // {body: {text: 'new todo', prioritet: 'high'} }
    // {id, completed:false, text: 'new todo', prioritet: 'high' }
    @Post()
    CreateOne(@Body() objectFromBody: IObjectFromBody ) {
        // post-методы должны на фронтенд возвращать всё то, что они создали
        return this.TodoService.createOneTodo(objectFromBody.text, objectFromBody?.prioritet)
    }
}