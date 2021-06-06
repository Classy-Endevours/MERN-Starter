## Middlewares and security
We have added few more levels of security under the project

### Role based token
We have created role based token system for you to make. You can always add more layer/roles to your project. For now, there are no environment specific token but you can configure that inside file `server/middlewares/AuthenticationRoles.js`
For now, we are having only 3 roles
1. Admin
2. Owner
3. Customer

Also, If you want to have `any` role the project is still capable of taking care of that.

**Using a role in API route**
To use a role auth in your application, you don't need to do much but import `server/middlewares/AuthenticationRoles.js` into your routing file and then place middleware in between of your routes like
e.g.
```
const Roles = require('../../middlewares/AuthenticateRoles');
router.get('/v1/url', Roles.Any, controller);
router.post('/v1/url', Roles.Admin, controller);
router.put('/v1/url', Roles.Owner, controller);
```

**Adding a new role**
To add a new role, you need to change 2 files
- AUTH model for your collection/table - add a enum value for your role
- Add the same enum into `server/middlwares/AuthenticationRoles.js` and update the object with the new key and value for your role
- Add a new object for your same role in the class with the new object

### Encryption
You can wrap any of your field in encrypted format to store in your Mongo DB and send the encrypted response to any of your route. You can find the reference for your modal field in `server/config/database/mongoose/models/Auth` and function ``preSave`` and `comparePassword`
For regular variable, you can use files
- server - `server/lib/Encryption.js`
- client - `client/src/utils/encryption.js`

To pass network encrypted data, you can use the same file inside your saga files.

### Slow down
We have used `express-slow-down` package to slow down the response if a same request keeps on sending from particular IP address. You can configure your own slow down from the file
`server/middlewares/SlowDown.js`. You can add more latency to prevent DDOS attack from happening. To get this in action you need to include the slowdown file first in your route and then
Attach that as a middleware

### Rate limit
We have used `express-rate-limit` package to rate limit the response if a same request keeps on sending from particular IP address. You can configure your own rate limiter from the file
`server/middlewares/RateLimiter.js`. You can add more 429 -Too many request to prevent DDOS attack from happening. To get this in action you need to include the ratelimiter file first in your route and then
Attach that as a middleware