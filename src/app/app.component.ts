import { Component } from '@angular/core';
import { TableEntry, TableMapping } from './table-map';

import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected selectedTable: string = 'General';
  
  protected dataSource = [];
  protected displayedColumns: string[] = []
  protected tableMapping = new TableMapping
  protected schema: {key: string, value: TableEntry}[] = []

  constructor(){
    this.createDataTable([])
  }

  createDataTable(data){
    console.log(this.tableMapping.General)
    this.schema = this.tableMapping[this.selectedTable]

    this.displayedColumns = this.getDisplayColumns()

    this.dataSource = data
    console.log(data,this.displayedColumns)
  }

  getDisplayColumns(){
    return this.tableMapping[this.selectedTable].map((element => { return element.key} ))
  }

  redirectTo(path, data){
    console.log(path, data)
  }

  dateTransform(value, format){
    let val = moment(new Date(value)).format(format)
    return val
  }
}