import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { JsonData } from "src/model/field.interface";

@Component({
    selector: 'app-show',
    templateUrl: './show-data.component.html',
    styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnChanges {
    @Input() fields: JsonData[] = [];
    @Output() submit: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    get value() {
        return this.form.value;
    }
    constructor(private fb: FormBuilder) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.fields.firstChange) {
            this.form = this.createForm(this.fields);
        }
    }

    createForm(fields: JsonData[]) {
        const group = this.fb.group({});
        fields.forEach(element => {
            if (element.type === "button") return;
            const control = this.fb.control(element.value);
            group.addControl(element.name, control);
        });
        return group;
    }

    onSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.form.valid) {
            this.submit.emit(this.form.value);
        }
    }
    // bindValidations(validations: any) {
    //     if (validations.length > 0) {
    //       const validList = [];
    //       validations.forEach(valid => {
    //         validList.push(valid.validator);
    //       });
    //       return Validators.compose(validList);
    //     }
    //     return null;
    //   }
}
