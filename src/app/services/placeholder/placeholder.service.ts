import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private api = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.api}/posts/${id}`);
  }
}
