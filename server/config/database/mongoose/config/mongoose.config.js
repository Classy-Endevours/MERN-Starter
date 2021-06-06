const mongoose = require("mongoose");
const seedData = require('../seeder');
class DatabaseConfig {
  connect = (url) => {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        })
        .then(async () => {
          try {
            __logger.info("Database connected successfully!");
            await seedData();
            __logger.info("Database seeders added successfully!");
            resolve();
          } catch (error) {
            __logger.error("Failed to load seeders!");
            reject(error);
          }
        })
        .catch((err) => {
          __logger.error("Failed to connect Database!");
          reject(err);
        });
    });
  };

  disconnect = () => {
    mongoose.connection.close();
  };
}
module.exports = new DatabaseConfig();
