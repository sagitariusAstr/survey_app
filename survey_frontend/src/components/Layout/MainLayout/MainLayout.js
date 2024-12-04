import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <title>{title}</title>
    </Helmet>
    <Header />
    <main style={{ minHeight: "70vh"}}>
      <Toaster />

      {children}
    </main>
    <Footer />
  </div>
  )
}

MainLayout.defaultProps = {
  title: "SELF",
  description: "mern stack project",
  keywords: "mern,react,node,mysql",
  author: "Kalpesh Budhathoki",
};

export default MainLayout;