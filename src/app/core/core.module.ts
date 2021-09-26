import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule} from "@angular/material/select";

import { ButtonComponent } from "./button/button.component";
import { DateComponent } from "./datetime/datetime.component"
import { InputComponent } from "./input/input.component";
import { SelectComponent } from "./select/select.component";

@NgModule({
    declarations:[
        ButtonComponent,
        DateComponent,
        InputComponent,
        SelectComponent
    ],
    imports: [
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,

    ],
    exports:[
        ButtonComponent,
        DateComponent,
        InputComponent,
        SelectComponent,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule
    ]

})
export class CoreModule {}