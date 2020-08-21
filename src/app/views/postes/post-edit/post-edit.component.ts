import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  itemId;
  itemDetails = {};
  editForm: FormGroup;
  submitted: boolean;
  constructor(
    private service: PostsService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private activeRoute: ActivatedRoute
  ) //,private toaster :ToasterService
  {}
  ngOnInit(): void {
    this.buildEditForm();
    //Get item data id
    this.route.params.subscribe((parms) => {
      this.itemId = parms.id;
      console.log('itemid ', this.itemId);
      this.service.get(parms.id).subscribe((res) => {
        console.log('res', res);
        this.itemDetails = res;
        this.editForm.patchValue({
          title:res.title,
          description:res.description
        });
        console.log('itemDetails', this.itemDetails);
      });
    });
  }
  onsubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.service.update(this.editForm.value, this.itemId).subscribe(
      (res) => {
        console.log('this.editForm.value', this.editForm.value);
        //this.toaster.success('Item updated successfull','Success',{timeOut:3000,clodeButton:true,progress:true})
        this.router.navigate(['../admin/posts']);
      },
      (err) => {
        //this.toaster.console.error(err.stutsTest,'Error',{timeOut:3000,clodeButton:true,progress:true})
      }
    );
  } //to access inputs
  get f() {
    return this.editForm.controls;
  }
  buildEditForm() {
    this.editForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
}
