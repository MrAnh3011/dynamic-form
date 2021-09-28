import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonData, ReturnData } from '../model/field.interface';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<ReturnData>;
  title = 'dynamic-form';
  formData: JsonData[];
  returnData: ReturnData[];
  displayedColumns: string[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<Array<JsonData>>('../assets/my-form.json')
      .subscribe((frmData) => {
        this.formData = frmData;
        this.displayedColumns = this.formData.map(item => item.name)
      });
    this.http
      .get<Array<ReturnData>>('../assets/my-data.json')
      .subscribe((rtnData) => (this.returnData = rtnData));
  }

  submit(value: any) {
    //console.log(value);
    this.returnData.push(value);
    this.table.renderRows();
    console.log(this.returnData);
  }
}
