import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services.
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNameError = false;
  userPasswordError = false;

  userNameMessageError = 'El nombre de ususario debería de contener SÓLO letras y números. Mínimo 4.';
  userPasswordMessageError = 'La contraseña tiene que tener una longitud mínima de 8.';

  loginForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ]),
    userPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
  });

  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  public login() {
    if (this.loginForm.invalid) {
      this.userNameError = this.loginForm.controls.userName.invalid;
      this.userPasswordError = this.loginForm.controls.userPassword.invalid;
      return;
    }
    
    this.authService.login(
      this.loginForm.value.userName,
      this.loginForm.value.userPassword,
    )
    .subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;

        console.log(data);
      },
      error: (err) => {
          console.log(err);
          this.isLoginFailed = true;
      },
      complete: ( ) => {
        this.router.navigateByUrl('ticket-turno');
      },
    });
  }

}
