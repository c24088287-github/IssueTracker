import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http: HttpClient) { }

  postIssue(data:any){
    return this.http.post<any>("http://localhost:3000/issues",data)
    .pipe(map((res:any)=>{
      return res;
    }))
}

getIssue(){
  return this.http.get<any>("http://localhost:3000/issues")
  .pipe(map((res:any)=>{
    return res;
  }))
}

deleteIssue(id:number){
  return this.http.delete<any>("http://localhost:3000/issues"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}

updateIssue(data:any,id:number){
  return this.http.put<any>("http://localhost:3000/issues"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

}
