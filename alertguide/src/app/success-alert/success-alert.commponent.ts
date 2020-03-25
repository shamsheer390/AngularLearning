import { Component} from '@angular/core';

@Component({
    selector:'app-success-alert',
    template:`
    <p>success-alert works!</p>
    `,
    styles:[
        `p{
            padding:20px;
            background-color:yellow;
            border:1px solid blue;
        }
        `
    ]
})
export class SuccessAlert{

}