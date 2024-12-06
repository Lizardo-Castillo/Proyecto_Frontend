import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      emailId: [''],
    });
  }

  ngOnInit() {}

  onSubmit(): any {
    this.crudService.AddUser(this.userForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/users-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
