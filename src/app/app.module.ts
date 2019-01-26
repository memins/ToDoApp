import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WallComponent } from './components/wall/wall.component';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './models/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WallComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
