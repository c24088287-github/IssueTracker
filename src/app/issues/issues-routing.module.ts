import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  {
    path: '', component: IssuesComponent, children: [
      { path: '', redirectTo: 'viewissues', pathMatch: 'full' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesRoutingModule { }
