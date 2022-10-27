import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  public form: FormGroup = new FormGroup({
    email: new FormControl('joao.scarpa@designa.com', [Validators.required]),
    password: new FormControl('123456', [Validators.required])
  })

  public login(): void {
    if(this.form.valid) {
      this.apiService.post<User>('sessions', this.form.value)
      .then(data => {this.authService.login(data)})
      .catch(response => console.log(response.error.error))
    } else {
      console.log("Preencha o formulário antes de continuar")
    }
  }

}
