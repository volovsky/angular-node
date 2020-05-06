import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
    {
        path:   '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path:   'posts',
        component: PostsComponent
    },
    {
        path:   'todos',
        component: TodosComponent
    },
    { 
        path: '**',
        component: PageNotFoundComponent 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
