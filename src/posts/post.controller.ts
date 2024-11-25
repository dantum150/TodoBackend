import { Get, Controller, Post, Body, Delete, Param, Patch } from "@nestjs/common";
import { PostService } from "./post.service";
import { IPost } from "./post.service";

// localhost:3000/posts/asdasdasd

// baseUrl(localhost:3000) + controller + декораторы

interface IParam {
    id: string
}
interface IBody {
    text: string
}

@Controller('/posts')
export class PostController {
    // postService = serviceObject
    // "Ворота" класса, который впускает параметры и даёт жить внутри класса
    // если в конструкторе есть параметр, этот параметр протипизирован классом сервиса, у которого Injectable
    constructor(public postService: PostService) {}


        // postService = {
        //     createpost()
        //     deletepost()
        // }




        // exemplarPostController = {
        //     postService: {
        //         posts = [],
        //         getPosts(),
        //         createPost()
        //     },
        //     getall() {
        //         return this.postSevice.getPosts()
        //     },
        //     createOne() {
        //         return this.postService.createPost()
        //     }
        // }

    @Get()
    getAll(): IPost [] {
       return this.postService.getPost()
    }

    @Post()
    createOne(@Body() post: IPost) {
        return this.postService.createPost(post) // {status: 'success', post:post}
    }

    @Delete('/:id')
    deleteOne(@Param() param: IParam){
        return this.postService.deletePost(+param.id)
    }

    @Patch('/:id') 
    updateOne(@Body() body:IBody, @Param() param: IParam){
        return this.postService.updatePost(+param.id, body.text)
    }
}

const serviceObject = new PostService()

const controllerObject = new PostController(serviceObject)
// const routerObject = {
//     '/posts' + get : controllerObject.getAll(),
//     '/posts' + post : controllerObject.createOne(),
//     '/posts/:id' + delete : controllerObject.deleteOne() 
// }

let name = 'john'
const person = {
    name,

    sayHello() {
        return this.age
    },

    getNumber(num: number) {
        console.log(num)
    }
}
