import IO from "../utils/io.js";

class NewsService {
  constructor() {
    this.fs = new IO();
  }
  async getAllNews() {
    const news = await this.fs.readFile("news.json");
    if (news) {
      return news;
    }
    throw new Error("malumot topilmadi");
  }

  async getNewsSearch(req, res) {
    const news = await this.fs.readFile("news.json");
    const query = req.query.q;
    const search = news.filter(
      (news) =>
        news.title.toLowerCase().includes(query) ||
        news.content.toLowerCase().includes(query) ||
        news.category.toLowerCase().includes(query)
    );
    if (search.length === 0) {
      throw new Error(`Ushbu "${query}" qidiruv bo'ycha malumot topilmadi`);
    }
    return search;
  }

  async getNewsByCatgory(req, res) {
    const news = await this.fs.readFile("news.json");
    const param = req.params.name;
    const filteredCategory = news.filter(
      (news) => news.category.toLowerCase() === param
    );
    if (filteredCategory.length === 0) {
      throw new Error(`${param} katego'rya bo'ycha malumot topilmadi`);
    }
    return filteredCategory;
  }

  async getNewsById(req, res) {
    const news = await this.fs.readFile("news.json");
    const id = req.params.id;
    const byId = news.find((news) => news.id === +id);
    if (!byId) {
      throw new Error(`id: ${id} bo'ycha malumot topilmadi`);
    }
    return byId;
  }

  async addNews(body) {
    const news = await this.fs.readFile("news.json");
    if (news) {
      const data = {
        id: news.length + 1,
        ...body,
        date: new Date().toLocaleDateString().split("/").reverse().join("-"),
      };
      news.push(data);
      await this.fs.writeFile("news.json", news);
    }
    throw new Error("malumot topilmadi");
  }
}

export default NewsService;
