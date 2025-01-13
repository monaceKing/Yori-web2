import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-etablissement-popup',
  standalone: true,
  imports: [],
  templateUrl: './etablissement-popup.component.html',
  styleUrl: './etablissement-popup.component.css'
})
export class EtablissementPopupComponent {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EtablissementPopupComponent>
  ) {}

  approve() {
    this.dialogRef.close({ status: 'approved' });
}

  decline() {
      this.dialogRef.close({ status: 'declined' });
  }

  // waiting() {
  //     this.dialogRef.close({ status: 'waiting' });
  // }


}
