import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.less'],
    // Register the Post service by add it to the providers
    providers: [PostsService]
})
export class PostsComponent implements OnInit {

    public posts: any;

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.getPosts();
    }

    private getPosts() {
        this.postsService.getAllPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
}
