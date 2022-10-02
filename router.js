import {getUser, getUserByName, getUserList, postUser, deleteUser} from '../controller/user'
import {getUserSchedule, deleteUserSchedule, getUserScheduleList, postUserSchedule} from '../controller/schedule'
import express from 'express'

const router = express.Router();

router.get('/:id', getUser);
router.get('/info', getUserByName);
router.get('/', getUserList);
router.post('/register', postUser);
router.delete('/:id', deleteUser);

router.get('/:id/:date', getUserSchedule);
router.get('/:id/schedule', getUserScheduleList);
router.post('/:id/register', postUserSchedule);
router.delete('/:id/:date', deleteUserSchedule);

export default router;