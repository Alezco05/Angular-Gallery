import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Photo} from '../interfaces/Photo';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'http://localhost:3800/api/photos';

  constructor(private http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(this.URI, fd);
  }
  getPhotos() {
    return this.http.get<Photo[]>(this.URI);
  }
  getPhoto(id: string) {
    return this.http.get<Photo>(this.URI + '/'+ id);
  }
}
