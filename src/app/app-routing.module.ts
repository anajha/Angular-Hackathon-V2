import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';

const routes: Routes = [
  { path: '', component: FileUploadComponent, data: { title: 'FileUploadComponent' } },
  { path: 'file-upload', component: FileUploadComponent, data: { title: 'FileUploadComponent' } },
  { path: 'manage-categories', component: ManageCategoriesComponent, data: { title: 'ManageCategoriesComponent' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
