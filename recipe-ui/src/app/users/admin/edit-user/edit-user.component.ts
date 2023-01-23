import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/lib/user.dto';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  userForm: User = {
    id: '',
    email: '',
    password: '',
    role: 'user',
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
}
