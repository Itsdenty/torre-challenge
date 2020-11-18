class database {
  static async getUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('my data'), 3000);
      const cond = false;
      if (cond) {
        reject(new Error('false'));
      }
    });
  }
}

export default database;
