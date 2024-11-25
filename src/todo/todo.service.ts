import { Injectable, HttpException } from "@nestjs/common";
import { identity } from "rxjs";

// 1.Получать все тудушки
// 2.Получать одну тудушку по id
// 3.Получать все выполненные тудушки
// 4.Получать все невыполненные тудушки
// 5.Создавать одну тудушку
// 6.Удалять одну тудушку
// 7.Изменять одну тудушку

// interface = id, title, completed, prioritet (high, medium, low)

export type Prioritet = 'high' | 'medium' | 'low'

export interface ITodo {
    id: number,
    title: string,
    completed: boolean,
    prioritet: Prioritet
}

@Injectable()
export class TodoService {

    arrayTodo: ITodo [] = []

    getAllTodo(){
        return this.arrayTodo
    }
    
    // find, map, filter, some, every, reduce - циклы
    // любое сравнение - true || false
    getOneTodo(id: number) {
        const foundTodo = this.arrayTodo.find((todo)=> id === todo.id )

        if (foundTodo) {
            return foundTodo
        }

        throw new HttpException('Тудушка не нашлась', 404)
    }
    
    getAllByStatus(completed: boolean){
        return this.arrayTodo.filter((todo)=> completed === todo.completed)
    }

    // 'high'
    createOneTodo(text: string, prioritet?: Prioritet ){
        const newTodo = {
            id: Date.now(),  // 21314232341313
            title: text,
            completed: false,
            prioritet: prioritet || 'low'
        }
        
        this.arrayTodo.push(newTodo)

        return newTodo
    }

    deleteOneTodo(id: number){
        return this.arrayTodo.filter((todo)=> todo.id !== id)
    }

    

    updateOneTodo(id: number, updatedTodo: ITodo){
      const newOneTodo = this.getOneTodo(id)

      if (newOneTodo) {
        newOneTodo.completed = updatedTodo.completed
        newOneTodo.prioritet = updatedTodo.prioritet
        newOneTodo.title = updatedTodo.title
      }  

      return newOneTodo
    }
    

    // getAllCompletedTodo(){
    //     return this.arrayTodo.filter((todo)=> todo.completed === true)
    // }

    // getAllInCompletedTodo(){
    //     return this.arrayTodo.filter((todo)=> todo.completed === false)
    // }
    
}