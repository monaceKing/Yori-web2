import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-etablissement-popup',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './etablissement-popup.component.html',
  styleUrl: './etablissement-popup.component.css'
})
export class EtablissementPopupComponent {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EtablissementPopupComponent>,
    private dialog: MatDialog
  ) {}

  approve() {
    this.dialogRef.close({ status: 'approved' });
}

  decline() {
      this.dialogRef.close({ status: 'declined' });
  }

  // constructor(private dialog: MatDialog) {}

  openPhotoGallery(remainingPhotos: string[]) {
    this.dialog.open(PhotoGalleryComponent, {
      data: { photos: remainingPhotos },
      width: '80%',
      height: 'auto',
    });
  }


}
