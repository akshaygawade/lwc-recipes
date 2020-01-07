import { LightningElement, track } from 'lwc';

export default class HelloBinding extends LightningElement {
    @track greeting = 'Akshay';
    @track abc = 'abc';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}
