import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/lib/user.dto';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  userForm: User = {
    id: '',
    email: '',
    password: '',
    role: 'user',
  };

  constructor(private userService: UserService, private router: Router) {}

  public createUser() {
    this.userService.save(this.userForm).subscribe(() => {
      this.router.navigateByUrl('/users');
    });
  }
}
