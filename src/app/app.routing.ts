import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitUserComponent } from './git-user/git-user.component';

const routes: Routes = [
  { path: '', component: GitUserComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);