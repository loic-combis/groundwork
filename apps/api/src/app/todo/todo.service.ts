import { TodoDto } from "./todo.model";
import { Todo, ITodo } from "./todo.schema";

export class TodoService {

    static async getAll(): Promise<TodoDto[]> {
        const todos: ITodo[] | void = await Todo.find().catch(console.log);
        return (todos || []).map((todo: ITodo) => ({ id: todo.id, title: todo.title, description: todo.description }))
    }

    static async create(todo: TodoDto): Promise<TodoDto> {
        const newTodo: ITodo | void = await Todo.create(todo).catch(console.log);
        if (newTodo) {
            return { id: newTodo?.id, title: newTodo?.title, description: newTodo?.description };
        }
        return null;
    }

    static async delete(id: string): Promise<boolean> {
        const deletedTodo: ITodo | void = await Todo.findByIdAndDelete(id).catch(console.log);
        return !!deletedTodo;
    }
}