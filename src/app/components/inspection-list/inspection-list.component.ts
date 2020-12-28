import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Inspection } from '../../services/inspection';
import { InspectionService } from '../../services/inspection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.component.html',
  styleUrls: ['./inspection-list.component.css']
})
export class InspectionListComponent implements OnInit {
  inspections: Observable<Inspection[]>;
  
  constructor(private inspectionService: InspectionService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.inspections = this.inspectionService.getInspectionsList();
  }

  inspectionDetails(id: number){
    this.router.navigate(['inspection-detail', id]);
    //console.log(this.inspectionService.getInspection(id));
  }

}
