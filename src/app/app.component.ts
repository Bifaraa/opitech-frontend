import { Component, OnInit, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Person } from './models/person.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba-front-opi-tech'
  http = inject(HttpClient)
  person: Person[] = []

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
