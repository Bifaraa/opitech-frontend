import { Component, OnInit, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Person } from './models/person.model'
import { Columns } from './models/columns.model'
import { filter } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba-front-opi-tech'
  http = inject(HttpClient)
  person: Person[] = []
  columns: string[] = ['id', 'name', 'username', 'email', 'phone']
  isCheckedColumns: Columns = {
    id: true,
    name: true,
    username: true,
    email: true,
    phone: true
  }
  selectedColumns: string[] = ['id', 'name', 'username', 'email', 'phone']

  onApplyColumns() {
    const filteredColumns = Object.entries(this.isCheckedColumns)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)
    if (filteredColumns) {
      this.selectedColumns = filteredColumns
    }
    console.log(this.selectedColumns)
  }

  onResetColumns() {
    this.selectedColumns = this.columns
    Object.keys(this.isCheckedColumns).forEach((key) => {
      this.isCheckedColumns[key] = true
    })
  }

  ngOnInit() {
    /*    this.http
      .get<Person[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.person = data
        console.log(this.person)
      }) */
    this.http
      .get<Person[]>('../assets/moucks-person.json')
      .subscribe((data) => {
        this.person = data
        console.log(this.person)
      })
  }
}
