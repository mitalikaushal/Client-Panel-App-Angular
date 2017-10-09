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
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';
import { SettingsService } from './services/settings.service';
// Creating Routes
const appRoutes: Routes = [
  {path: '', component:DashboardComponent, canActivate:[AuthGuard]},
  {path: 'register', component:RegisterComponent, canActivate:[RegisterGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'client-details', component:ClientDetailsComponent},
  {path: 'add-client', component:AddClientComponent, canActivate:[AuthGuard]},
  {path: 'client/:id' , component:ClientDetailsComponent, canActivate:[AuthGuard]}, //we need particular id of the client whose details we have to see so we will put"client/:id"
  {path: 'edit-client/:id' , component:EditClientComponent, canActivate:[AuthGuard]}
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
    ClientService,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
