import { Routes } from '@angular/router';
import { MenuComponent } from './defensa/menu/menu.component';
import { SliderComponent } from './defensa/slider/slider.component';
import { BodyComponent } from './defensa/body/body.component';
import { FooterComponent } from './defensa/footer/footer.component';

export const routes: Routes = [
    {path:'menu',component:MenuComponent},
    {path:'slider',component:SliderComponent},
    {path:'body',component:BodyComponent},
    {path:'footer',component:FooterComponent},
];
