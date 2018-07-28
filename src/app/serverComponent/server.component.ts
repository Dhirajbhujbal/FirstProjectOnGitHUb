import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    Name = "Angular 5 Nested Cmp";
    title = ':- First Angular 5 Application';
    Server_Id = 123;
    Server_Name = "Extentia Pvt.";
    EnteredValue = "Enter valid text";
    newServerisCreated = "Sever is created";
    isServerCreated = false;

    addServerValue = (event : any) => {
        console.log('Input Event is called',event)
        this.EnteredValue = event.target.value;
    }

    ServerIsCreated = () => {
        this.isServerCreated = true;
        this.newServerisCreated = "New Server is created" + this.EnteredValue;
    }
}