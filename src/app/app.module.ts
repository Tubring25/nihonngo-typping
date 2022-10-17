import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { InputComponent } from './home/input/input.component';
import {MatInputModule} from "@angular/material/input";
import { WordComponent } from './home/word/word.component';
import { SpecButtonComponent } from './spec-button/spec-button.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import { LevelDialogComponent } from './level-dialog/level-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    InputComponent,
    WordComponent,
    SpecButtonComponent,
    LevelDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
