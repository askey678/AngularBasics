import { Component } from "@angular/core";

@Component({
    selector: 'app-notification',
    template: `<div class="alert alert-success" [hidden]="displayNotification"><p>This website uses cookies for better user experience</p>
  
        <div class="close">
        <button class="btn btn-warning" (click)="closeNotification()">X</button>
        </div>
</div>`,

    // styleUrls:[] instead of using styleUrls we can also have option to use inline styling here

    styles: ["div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align:center;}", "button{align:end}", ".close{float:right; margin-top: -50px;}"]
})


export class NotificationComponent {

    displayNotification: boolean = false;

    closeNotification() {
        this.displayNotification = true;

    }

}