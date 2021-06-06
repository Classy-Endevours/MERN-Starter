const { Router } = require('express');
const Roles = require('../../middlewares/AuthenticateRoles');
const AuthController = require('../../controllers/Auth');
const RateLimiter = require('../../middlewares/RateLimiter');
const SlowDown = require('../../middlewares/SlowDown');
const router = Router({ mergeParams: true });

router.post('/v1/login', SlowDown, AuthController.loginValidation(), AuthController.login);
router.get('/v1/profile', Roles.Any, AuthController.getProfile);
router.put('/v1/profile', Roles.Any, AuthController.updateProfile);
router.post('/v1/register', AuthController.saveValidation(), AuthController.register);
router.get('/v1/', RateLimiter, Roles.Admin, AuthController.getAllUser);

module.exports = router;
