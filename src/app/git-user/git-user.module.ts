import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GitUserComponent } from './git-user.component';
import { GitUserService } from './git-user.service';
import { FilterByPipe } from '../pipes/filter-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GitUserComponent,
    FilterByPipe
  ],
  exports: [GitUserComponent],
  providers: [GitUserService]
})
export class GitUserModule { }
