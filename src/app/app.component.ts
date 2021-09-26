import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonData } from '../model/field.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-form';
  formData: JsonData[];

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<Array<JsonData>>('../assets/my-form.json').subscribe(frmData => this.formData = frmData);
  }
  
  submit(value: any){}
}
