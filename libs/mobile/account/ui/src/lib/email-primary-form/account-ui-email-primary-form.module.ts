import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MobileUiButtonModule } from '@stack-v4190/mobile/ui/button'
import { MobileUiFormModule } from '@stack-v4190/mobile/ui/form'
import { AccountUiEmailPrimaryFormComponent } from './account-ui-email-primary-form.component'

@NgModule({
  exports: [AccountUiEmailPrimaryFormComponent],
  declarations: [AccountUiEmailPrimaryFormComponent],
  imports: [CommonModule, RouterModule, MobileUiFormModule, MobileUiButtonModule],
})
export class AccountUiEmailPrimaryFormModule {}
