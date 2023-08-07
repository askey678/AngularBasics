import { Component } from "@angular/core";

@Component({
    selector: 'app-advertisement',
    template: `<div class="alert alert-success" [ngClass]="{fadeOut:displayNotification}">
    <p>Advertisement</p><p>This is a paid promotion</p>
    <div class="close"><button class="btn" (click)="closenotification()">X</button></div>
</div>`,
    styles: ["div{margin: 5px 5px; padding:5px 0px; text-align:center;}",
        "p{font-size:14px;}", ".close{float: right; margin-top: -85px;}",
        ".fadeOut { visibility: hidden; opacity:0; transition: visibility 0s 2s, opacity 2s linear;}"]
})

export class AdvertisementComponent {

    displayNotification: boolean = false;

    closenotification() {
        this.displayNotification = true;
    }

}


