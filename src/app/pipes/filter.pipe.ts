import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultadoPerson = []
    for (const person of value) {
      if (person.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoPerson.push(person)
      }
    }
    return resultadoPerson
  }
}
