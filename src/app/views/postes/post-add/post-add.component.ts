import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  constructor(
    private service:PostsService,
    private router:Router,
    private Fb:FormBuilder) { }
  addForm:FormGroup;
  submitted:boolean;
  ngOnInit(): void {

    this.buildAddForm();
  }
  onsubmit(){
    this.submitted=true;
     if(this.addForm.invalid){
       return;
     }
    this.service.add(this.addForm.value).subscribe(res=>{
        //this.toaster.success('Item added successfull','Success',{timeOut:3000,clodeButton:true,progress:true})
      this.router.navigate(['../admin/posts']);
    },
    err=>{
       //this.toaster.console.error(err.stutsTest,'Error',{timeOut:3000,clodeButton:true,progress:true})

    }
    );
  }
  //to access inputs
  get f(){return this.addForm.controls;}
  buildAddForm(){
    this.addForm=this.Fb.group({
      title:[null,Validators.required],
      description:[null,Validators.required]
    });
  }

}
