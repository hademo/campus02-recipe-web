import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { getErrors } from 'src/lib/get-errors';
import { User } from 'src/lib/user.dto';
import { LinksFormComponent } from '../links-form/links-form.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  @ViewChild(LinksFormComponent)
  linksFormComponent?: LinksFormComponent;

  userForm: User = {
    id: '',
    email: '',
    password: '',
    role: 'user',
    links: [],
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const userId = param.get('id');
      if (userId) {
        this.getById(userId);
      }
    });
  }

  public getById(id: string) {
    this.userService.findById(id).subscribe((data) => {
      this.userForm = data;
    });
  }

  public updateUser() {
    this.userService.update(this.userForm).subscribe(() => {
      this.router.navigateByUrl('/users');
    });
  }

  public getErrors(control: NgModel) {
    return getErrors(control);
  }
}
