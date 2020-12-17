import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService) { 

  }

  delete(id: String) {
    //alert('delete component' + id);
    this.uploadService.delete(id).subscribe(
      event => {
          this.fileInfos = this.uploadService.getFiles();
      },
      err => {
        this.message = 'Could not delete the file!';
      }
    );

  }

  convert(id: String) {
    this.uploadService.convert(id).subscribe(
      event => {
        this.message = 'Could convert the file!';
          this.fileInfos = this.uploadService.getFiles();
      },
      err => {
        this.message = 'Could not convert the file!';
      }
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.progress = 0;
          this.currentFile = undefined;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
  
    this.selectedFiles = undefined;
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

}
