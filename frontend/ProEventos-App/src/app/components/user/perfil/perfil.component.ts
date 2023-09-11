import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  
  form!: FormGroup;
  
  get f(): any {
    return this.form.controls;
  }
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.validation();
  }
  
  public validation(): void {
    
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };
    
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      funcao: ['', Validators.required],
      descricao: ['', ],
      senha: ['', Validators.minLength(6)],
      confirmeSenha: ['', ]
    }, formOptions);
  }
}
