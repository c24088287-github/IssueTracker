import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues/issues.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IssuesRoutingModule } from './issues-routing.module';



@NgModule({
  declarations: [
    IssuesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IssuesRoutingModule
  ]
})
export class IssuesModule { }
