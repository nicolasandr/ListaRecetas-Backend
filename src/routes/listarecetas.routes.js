import { Router } from 'express';
import {borrarReceta, crearReceta, editarReceta, listaRecetas, obtenerReceta} from '../controllers/listarecetas.controllers'
import validarReceta from '../helpers/validacionReceta';

const router = Router();

//rutas de la lista de recetas
router.route('/receta')
.get(listaRecetas)
.post(validarReceta,crearReceta)

router.route('/receta/:id')
.get(obtenerReceta)
.put(validarReceta,editarReceta)
.delete(borrarReceta);

export default router;
