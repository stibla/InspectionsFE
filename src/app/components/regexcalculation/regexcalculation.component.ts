import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { Regcalculation } from 'src/app/services/regexcalculation';
import { RegexcalculationService } from 'src/app/services/regexcalculation.service';

@Component({
  selector: 'app-regexcalculation',
  templateUrl: './regexcalculation.component.html',
  styleUrls: ['./regexcalculation.component.css']
})
export class RegexcalculationComponent implements OnInit {

  regExCalculations: Regcalculation[];
  message = '';

  constructor(private regexcalculationService: RegexcalculationService/*,
    private router: Router*/) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.regexcalculationService.getRegExCalculationList().subscribe(data => this.regExCalculations = data);
  }

  regExCalculationSave(regExCalculation: any) {
    this.message = 'Ukladam ...';
    this.regexcalculationService.updateRegExCalculation(regExCalculation).subscribe(data => {
      this.message = 'Ulozene';
      this.reloadData();
      setTimeout(() => { this.message = ''; }, 4000);
    }, error => {
      console.log(error);
      this.message = 'Chyba';
    });
  }

  deleteRegEx(nRegexcalculationId: any) {
    this.message = 'Mazem ...';
    this.regexcalculationService.deleteRegExCalculation(nRegexcalculationId).subscribe(
      event => {
        this.message = 'Zmazane';
        this.reloadData();
        setTimeout(() => { this.message = ''; }, 4000);
      },
      err => {
        this.message = 'Could not delete!';
        this.reloadData();
        setTimeout(() => { this.message = ''; }, 4000);
      }
    );
  }

  regExCalculationNew() {
    this.regExCalculations.push({
      regExCalculationId: null,
      column: null,
      priority: null,
      regex: null,
      type: null,
      mandatory: false
    });
    console.log(this.regExCalculations);
  }

  closeMessage() {
    this.message = '';
  }

}
