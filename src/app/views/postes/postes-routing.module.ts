import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostesListComponent } from './postes-list/postes-list.component';
import { PostShowComponent } from './post-show/post-show.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostAddComponent } from './post-add/post-add.component';

const routes: Routes = [
  {
    path:'',
    component:PostesListComponent
  },
  {
    path:'show/:id',
    component:PostShowComponent
  },
  {
    path:'edit/:id',
    component:PostEditComponent
  },
  {
    path:'add',
    component:PostAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostesRoutingModule { }
