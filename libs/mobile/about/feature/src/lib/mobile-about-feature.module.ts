import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MobileUiPageModule } from '@stack-v4190/mobile/ui/page'
import { MobileAboutFeatureComponent } from './mobile-about-feature.component'

@NgModule({
  declarations: [MobileAboutFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: MobileAboutFeatureComponent }]),
    MobileUiPageModule,
  ],
})
export class MobileAboutFeatureModule {}
