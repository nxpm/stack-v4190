import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MobileUiButtonModule } from '@stack-v4190/mobile/ui/button'
import { MobileUiPageHeaderComponent } from './mobile-ui-page-header.component'

@NgModule({
  declarations: [MobileUiPageHeaderComponent],
  imports: [CommonModule, RouterModule, MobileUiButtonModule],
  exports: [MobileUiPageHeaderComponent],
})
export class MobileUiPageHeaderModule {}
