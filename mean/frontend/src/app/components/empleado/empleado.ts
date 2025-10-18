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
  empleadosList: Empleado[] = [];
  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
    res=>{
    this.empleadoService.empleados=res;
    this.empleadosList=res;
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

  deleteEmpleado(empleaado:Empleado){
    this.empleadoService.deleteEmpleado(empleaado._id).subscribe(res=>{
    //this.empleadosList = this.empleadosList.filter(i => i._id !== empleaado._id)
    this.getEmpleados()
    },
    err=>console.error(err)
    );
  }

  setUpdateEmpleado(){
  this.empleadoService.editarEmpleado(this.empleadoService.selectedEmpleado, this.empleadoService.selectedEmpleado._id).subscribe(res=>{
      //this.empleadosList = this.empleadosList.filter(i => i._id !== empleaado._id)
      this.getEmpleados()
      },
      err=>console.error(err)
      );

  }

  updateEmpleado(empleado: Empleado){
    this.empleadoService.selectedEmpleado = empleado
     
  }
}
