import express from "express";
import {
  createPost,
  getAllPosts,
  getSinglePost,
} from "../controllers/post.controller.js";
const router = express.Router();

router.route("/allposts").get(getAllPosts);
router.route("/createnewpost").post(createPost);
router.route("/:id").get(getSinglePost);

export default router;
