import { Component, OnInit } from '@angular/core';
import {PostsService} from './../../../shared/services/posts.service'
import {item} from '../../../shared/models/item'
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-postes-list',
  templateUrl: './postes-list.component.html',
  styleUrls: ['./postes-list.component.css']
})
export class PostesListComponent implements OnInit {
  itemsList :any=[];
  constructor(private service :PostsService,
    private modalService:NgbModal) { }

  ngOnInit(): void {
    debugger;
    this.getAll();
  }
  getAll(){
   return this.service.getPosts().subscribe(data => {
      console.log(data);
      this.itemsList = data
    } );
  }
  deleteItem(model,id){
    this.modalService.open(model).result.then(result=>{
      //console.log(result);
      //console.log(id);
      return this.service.delete(id).subscribe(res=>{
       // console.log(res);
        //this.toaster.success('Item deleted successfull','Success',{timeOut:3000,clodeButton:true,progress:true})
      //this.getAll();
      },
      err=>{
       // console.log(err);
       //this.toaster.console.error(err.stutsTest,'Error',{timeOut:3000,clodeButton:true,progress:true})

      }
      );
    },
     reason=>{
       console.log(reason);
     }
    )
  
  }




}
