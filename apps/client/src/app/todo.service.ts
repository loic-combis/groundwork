import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Todo } from "./todo.interface";

@Injectable({ providedIn: 'root' })
export class TodoService {
    private readonly baseUrl: string = 'http://localhost:3333/api';

    constructor(private http: HttpClient) {}

    getAll(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
    }

    create(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(`${this.baseUrl}/todos`, todo);
    }

    delete(id: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.baseUrl}/todos/${id}`);
    }
} 