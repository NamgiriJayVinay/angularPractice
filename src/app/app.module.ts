import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TwowaydbComponent } from './twowaydb/twowaydb.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentService } from './student.service';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    StudentComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    TwowaydbComponent,
    StudentdetailsComponent,
    StudentlistComponent,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
