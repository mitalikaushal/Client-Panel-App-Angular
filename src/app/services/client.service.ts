import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;
  
  constructor(public af: AngularFireDatabase) {
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
   }
   //getting all the clients
   getClients(){
     return this.clients;
   }
   //adding new clients
   newClient(client:Client){
     this.clients.push(client);
   }
   //working on clicking detail button getting the client detail
   getClient(id:string) {
     this.client = this.af.object('/clients/'+id) as FirebaseObjectObservable<Client>;
     return this.client;
   }
   //updating the client in the database also
   updateClient(id:string, client:Client){
     return this.clients.update(id,client);
   }
   //deleting specific client
   deleteClient(id:string){
    return this.clients.remove(id);
   }

}
