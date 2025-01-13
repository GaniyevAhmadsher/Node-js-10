import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "process";

class IO {
  constructor() {
    this.base = join(cwd(), "src", "data");
  }
  async readFile(filename) {
    try {
      const path = join(this.base, filename);
      const data = await readFile(path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.log(error.message);
      throw new Error(`Fileni o'qishda xatolik ro'yberdi`);
    }
  }
  async writeFile(filename, data) {
    try {
      const path = join(this.base, filename);
      await writeFile(path, JSON.stringify(data, null, 3), "utf-8");
    } catch (error) {
      console.log(error.message);
      throw new Error(`Fileni yozishda xatolik ro'yberdi`);
    }
  }
}

export default IO;
