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
      console.log(body);
      try {
        const peopleData = await axios.post(`https://search.torre.co/people/_search/?[offset=0&size=9&aggregate=false]`, body);
        resolve(peopleData.data);
      } catch (e) {
        const error = new Error(e);
        reject(error);
      }
    });
  }

  static getOpportunities(query, body) {
    return new Promise(async (resolve, reject) => {
      const { size, offset } = query;
      console.log(size, offset);
      try {
        const opportunityData = await axios.post(`https://search.torre.co/opportunities/_search/?[offset=10&size=9&aggregate=false]`, body);
        resolve(opportunityData.data);
      } catch (e) {
        const error = new Error(e);
        reject(error);
      }
    });
  }

  static getOpportunity(jobId) {
    return new Promise(async (resolve, reject) => {
      try {
        const jobData = await axios.get(` https://torre.co/api/opportunities/${jobId}`);
        resolve(jobData.data);
      } catch (e) {
        const error = new Error(e);
        reject(error);
      }
    });
  }
}

export default database;
