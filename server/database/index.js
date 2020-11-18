import axios from 'axios';

class database {
  static getUser(userId) {
    return new Promise(async (resolve, reject) => {
      try {
        const userData = await axios.get(`https://torre.bio/api/bios/${userId}`);
        resolve(userData.data);
      } catch (e) {
        const error = new Error(e);
        reject(error);
      }
    });
  }

  static getPeople(query, body) {
    return new Promise(async (resolve, reject) => {
      const { size, offset } = query;
      try {
        const userData = await axios.post(`https://search.torre.co/people/_search/?[offset=${offset}&size=${size}&aggregate=false]`, body);
        resolve(userData.data);
      } catch (e) {
        const error = new Error(e);
        reject(error);
      }
    });
  }
}

export default database;
