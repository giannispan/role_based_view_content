var AuthenticationController = require('../controllers/authentication'),
    docsController = require('../controllers/docsController'),
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');

var requireAuth = passport.authenticate('jwt', { session: false }),
    requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {

    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        docRoutes = express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);

    // authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

    // apiRoutes.get('/protected', requireAuth, function(req, res) {
    //     res.send({ content: 'Success' });
    // });

    apiRoutes.use('/docs', docRoutes);

    docRoutes.get('/viewAllDocs', requireAuth, AuthenticationController.roleAuthorization(['super_user']), docsController.viewAllDocs);
    docRoutes.get('/viewDepartmentDocs/:dept', requireAuth, AuthenticationController.roleAuthorization(['super_user']), docsController.viewDepartmentDocsByDept);
    docRoutes.get('/viewDepartmentDocs', requireAuth, AuthenticationController.roleAuthorization(['super_user', 'simple_user']), docsController.viewDepartmentDocs);
    docRoutes.get('/viewDepartmentDoc/:id', requireAuth, AuthenticationController.roleAuthorization(['super_user', 'simple_user']), docsController.viewDepartmentDocById);

    // Set up routes
    app.use('/api', apiRoutes);

}
