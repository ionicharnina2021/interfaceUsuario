import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'jornada',
    pathMatch: 'full'
  },
  {
    path: 'jornada',
    loadChildren: () => import('./jornada/jornada.module').then( m => m.JornadaPageModule)
  },
  {
    path: 'cronologia',
    loadChildren: () => import('./cronologia/cronologia.module').then( m => m.CronologiaPageModule)
  },
  {
    path: 'clasificacion',
    loadChildren: () => import('./clasificacion/clasificacion.module').then( m => m.ClasificacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
