
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { UppercaseDirective } from './uppercase.directive';



@NgModule({

imports: [

CommonModule

 ],

declarations: [UppercaseDirective],

exports: [UppercaseDirective]

})

export class DirectivesModule { }

