import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  {path: 'principal', component: PrincipalComponent},
  { path: 'exercises', component: ExercisesComponent},
  { path: 'categories', component: CategoryComponent},
  // { path: '**', component: NaoEncontradoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
