### Seeders
Add a new seeder data in Mongo DB. We are not using any package to seed data but we are doing on manually.
For now, we are having one seeder data into the application which is generating a default login credentials for `admin`.

You can find the seeders inside the `server/config/database/mongoose/seeder/index.js` folder 

You will see a controller file is present which take care for generating and checking the seeder for us.

### Create your own
You can create a custom seeder for you and place the promise in the same file mentioned earlier.

If want to have any further changes then you can add those into the `mongoose.config.js` where the seeder will be loaded after the successful connection.