import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inspection } from '../../services/inspection';
import { InspectionService } from '../../services/inspection.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inspection-detail',
  templateUrl: './inspection-detail.component.html',
  styleUrls: ['./inspection-detail.component.css']
})
export class InspectionDetailComponent implements OnInit {

  id: number;
  inspection: Inspection;
  message = '';
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  fileInfos: Observable<any>;

  constructor(private route: ActivatedRoute, private inspectionService: InspectionService) { }

  ngOnInit(): void {
    this.inspection = new Inspection();
    if (this.route.snapshot.params['id'] == 0) {
      //this.id = this.route.snapshot.params['id'];
      //this.initFileInspectionForm();
    } else {
      this.id = this.route.snapshot.params['id'];
      this.initInspectionForm();
      this.initFileInspectionForm();
    }
  }

  onSubmit() {
    this.message = 'Ukladam ...';
    this.inspectionService.updateInspection(this.inspection).subscribe(data => {  
      this.id = data['nInspectionId'];    

      //this.router.navigate(['inspection-detail', id]);

      this.initInspectionForm();
      this.initFileInspectionForm();
      console.log(data['nInspectionId']);
      this.message = 'Ulozene';
      setTimeout(() => {
        this.message = '';
      }, 4000);
    }, error => {
      console.log(error);
      this.message = 'Chyba';
    });
  }

  closeMessage() {
    this.message = '';
  }

  selectFile(event) {
    //this.message = 'Ukladam ...';
    this.selectedFiles = event.target.files;
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.inspectionService.upload(this.currentFile, this.id).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.progress = 0;
          this.currentFile = undefined;
          this.initFileInspectionForm();
        }
      },
      error => {
        console.log(error);
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    setTimeout(() => {
      this.message = '';
    }, 4000);
    this.selectedFiles = undefined;
  }

  deleteFile(idFile: String) {
    //alert('delete component' + id);
    this.inspectionService.deleteFiles(idFile).subscribe(
      event => {
        this.initFileInspectionForm();
      },
      err => {
        this.message = 'Could not delete the file!';
      }
    );
  }

  initInspectionForm() {
    this.inspectionService.getInspection(this.id).subscribe(data => {
      this.inspection = data;
    }, error => console.log(error));
  }

  initFileInspectionForm() {
    this.fileInfos = this.inspectionService.getFiles(this.id);
  }

  parseCalculation(idInspection: Number , idFile: String) {
    this.message = 'Spracovavam...';
    this.inspectionService.parseCalculation(idInspection, idFile).subscribe(
      x => {
        this.message = 'Spracovavam.....';
      },
      error => {
        console.log(error);
        this.message = 'Could not parse the file!';
      },
      () => {
        this.message = 'Spracovane';
        this.initInspectionForm();
      });
    setTimeout(() => {
      this.message = '';
    }, 4000);

  }
}
