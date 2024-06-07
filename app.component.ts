import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Module } from 'module';
import { MenuComponent } from './defensa/menu/menu.component';
import { SliderComponent } from './defensa/slider/slider.component';
import { BodyComponent } from './defensa/body/body.component';
import { FooterComponent } from './defensa/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MenuComponent, SliderComponent, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'choquePinto';
}
