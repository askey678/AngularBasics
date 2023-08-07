import {Component} from '@angular/core';

@Component({
    selector:'app-search',
    templateUrl: './app.search.html',
    styleUrls: ['./app.search.css']
})
export class SearchComponent{

    insertedValue: string = '';


    // the below is for eventBinding not necessary for two way binding using ngModule:
    // onEveryInput(EventData: Event){
    //     console.log(<HTMLInputElement>EventData.target);
    //     this.insertedValue=(<HTMLInputElement>EventData.target).value;
    // }

}