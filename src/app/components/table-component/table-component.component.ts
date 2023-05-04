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
  @Input() filtrosDefault: string[] = []
  columns: string[] = []
  filterPersons: { [key: string]: any }[] = []
  filterPerson: string = ''
  selectFilter: string = 'name'
  newFilter: string = ''
  ngOnChanges(changes: SimpleChanges) {
    if (changes['person']) {
      if (this.filtrosDefault.length > 0) {
        this.filtrosDefault.map((filtro: string) => {
          this.creadorFiltro(filtro)
        })
      }
    }
    if (changes['columnsToDisplay']) {
      if (changes['columnsToDisplay'].currentValue.length > 0) {
        this.columns = changes['columnsToDisplay'].currentValue
      }
    }
  }
  onSelectFilter(key: string) {
    this.selectFilter = key
  }
  creadorFiltro(llave: string = '') {
    const valor = this.person.map((p: Person) => p[llave])
    this.filterPersons.push({
      [llave]: valor
    })
  }
  getFilterKeys() {
    return this.filterPersons
      .filter((item) => Object.keys(item).some((key) => item[key].length > 0))
      .map((item) => Object.keys(item)[0])
  }
  getFilterValues(key: string) {
    const values: string[] = []
    this.filterPersons.map((item) => {
      if (item[key] && item[key].length > 0) {
        values.push(item[key])
      }
    })
    return values.flat()
  }
  getselectFilter() {
    return this.selectFilter
  }
  addFilter() {
    if (
      this.newFilter &&
      !this.filterPersons.some(
        (item) => Object.keys(item)[0] === this.newFilter
      )
    ) {
      this.creadorFiltro(this.newFilter)
      this.newFilter = ''
    }
  }
}
