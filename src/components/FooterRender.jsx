const FooterRenderer = () => {
    const location = useLocation();
    const path = location.pathname;
    
    // Create an array of valid paths
    const validPaths = ['/', '/home', '/about', '/projects', '/contact'];
    
    // If not a valid path, return null
    if (!validPaths.includes(path)) {
      return null;
    }
  
    // Return ContactFooter for contact page
    if (path === '/contact') {
      return <ContactFooter />;
    }
  
    // Return regular Footer for all other valid paths
    return <Footer />;
  };