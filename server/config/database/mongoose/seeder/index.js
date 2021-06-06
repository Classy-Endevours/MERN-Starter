// import your controllers
const AdminSeeder = require('../../../../controllers/Auth/');
const seedData = async () => {
    // write each query which you want to seed
    return new Promise( async (resolve, reject) => {
        try {
            await AdminSeeder.seedAdmin();
            resolve({});
        } catch (error) {
            reject(error);        
        }
    })
}
module.exports = seedData;