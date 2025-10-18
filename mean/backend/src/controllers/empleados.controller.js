const empleadoCtrl={};
const Empleado = require('../models/Empleado')

empleadoCtrl.getEmpleados= async(req, res)=>
{
 const empleados= await Empleado.find();
 res.json(empleados);
 res.status(200)
}


empleadoCtrl.createEmpleado= async(req,res)=>{
    console.log(req.body)
 const empleado=new Empleado({
 nombre: req.body.nombre,
 cargo: req.body.cargo,
 departamento:req.body.departamento,
 sueldo:req.body.sueldo
 });
 console.log(empleado);
 await empleado.save();
 res.json('status: Datos guardados');
 res.status(200)
}


empleadoCtrl.getEmpleado=(req,res)=>{}

empleadoCtrl.editEmpleado=async(req,res)=>{
    console.log("************************ editar")
 const {id}=req.params;
 const { nombre, cargo, departamento, sueldo } = req.body;

console.log("************************ editar"+req.params.id)
console.log("************************ editar"+req.body.departamento)
console.log("************************ editar"+req.body.nombre)
console.log("************************ editar"+req.body.cargo)
 const actualizado =  await Empleado.findByIdAndUpdate(id, {$set:{ nombre, cargo, departamento, sueldo}}, { new: true });
 console.log("actualizado--"+actualizado)
 res.json('status: Datos actualizados');
 res.status(200)
}


empleadoCtrl.deleteEmpleado=async(req,res)=>{
 await Empleado.findByIdAndDelete(req.params.id);
 res.json('status: Empleado ha sido removido');
 res.status(200)
}



module.exports=empleadoCtrl;
