import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssuesModel } from 'src/app/model/issues.model';
import { IssuesService } from 'src/app/shared/issues.service';
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  
  public formValue !:FormGroup;
  issueData !: any;
  issuesModelObj : IssuesModel = new IssuesModel();
  showAdd! : boolean;
  showUpdate! : boolean;
  constructor(private formbuilder : FormBuilder,private http:HttpClient, private api : IssuesService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id:[''],
      priority:[''],
      status:[''],
      description:[''] 
    })

    this.getIssues();
  }

  clickAddIssue(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

   postIssueDetails(){
    this.issuesModelObj.id = this.formValue.value.id;
    this.issuesModelObj.priority = this.formValue.value.priority;
    this.issuesModelObj.status = this.formValue.value.status;
    this.issuesModelObj.description = this.formValue.value.description;
    
    this.api.postIssue(this.issuesModelObj)
    .subscribe(res =>{
      console.log(res);
      alert("Issues added successfully")   
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getIssues();   
    },
    err =>{
      alert("Issue not added");
      console.log(err);
    })  }


    getIssues(){
      this.api.getIssue()
      .subscribe(res =>{
        
        this.issueData = res;
        alert(this.issueData);
      })
    }

    deleteIssues(row : any){
      this.api.deleteIssue(row.id)
      .subscribe(res=>{
        alert("Issue Deleted");
        this.getIssues();
      })
    }

    onEdit(row: any){
      this.showAdd = false;
    this.showUpdate = true;
      this.issuesModelObj.id = row.id;
      this.formValue.controls['priority'].setValue(row.priority);
      this.formValue.controls['status'].setValue(row.status);
      this.formValue.controls['description'].setValue(row.description);
    }

    updateIssueDetails(){
      this.issuesModelObj.id = this.formValue.value.id;
    this.issuesModelObj.priority = this.formValue.value.priority;
    this.issuesModelObj.status = this.formValue.value.status;
    this.issuesModelObj.description = this.formValue.value.description;

    this.api.updateIssue(this.issuesModelObj,this.issuesModelObj.id)
    .subscribe(res => {
      alert("Updated Issues");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getIssues();   
    })

    }
}
