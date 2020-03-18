import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeparatorComponent } from './components/separator/separator.component';
import { TextBlockWithDateComponent } from './components/text-block-with-date/text-block-with-date.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SeparatorComponent,
    TextBlockComponent,
    TextBlockWithDateComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [
    SeparatorComponent,
    TextBlockComponent,
    TextBlockWithDateComponent,
  ],
})
export class SharedModule {
}
