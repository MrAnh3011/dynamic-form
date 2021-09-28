import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { JsonData, ReturnData } from "src/model/field.interface";

@Component({
    selector: 'app-edit',
    templateUrl: './edit-data.component.html',
    styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
    fields: JsonData[];
    form: FormGroup = this.fb.group({});
    description: string;
    id: number;

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditDataComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.fields = data.frmData;
        this.id = data.id;
    }

    ngOnInit() {
        this.form = this.createForm(this.fields);
    }

    createForm(fields: JsonData[]) {
        const group = this.fb.group({});
        fields.forEach(element => {
            if (element.type === "button") return;
            const control = this.fb.control(element.value);
            group.addControl(element.name, control);
        });
        group.addControl('id', this.fb.control(this.id));
        return group;
    }

    SaveDialog() {
        this.dialogRef.close(this.form.value);
    }

    CloseDialog() {
        this.dialogRef.close();
    }
}