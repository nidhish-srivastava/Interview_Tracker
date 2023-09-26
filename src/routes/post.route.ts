import express, { Router } from "express";

import { getAll,create,deletePost,updatePost,saveInSavedPosts,getLoggedInUserPosts,getSingle,searchUserPosts, getSavedPosts } from "../controller/post.controller";
import { authenticateJwt } from "../middleware/auth";

const router: Router = express.Router();

router.get('/',getAll)
router.post('/',authenticateJwt ,create)
router.get('/savedPosts/:id',authenticateJwt,getSavedPosts)
router.post('/savedPosts',authenticateJwt,saveInSavedPosts)
router.get('/search/:username',searchUserPosts)
router.get('/:id',getLoggedInUserPosts)
router.patch('/:id',authenticateJwt,updatePost)
router.delete('/:_id',authenticateJwt,deletePost)
router.get('/single/:id',getSingle)


export default router