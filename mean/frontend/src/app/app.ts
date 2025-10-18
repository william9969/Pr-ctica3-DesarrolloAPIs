import { Component, signal, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-root',
  imports: [EmpleadoComponent, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
