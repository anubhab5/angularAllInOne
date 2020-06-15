import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityCom1Component } from './security-com1/security-com1.component';
import { SecurityCom2Component } from './security-com2/security-com2.component';

@NgModule({
  declarations: [
    SecurityCom1Component,
    SecurityCom2Component
  ],
  imports: [
    CommonModule
  ]
})
export class SecurityModule { }
