import { Router } from "express";
import NewsController from "../controllers/news.controller.js";

const newsRouter = Router();

const controller = new NewsController();

newsRouter.get("/news", async (req, res) => {
  return controller.getAllNewsController(req, res);
});

newsRouter.get("/news/search", async (req, res) => {
  return controller.getNewsSearchController(req, res);
});

newsRouter.get("/news/category/:name", async (req, res) => {
  return controller.getNewsByCategoryController(req, res);
});

newsRouter.get("/news/:id", async (req, res) => {
  return controller.getNewsByIdController(req, res);
});

newsRouter.post("/news", async (req, res) => {
  return controller.addNewsController(req, res);
});

export default newsRouter;
