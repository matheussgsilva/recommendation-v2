import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppToastService } from 'src/app/services/toast.service'

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private toastService: AppToastService
  ) { }

  public form: FormGroup = new FormGroup({
    nome: new FormControl('João', [Validators.required]),
    email: new FormControl('joao.scarpa@designa.com', [Validators.required]),
    password: new FormControl('123456', [Validators.required])
  })

  public register(): void {
    if(this.form.valid) {
      this.apiService.post<User>('sessions', this.form.value)
      .then(data => {this.authService.login(data)})
      .catch(response => this.toastService.show('Atenção', response.error.error))
    } else {
      this.toastService.show('Atenção', 'Preencha o formulário antes de continuar')
    }
  }

}
