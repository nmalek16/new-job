import express from 'express';
import { deleteJobs, getJobs, setJobs, updateJobs } from '../controllers/jobCtrl.js';
import { GetProfile, login, signUp } from '../controllers/userCtrl.js';
import { protect } from '../middelware/userAuth.js';


// Jobs Route
const router = express.Router()
// get
router.get("/jobs", getJobs);
// add
router.post("/add-jobs", setJobs);
// update
router.put("/update-job/:id", updateJobs);
// delete
router.delete("/delete-job/:id", deleteJobs);

// User Route
router.post("/register", signUp );
router.post("/login", login );
router.get("/profile" ,GetProfile );




export default router