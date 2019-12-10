import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentImage: any;

  constructor( public photoService: PhotoService, public toastController: ToastController) { }
  ngOnInit() {
    this.photoService.loadSaved();
  }

  async deletePhoto(photo) {
    const toast = await this.toastController.create({
      message: "Picture Deleted",
      duration: 2000
    })
    toast.present()
    this.photoService.removePhoto(photo)
  }

}
