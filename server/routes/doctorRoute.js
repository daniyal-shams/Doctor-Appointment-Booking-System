import express from 'express' ;

import {appointmentCancel, appointmentComplete, appointmentDoctor, doctorDashboard, doctorList, loginDoctor} from "../controllers/doctorController.js";
import authDoctor from '../middlewares/authDoctor.js';

const doctorRouter = express.Router();

doctorRouter.get('/list',doctorList);
doctorRouter.post('/login',loginDoctor);
doctorRouter.get('/appointments', authDoctor, appointmentDoctor );
doctorRouter.post('/complete-appointment', authDoctor , appointmentComplete );
doctorRouter.post('/complete-appointment', authDoctor, appointmentCancel );
doctorRouter.get('/dashboard', authDoctor, doctorDashboard );





export default doctorRouter ;