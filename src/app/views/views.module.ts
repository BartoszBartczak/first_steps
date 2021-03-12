import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { QuizComponent } from './quiz/quiz.component';



@NgModule({
  declarations: [ArticlesComponent, QuizComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
