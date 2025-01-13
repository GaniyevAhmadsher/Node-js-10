import NewsService from "../services/news.service.js";

class NewsController {
  constructor() {
    this.service = new NewsService();
  }

  async getAllNewsController(req, res) {
    try {
      const allNews = await this.service.getAllNews();
      res.status(200).json(allNews);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getNewsSearchController(req, res) {
    try {
      const search = await this.service.getNewsSearch(req, res);
      res.status(200).json(search);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getNewsByCategoryController(req, res) {
    try {
      const category = await this.service.getNewsByCatgory(req, res);
      res.status(200).json(category);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getNewsByIdController(req, res) {
    try {
      const byId = await this.service.getNewsById(req, res);
      res.status(200).json(byId);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async addNewsController(req, res) {
    try {
      const body = req.body;
      this.service.addNews(body);
      res.status(201).json({ message: "Mofaqiyatli yaratildi" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default NewsController;
