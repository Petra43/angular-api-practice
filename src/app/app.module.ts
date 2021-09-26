import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { UserMessagesComponent } from './components/organisms/user-messages/user-messages.component';
import { HeaderBarComponent } from './components/organisms/header-bar/header-bar.component';
import { BoardComponent } from './components/pages/board/board.component';
import { BoardSectionComponent } from './components/molecules/board-section/board-section.component';
import { EditableFieldBaseComponent } from './components/atoms/editable-fields/editable-field-base/editable-field-base.component';
import { EditableFieldH4Component } from './components/atoms/editable-fields/editable-field-h4/editable-field-h4.component';
import { EditableFieldH3Component } from './components/atoms/editable-fields/editable-field-h3/editable-field-h3.component';
import { TicketCardComponent } from './components/molecules/ticket-card/ticket-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserMessagesComponent,
    HeaderBarComponent,
    BoardComponent,
    BoardSectionComponent,
    EditableFieldBaseComponent,
    EditableFieldH4Component,
    EditableFieldH3Component,
    TicketCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
