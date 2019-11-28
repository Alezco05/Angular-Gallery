import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Photo } from '../../interfaces/Photo';
@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  constructor(private photoService: PhotoService, private router: Router, private activatedRoute: ActivatedRoute) { }
  id: string;
  photo: Photo;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.getPhoto(params['id'])
      )
  }
  getPhoto(id: string){
    this.photoService.getPhoto(id).subscribe(
      resp => this.photo = resp,
      err => console.log(err)
    );
  }
}
