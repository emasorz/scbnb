import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { PrimeIcons} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterOutlet,MenubarModule, CalendarModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  value:any;
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [{
        label: 'Home',
       
    },
    {
     label: 'About'
    }];
}
}
