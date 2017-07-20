import { MdlModule } from '@angular-mdl/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MdlModule
  ],
  exports: [
    MdlModule
  ],
  declarations: []
})
export class SharedModule { }
