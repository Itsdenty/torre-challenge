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
}

export default database;
