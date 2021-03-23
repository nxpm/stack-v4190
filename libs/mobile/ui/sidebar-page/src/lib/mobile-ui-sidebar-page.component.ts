import { Component, Input } from '@angular/core'

export interface MobileUiSidebarPageLink {
  label: string
  icon: string
  path: string
}

@Component({
  selector: 'ui-sidebar-page',
  template: `
    <ui-page [pageTitle]="headerTitle">
      <div>
        <aside>
          <nav>
            <ng-container *ngFor="let link of links">
              <ion-button [routerLink]="link.path" fill="outline" slot="end">{{ link.label }}</ion-button>
            </ng-container>
          </nav>
        </aside>

        <div>
          <ng-content></ng-content>
        </div>
      </div>
    </ui-page>
  `,
})
export class MobileUiSidebarPageComponent {
  @Input() headerTitle: string
  @Input() links: MobileUiSidebarPageLink[] = []
}
