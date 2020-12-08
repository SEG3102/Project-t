import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { timestamp } from 'rxjs/operators';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AdminComponent implements OnInit {
  updateRoleForm: FormGroup;
  users;
  columnsToDisplay = ['name', 'lastName' ];
  roles = ['admin', 'nurse', 'doctor', 'staff'];
  expandedElement;
  constructor(private fb: FormBuilder, private utils: UtilsService) {}

  ngOnInit(): void {
    this.updateRoleForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.utils.users$.subscribe((data) => {
      this.users = data;
    });
  }

  updateRoles(user) {
    let id = user.author;
    let data = {
      ...user,
      updatedAt: this.utils.timestamp,
    }
    this.utils.updateDoc("USERS", id , data);
  }

}
