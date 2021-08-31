import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';

const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule
  
]


AnalyserNode
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
