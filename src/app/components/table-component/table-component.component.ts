import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Person } from 'src/app/models/person.model'

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnChanges {
  @Input() person!: Person[]
  @Input() columnsToDisplay: string[] = []
  columns: string[] = []
  filterPersons: string[] = []
  filterPerson: string = ''
  ngOnChanges(changes: SimpleChanges) {
    if (changes['person']) {
      this.filterPersons = changes['person'].currentValue.map(
        (p: Person) => p.name
      )
    }
    if (changes['columnsToDisplay']) {
      if (changes['columnsToDisplay'].currentValue.length > 0) {
        this.columns = changes['columnsToDisplay'].currentValue
      }
    }
  }
}
