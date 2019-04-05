import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from './services/placeholder/placeholder.service';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public post: Observable<Post>;

  constructor(private placeholderService: PlaceholderService) { }

  ngOnInit(): void {
    this.post = this.placeholderService.getPost(1);
  }

  public getPrevious(currentId: number): void {
    this.post = this.placeholderService.getPost(++currentId);
  }

  public getNext(currentId: number): void {
    this.post = this.placeholderService.getPost(++currentId);
  }

}
