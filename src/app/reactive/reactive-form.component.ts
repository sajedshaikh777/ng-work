import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    orderForm: FormGroup;
    items: FormArray;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            customerName: '',
            email: '',
            items: this.formBuilder.array([this.createItem()])
        });
        console.warn(this.orderForm);
    }

    createItem(): FormGroup {
        return this.formBuilder.group({
            name: '',
            description: '',
            price: ''
        });
    }

    addItem(): void {
        this.items = this.orderForm.get('items') as FormArray;
        this.items.push(this.createItem());
    }

    removeItem(i: number) {
        this.items = this.orderForm.get('items') as FormArray;
        this.items.removeAt(i);
    }

}
