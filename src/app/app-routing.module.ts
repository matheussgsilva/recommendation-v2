import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RecommendationListComponent } from './pages/recommendation-list/recommendation-list.component';
import { RecommendationDetailsComponent } from './pages/recommendation-details/recommendation-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registre-se', component: RegisterComponent },
  { path: '', component: LayoutComponent, canActivate: [ AuthGuard ], children:[
    { path: '', component: RecommendationListComponent },
    { path: 'recomendacao/:id', component: RecommendationDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
