import { Component } from '@angular/core';
import { TableMapping } from './table-map';

import { TableEntry, TableColumn } from 'src/interfaces/table';

import * as moment from 'moment';

import * as data from 'src/dummy-data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected selectedTable: string = 'General';
  
  public dataSource = [];
  public displayedColumns: string[] = []
  protected tableMapping = new TableMapping
  public schema: TableColumn[] = []

  constructor(){
    this.createDataTable(data.res.response)
  }

  createDataTable(data){
    this.schema = this.tableMapping[this.selectedTable]

    this.displayedColumns = this.getDisplayColumns()

    this.dataSource = data
    console.log(data,this.displayedColumns)
  }

  getDisplayColumns(){
    return this.tableMapping[this.selectedTable]
    .filter(element=> element.value.displayColumn != false)
    .map((element => { return element.key} ))
  }

  getData(column, element){
    if(column.value.datePipeFormat){
      return this.dateTransform(((column.value.data || element[column.value.datakey]) || element[column.key]),  column.value.datePipeFormat )
    }
     
    return (((column.value.data || element[column.value.datakey])) || element[column.key])

  }

  getHeader(value: TableEntry | string){
    if(typeof value === "object"){
      return value.text
    } else {
      return value
    }
  }

  redirectTo (path, data) {
    console.log(path, data)
  }

  dateTransform (value, format) {
    let val = moment(new Date(value)).format(format)
    return val
  }
}