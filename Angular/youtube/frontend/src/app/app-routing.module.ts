import { AllSongsComponent } from './Pages/all-songs/all-songs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './Pages/add-song/add-song.component';
import { AddCategoryComponent } from './Pages/add-category/add-category.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { AboutComponent } from './Pages/about/about.component';
import { PlayerComponent } from './Pages/player/player.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { Page404Component } from './Pages/page404/page404.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'list', component: AllSongsComponent },
  { path: 'addSong', component: AddSongComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
