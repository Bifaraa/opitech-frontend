import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TableComponentComponent } from './components/table-component/table-component.component'
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, TableComponentComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
