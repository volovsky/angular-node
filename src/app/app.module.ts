import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './services/http-error-handler.service';

import { MessagesService } from './services/messages.service';
import { MessageComponent } from './message/message.component';

import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
    declarations: [
      AppComponent,
      MessageComponent,
      PostsComponent,
      TodosComponent,
      PageNotFoundComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
    ],
    providers: [
      HttpErrorHandler,
      MessagesService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
