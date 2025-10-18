const { Router }= require('express');
const router=Router();

empleado=require('../controllers/empleados.controller.js');
router.get('/getEmpleados',empleado.getEmpleados);
router.post('/crearEmpleado', empleado.createEmpleado);
router.get('/empleado/:id',empleado.getEmpleado);
router.put('/editarEmpleado/:id',empleado.editEmpleado);
router.delete('/eliminarEmpleado/:id', empleado.deleteEmpleado);
module.exports=router;