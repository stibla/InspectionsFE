import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InspectionListComponent } from './components/inspection-list/inspection-list.component'
import { InspectionDetailComponent } from './components/inspection-detail/inspection-detail.component';
import { RegexcalculationComponent } from './components/regexcalculation/regexcalculation.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent } ,
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' } ,
 // { path: 'fileupload', component: UploadFilesComponent } ,
  { path: 'inspection-list', component: InspectionListComponent } ,
  { path: 'inspection-detail/:id', component: InspectionDetailComponent },
  { path: 'regexcalculation', component: RegexcalculationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
