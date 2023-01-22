import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { getErrors } from 'src/lib/get-errors';
import { User } from 'src/lib/user.dto';
import { LinksFormComponent } from '../links-form/links-form.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  @ViewChild(LinksFormComponent)
  linksFormComponent?: LinksFormComponent;

  userForm: User = {
    id: '',
    email: '',
    password: '',
    role: 'user',
    links: [],
  };

  constructor(private userService: UserService, private router: Router) {}

  public createUser() {
    this.userService.save(this.userForm).subscribe(() => {
      this.router.navigateByUrl('/users');
    });
  }

  public getErrors(control: NgModel) {
    return getErrors(control);
  }
}
