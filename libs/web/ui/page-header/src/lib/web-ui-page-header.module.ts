import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@stack-v4190/web/ui/button'
import { WebUiPageHeaderComponent } from './web-ui-page-header.component'

@NgModule({
  declarations: [WebUiPageHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiButtonModule],
  exports: [WebUiPageHeaderComponent],
})
export class WebUiPageHeaderModule {}
