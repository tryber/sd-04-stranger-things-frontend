import axios from 'axios';
require('dotenv').config();

class CharactersService {
  constructor({
    url = process.env.REACT_APP_HAWKINS_URL || 'http://localhost:3001',
    timeout = 30000,
  }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
