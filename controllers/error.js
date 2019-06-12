exports.get404 = (req, res, next) => {
    res.status(404).render('error-page', { 
      pageTitle: 'Page Not Found', 
      path: '/error-page', 
      isAuthenticated: req.isLoggedIn
    });
};
  