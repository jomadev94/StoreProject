import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  StorageReference,
  deleteObject,
} from '@angular/fire/storage';
import { uploadBytes, getDownloadURL } from '@firebase/storage';
import { FileUpload } from '@models/file';
import { DataService } from '@services/data/data.service';
import { environment } from 'environments/environment';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  hasError: boolean = false;

  constructor(private storage: Storage, private dataService: DataService) {}

  async upload(productId: string, file: File) {
    this.hasError = false;
    const imgRef = this.path(productId, file.name);
    try {
      await uploadBytes(imgRef, file);
      return await getDownloadURL(imgRef);
    } catch (error) {
      this.hasError = true;
      return;
    }
  }

  async delete(folder: string, nameFile: string) {
    try {
      const storageRef = this.path(folder, nameFile);
      await deleteObject(storageRef);
      return true;
    } catch (error) {
      return false;
    }
  }

  private path(folder: string, nameFile: string): StorageReference {
    return ref(this.storage, `${folder}/${nameFile}`);
  }

  async saveFiles(productId: string, files: File[]) {
    try {
      const result: FileUpload[] = [];
      for (const file of files) {
        const path = await this.upload(productId, file);
        result.push({ fileId: uuid(), path: path!, productId: productId });
      }
      return result;
    } catch (error) {
      return null;
    }
  }

  deleteFileFromDB(id: string) {
    return this.dataService.delete(environment.apiUrl + `File/${id}`);
  }

  addFilesToDB(files: FileUpload[]) {
    return this.dataService.post(environment.apiUrl + `File`, files);
  }
}
