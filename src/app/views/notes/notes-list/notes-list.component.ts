import { Component, OnInit } from '@angular/core';
import {NotesService} from './../../../shared/services/notes.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  itemsList :any=[];
  itemId :any;
  constructor(
    private service :NotesService,
    private modalService:NgbModal) { }

  ngOnInit(): void {
    debugger;
    this.getAll();
  }
  getAll(){
   return this.service.getAll().subscribe(data => {
      console.log(data);
      this.itemsList = data
    } );
  }
  //delete item
  deleteItem(model,id){
    this.modalService.open(model).result.then(result=>{
      //console.log(result);
      //console.log(id);
      return this.service.delete(id).subscribe(res=>{
       // console.log(res);
        //this.toaster.success('Item deleted successfull','Success',{timeOut:3000,clodeButton:true,progress:true})
      this.getAll();
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
  //Add or Edit item
  open(content ,id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    .result.then((result) => {

    }, (reason) => {
      console.log(reason);
    });
    this.itemId=id;
    console.log(id);

  }
  getUpdatedItem(updateditems){
  this.itemsList=updateditems;
  this.modalService.dismissAll();
  }




}