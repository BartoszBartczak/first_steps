import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './views/articles/articles.component';
import { MainComponent } from './views/main/main.component';
import { QuizComponent } from './views/quiz/quiz.component';
import { ShowComponent } from './views/show/show.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'main', component: MainComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
