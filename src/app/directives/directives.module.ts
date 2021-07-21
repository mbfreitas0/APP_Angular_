
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { UppercaseDirective } from './uppercase.directive';
import { RedComponent } from './red/red.component';
import { RedDirective } from './red.directive';
import { ForDirective } from './for.directive';



@NgModule({

imports: [

CommonModule

 ],

declarations: [UppercaseDirective, RedComponent, RedDirective, ForDirective],

exports: [UppercaseDirective]

})

export class DirectivesModule { }

