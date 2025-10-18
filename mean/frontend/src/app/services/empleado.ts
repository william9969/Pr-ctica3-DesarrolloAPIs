import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empleado} from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
   
  URL_API='http://localhost:3000/api';
  empleados: Empleado[] = [];
  selectedEmpleado: Empleado={
    nombre:'',
    cargo:'',
    departamento:'',
    sueldo:0
  }
  constructor(private http: HttpClient) { }
  getEmpleados(){
    return this.http.get<Empleado[]>(this.URL_API+"/getEmpleados");
  }
  createEmpleado(empleado:Empleado){
    console.log(empleado.cargo)
    console.log(empleado.nombre)
    console.log(empleado.departamento)
    return this.http.post(this.URL_API+"/crearEmpleado",empleado);
  }

  deleteEmpleado(id?:String){
    return this.http.delete(this.URL_API+"/eliminarEmpleado/"+id);
  }

  editarEmpleado(empleado:Empleado, id?:String){
    return this.http.put(this.URL_API+"/editarEmpleado/"+id,empleado);
  }
}

