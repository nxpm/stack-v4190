import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@stack-v4190/web/ui/page'
import { WebUiSidebarPageComponent } from './web-ui-sidebar-page.component'

@NgModule({
  declarations: [WebUiSidebarPageComponent],
  exports: [WebUiSidebarPageComponent],
  imports: [CommonModule, RouterModule, WebUiPageModule],
})
export class WebUiSidebarPageModule {}
