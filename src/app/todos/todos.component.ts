import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less'],
  providers: [PostsService]
})
export class TodosComponent implements OnInit {

    public posts: any = [];

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.postsService.getAllPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
}
