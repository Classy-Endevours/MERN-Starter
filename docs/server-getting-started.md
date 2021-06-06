## Server
### Adding a new API
To add a new route in your project, you need to create a route in `server/routes/[app-folder]/[app-name].js` or if a file does not exist then create a file/folder for that

### Choosing a new middleware
You can add one of the following as your one middleware or create a custom middleware
- Rate limiter
- Slow down
- Role
- Validation

To create your own middleware you need to create a file inside `server/middlewares/[middleware].js` and include that into your route

### Creating controller
To create a controller either you can edit existing one or create a new file for your controller. 
**Note:** You should always use modular approach to create a controller for your application. Try to keep this thing common with your route folder.

### Adding validation
After you created your controller create a one more function which will return rules of validation for your controller. We are using `express-validator` to define custom rules of validation for controller.

### Adding database model
In case you don't have a desired model available for your controller in the folder `server/config/database/[mongoose or postgres]/models/` then you might want to create/edit one. To create/edit a mongoose model you can directly add/edit a model in the mongoose folder and for postgresql you will need to run a migration to add/update existing model.
Once you have made changes to your model, you can import those in your controller file

### Error handing
You should avoid returning `response` object for every error condition and you can create a custom error method or use existing one from `server/lib/ErrorHandler.js` to throw at your condition.
**Validation error**
`express-validator` pass a error to your controller which you can handle like this
```
const errors = validationResult(req);
if (!errors.isEmpty()) {
  const err = new Error("Validation Failed");
  err.status = 400;
  next(err, req, res, next);
  return;
}
```
which will fall to general error handling present in your `app.js`
throw error like pro
```
if (checker) {
  UserAlreadyExist();
}
```
which will jumb over to your catch block like this
```
 } catch (error) {
    return Responser.failed(error, req, res, next);
 }
```
Responser is a library present in `server/lib/Responser.js` to send positive and negative response to your frontend

### Send response
To send your response to frontend you can like this,
```
 return Responser.success(
        200,
        "User saved Successful",
        { token, role },
        res
      );
```
Responser success will take `code`, `message`, `data` and `response` object