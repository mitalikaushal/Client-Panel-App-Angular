import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

// AngularFire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Components imports
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Service imports
import { ClientService } from './services/client.service';

// Creating Routes
const appRoutes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'client-details', component:ClientDetailsComponent},
  {path: 'add-client', component:AddClientComponent},
  {path: 'client/:id' , component:ClientDetailsComponent} //we need particular id of the client whose details we have to see so we will put"client/:id"
]

// Configuring the firebase authuntication
export const firebaseConfig = {
  apiKey: "AIzaSyDl2utekEtmkHCjI-jbid6CkKwOmEUlg5o",
  authDomain: "clientpanel-7f109.firebaseapp.com",
  databaseURL: "https://clientpanel-7f109.firebaseio.com",
  storageBucket: "clientpanel-7f109.appspot.com",
  messagingSenderId: "852618252054"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    ClientDetailsComponent,
    ClientsComponent,
    AddClientComponent,
    NavbarComponent,
    SidebarComponent,
    EditClientComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
