import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostesRoutingModule } from './postes-routing.module';
import { PostesListComponent } from './postes-list/postes-list.component';
import { PostShowComponent } from './post-show/post-show.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostAddComponent } from './post-add/post-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostesListComponent, 
    PostShowComponent, 
    PostEditComponent, 
    PostAddComponent],
  imports: [
    CommonModule,
    PostesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostesModule { }
