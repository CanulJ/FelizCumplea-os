import { Routes } from '@angular/router';
import { YareComponent } from './Pages/yare/yare.component';
import { CartasComponent } from './Pages/cartas/cartas.component';
import { MensajeComponent } from './Pages/mensaje/mensaje.component';

export const routes: Routes = [

    {path: '',component:YareComponent},
    {path: 'cartas',component:CartasComponent},
    {path: 'mensaje',component:MensajeComponent},
];
