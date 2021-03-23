import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@stack-v4190/web/ui/page'
import { WebAboutFeatureComponent } from './web-about-feature.component'

@NgModule({
  declarations: [WebAboutFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebAboutFeatureComponent }]),
    WebUiPageModule,
  ],
})
export class WebAboutFeatureModule {}
