import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";

import { environment } from "../environments/environment";

import { NavComponent } from "./nav/nav.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { Ng5SliderModule } from "ng5-slider";

import { ToysComponent } from './toys/toys.component';
import { ToysDetailComponent } from './toys-detail/toys-detail.component';
import { ToysCreateComponent } from './toys-create/toys-create.component';
import { ToysEditComponent } from './toys-edit/toys-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToysComponent,
    ToysDetailComponent,
    ToysCreateComponent,
    ToysEditComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng5SliderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
