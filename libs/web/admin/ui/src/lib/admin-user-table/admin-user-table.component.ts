import { Component, Input } from '@angular/core'
import { User } from '@stack-v4190/web/core/data-access'

@Component({
  selector: 'user-table',
  template: `
    <div class="shadow overflow-hidden sm:rounded-lg">
      <table class="min-w-full divide-y dark:divide-gray-600">
        <thead class="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
            >
              Role
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-50 dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
          <ng-container *ngFor="let user of users">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" [attr.src]="user.avatarUrl" alt="" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900 dark:text-gray-200">
                      <a [routerLink]="user.id">
                        {{ user.name }}
                      </a>
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ user.email }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ user.role }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a [routerLink]="[user.id, 'password']" class="text-indigo-700 hover:text-indigo-900 mr-2">Password</a>
                <a [routerLink]="[user.id, 'edit']" class="text-indigo-700 hover:text-indigo-900">Edit</a>
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>
    </div>
  `,
})
export class AdminUserTableComponent {
  @Input() users: User[]
}
