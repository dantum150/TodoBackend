// post = {id, text}

import { Injectable } from "@nestjs/common"

export interface IPost {
    id: number,
    text: string
}

// объект на основе класса === экзмепляр класса
// const service = new PostService() === экзмепляр класса
@Injectable()
export class PostService {
   postArray: IPost [] = [{id:1, text: 'привет из сервиса'}]
   
   getPost(){
    return this.postArray
   }
   
   createPost(post:IPost){
    this.postArray.push(post)

    return {
        status: 'success',
        post: post
    }
   }
   
   deletePost(id:number){
    this.postArray = this.postArray.filter((item)=> item.id !== id)

    return {
        status: 'success',
        id: id
    }
   }
    

   // 1. найти по id, 
   // 2. у найденного объекта что-то приравнять к новому 
   updatePost(id: number, newText: string){
    const NewPost = this.postArray.find((item)=> item.id === id )

    if (NewPost) {
        NewPost.text = newText
    }

    return {
        status: 'success',
        item: {
            id: id,
            text: newText
        }
    }

    }  // {id: 10, text}
   
}
