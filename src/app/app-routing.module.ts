import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RecommendationListComponent } from './pages/recommendation-list/recommendation-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registre-se', component: RegisterComponent },
  { path: '', component: LayoutComponent, children:[
    { path: '', component: RecommendationListComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
