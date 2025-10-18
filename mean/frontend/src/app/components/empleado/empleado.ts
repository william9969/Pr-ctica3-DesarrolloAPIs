import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { EmpleadoService } from '../../services/empleado';
import { Empleado } from '../../models/empleado';
import { NgForm, FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-empleado',
  imports: [FormsModule, NgFor],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css'
})

export class EmpleadoComponent implements OnInit {
  constructor(public empleadoService:EmpleadoService) { }
  empleado: Empleado[] = [];
  ngOnInit(): void {
    this.getEmpleados();
  }
  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
    res=>{
    this.empleadoService.empleados=res;
    },
    err=>console.error(err)
    );
  }
  addEmpleado(form:NgForm){
       
    this.empleadoService.createEmpleado(this.empleadoService.selectedEmpleado).subscribe(res=>{
    this.getEmpleados();
    form.reset;
    },
    err=>console.error(err)
    );
  }

  deleteEmpleado(empleaadoid:Empleado){
    console.log(empleaadoid)
  }
}
