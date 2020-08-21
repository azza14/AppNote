import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { BlanckLayoutComponent } from './shared/components/layouts/blanck-layout/blanck-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path:'',
    component:BlanckLayoutComponent,
    children:[
      {
        path:'',
        loadChildren: ()=>import('./views/pages/pages.module').then(m=>m.PagesModule)
      }
    ]
  },
  {
    path:'auth',
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        loadChildren: ()=>import('./views/auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {
        path:'posts',
        loadChildren : ()=> import ('./views/postes/postes.module').then(m =>m.PostesModule)
      }
    ]
  },
  {
    path:'user',
    component:UserLayoutComponent,
    children:
    [
      {
        path:'notes',//    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
        loadChildren: ()=> import ('./views/notes/notes.module').then(m=>m.NotesModule)
      },
      {
        path:'posts',
        loadChildren : ()=> import ('./views/postes/postes.module').then(m =>m.PostesModule)
      }
    ]
  },
  {
    path:'auth',
    component:AuthLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
