const authControllers = {
    authLoginGet: (req, res) => res.send('Route for Login View'), 
    authLoginPost: (req, res) => res.send('Route for auth/login POST'),
    authRegisterGet: (req, res) => res.send('Route for Register View'),
    authRegisterPost: (req, res) => res.send('Route for auth/register POST')
 }

 module.exports = authControllers;