import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[];
  totalOwed: number;
  constructor(public clientservice: ClientService) { }

  ngOnInit() {
    this.clientservice.getClients().subscribe(clients => {
      this.clients = clients;
      //console.log(this.clients);
      this.getTotalOwed(); //invoking getTotalOwed function
    })
    }
    getTotalOwed(){
      let total = 0;
      for(var i=0; i< this.clients.length; i++){
        total += parseFloat(this.clients[i].balance);
      }
      this.totalOwed = total;
      console.log(this.totalOwed);
  }

}
