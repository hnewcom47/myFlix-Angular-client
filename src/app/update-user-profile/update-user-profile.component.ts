import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditUserService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.scss']
})

export class UpdateProfileComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public snackBar: MatSnackBar,
    public fetchApiData: EditUserService,
    public dialogRef: MatDialogRef<UpdateProfileComponent>
  ) { }

  ngOnInit(): void {
  }

  /**
 * Sends updated user information to the database and refreshes the page so the user can view updated information automatically
 */
  editUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((response) => {
      this.dialogRef.close();
      localStorage.setItem('user', response.Username);
      this.snackBar.open('Profile updated successfully!', 'OK', {
        duration: 2000,
      });
    }, (response) => {
      console.log(response);
      this.snackBar.open(response, 'OK', {
        duration: 2000,
      });
    });
    setTimeout(function () {
      window.location.reload();
    }, 1250);
  }
}