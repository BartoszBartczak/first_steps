import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { QuizComponent } from './quiz/quiz.component';
import { MainComponent } from './main/main.component';
import { ShowComponent } from './show/show.component';



@NgModule({
  declarations: [ArticlesComponent, QuizComponent, MainComponent, ShowComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
