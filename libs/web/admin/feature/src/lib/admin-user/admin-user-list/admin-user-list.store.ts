import { Injectable } from '@angular/core'
import { WebCoreDataAccessService, CorePagingInput, User } from '@stack-v4190/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface UserListState {
  paging: CorePagingInput
  errors?: any
  loading?: boolean
  users?: User[]
}

@Injectable()
export class AdminUserListStore extends ComponentStore<UserListState> {
  constructor(private readonly data: WebCoreDataAccessService) {
    super({ paging: { skip: 0, limit: 10 } })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly paging$ = this.select((s) => s.paging)
  readonly users$ = this.select((s) => s.users)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.paging$,
    this.users$,
    (errors, loading, paging, users) => ({
      errors,
      loading,
      paging,
      users,
    }),
  )

  readonly loadUsersEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.paging$),
      switchMap(([_, paging]) =>
        this.data.adminUsers({ paging }).pipe(
          tapResponse(
            (res) =>
              this.patchState({
                users: res.data.users,
                errors: res.errors,
                loading: false,
              }),
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )
}
