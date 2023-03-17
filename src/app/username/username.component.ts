import { Component } from "@angular/core";

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styleUrls: ['./username.component.css']
})

export class UsernameComponent {
    username: '';
    usernameExists = false;
    
    
    constructor(){
        
    }
    onUpdateUsername(){
        if(this.username != ''){
            this.usernameExists = true;
        }
    }

    onResetUsername(){
        this.username = '';
        this.usernameExists = false;
    }
}