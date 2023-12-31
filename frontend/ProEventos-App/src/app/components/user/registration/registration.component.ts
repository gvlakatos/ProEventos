import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  
  form!: FormGroup;
  
  get f(): any {
    return this.form.controls;
  }
  
  constructor(private fb: FormBuilder){}
  
  ngOnInit() {
    this.validation();
  }
  
  public validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', 
      [Validators.required, 
        Validators.email]
      ],
      usuario: ['', 
        [Validators.required, 
        Validators.minLength(3)]
      ],
    senha: ['', 
      [Validators.required,
      Validators.minLength(6)]
    ],
    confirmeSenha: ['', Validators.required]
  }, formOptions);
}
}
