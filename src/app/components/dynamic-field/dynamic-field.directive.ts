import {
    ComponentFactoryResolver,
    Directive,
    Input,
    OnInit,
    ViewContainerRef
  } from "@angular/core";
  import { FormGroup } from "@angular/forms";
  import { JsonData } from "../../../model/field.interface";
  import { InputComponent } from "../../core/input/input.component";
  import { ButtonComponent } from "../../core/button/button.component";
  import { SelectComponent } from "../../core/select/select.component";
  import { DateComponent } from "../../core/datetime/datetime.component";

  const componentMapper = {
    input: InputComponent,
    button: ButtonComponent,
    select: SelectComponent,
    date: DateComponent
  };
  @Directive({
    selector: "[dynamicField]"
  })
  export class DynamicFieldDirective implements OnInit {
    @Input() field: JsonData;
    @Input() group: FormGroup;
    componentRef: any;
    constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef
    ) {}
    ngOnInit() {
      const factory = this.resolver.resolveComponentFactory(
        (componentMapper as any)[this.field.type]
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
    }
  }
  