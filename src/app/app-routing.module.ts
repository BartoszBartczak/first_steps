import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './views/articles/articles.component';
import { QuizComponent } from './views/quiz/quiz.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
