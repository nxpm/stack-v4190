import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-button',
  template: `
    <ng-container *ngIf="link">
      <a [routerLink]="link" [class]="classes">
        {{ label }}
      </a>
    </ng-container>
    <ng-container *ngIf="!link">
      <button (click)="handler.emit($event)" [class]="classes" [disabled]="disabled" [type]="type">
        {{ label }}
      </button>
    </ng-container>
  `,
})
export class WebUiButtonComponent {
  @Input() link?: string
  @Input() disabled?: boolean
  @Input() label: string
  @Input() type = 'button'
  @Output() handler = new EventEmitter()

  get classes(): string {
    return 'inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-300 bg-indigo-900 border-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  }
}
