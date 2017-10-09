import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  client: Client = {
    firstName:'',
    lastName: '',
    email:'',
    phone:'',
    balance:0
  }
  disableBalanceOnEdit:boolean = true;

  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public route: ActivatedRoute,
    public clientService: ClientService,
    public settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; 
    //getting the client or fetching the client and putting into client property here in this ts file
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
      //console.log(this.client);
    });
    this.disableBalanceOnEdit =  this.settingsService.getSetting().disabledBalanceEdit;
  }
  //submit button functionality
  onSubmit({value,valid}:{value:Client,valid:boolean}){
    if(!valid){
      // flash message display
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 4000});
      //navigating the router
      this.router.navigate(['edit-client/'+this.id]);
    }
    else{
      this.clientService.updateClient(this.id,value);
       // flash message display
       this.flashMessagesService.show('Client Updated', {cssClass: 'alert-success', timeout: 4000});
       //navigating the router
       this.router.navigate(['/client/'+this.id]);
    }
  }

}
