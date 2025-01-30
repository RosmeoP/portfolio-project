const AppWrapper = () => {
    return (
      <BrowserRouter>
        <div className="app-container">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <>
                <App />
                <FooterRenderer />
              </>
            } />
            <Route path="/home" element={
              <>
                <App />
                <FooterRenderer />
              </>
            } />
            <Route path="/about" element={
              <>
                <About />
                <FooterRenderer />
              </>
            } />
            <Route path="/projects" element={
              <>
                <Project />
                <FooterRenderer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Contact />
                <FooterRenderer />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTopButton />
        </div>
      </BrowserRouter>
    );
  };