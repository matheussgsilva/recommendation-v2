import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './components/toasts/toasts.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RecommendationItemComponent } from './components/recommendation-item/recommendation-item.component';
import { RecommendationListComponent } from './pages/recommendation-list/recommendation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToastComponent,
    RegisterComponent,
    LayoutComponent,
    RecommendationItemComponent,
    RecommendationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
