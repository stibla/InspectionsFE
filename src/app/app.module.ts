import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InspectionListComponent } from './components/inspection-list/inspection-list.component';
import { InspectionDetailComponent } from './components/inspection-detail/inspection-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    //UploadFilesComponent,
    NavbarComponent,
    DashboardComponent,
    InspectionListComponent,
    InspectionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
