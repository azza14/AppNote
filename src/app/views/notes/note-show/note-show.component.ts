import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotesService } from 'src/app/shared/services/notes.service';

@Component({
  selector: 'app-note-show',
  templateUrl: './note-show.component.html',
  styleUrls: ['./note-show.component.css']
})
export class NoteShowComponent implements OnInit {
 @Input() itemId:any ;
 addForm:FormGroup;
  itemDetail :any={};
  @Output() items= new EventEmitter<any>();
  router: any;
  constructor( 
    private fb:FormBuilder,
    private service:NotesService) { }

  ngOnInit(): void {
    this.buildAddForm();
    this.getItemDetail(this.itemId);
  }
  buildAddForm(){
    this.addForm=this.fb.group({
      id:'',
      title:[null,Validators.required],
      description:[null,Validators.required]
    });
  }
  // get item details
  getItemDetail(id){
    this.service.get(id).subscribe(res=>{
      this.itemDetail=res;
      this.addForm.patchValue({
        title:res.title,
      description:res.description
      })
    })
  }
  onSubmit(id){
  if(id === '')
  {
    this.addItem(this.addForm.value);
  }
  else{
  this.updateItem(this.addForm.value,id)
  }
  }
  addItem(data){
    this.service.add(data).subscribe(res=>{
      //this.toaster.success('Item added successfull','Success');
      this. getItems();
  },
  err=>{
     //this.toaster.console.error(err.stutsTest,'Error')

  });
  }
  updateItem(data,id){
    this.service.update(data,id).subscribe(res=>{
        //this.toaster.success('Item updated successfull','Success')
        this. getItems();
    },
    err=>{
       //this.toaster.console.error(err.stutsTest,'Error')
    });
  }
  // get updated item 
  getItems(){
    this.service.getAll().subscribe(res=>{
      this.items.emit(res);
    });
  }
}
