import React from "react";
import { SEO } from '../components/SEO/SEO';
import { Layout } from "../components/Layout/Layout";

const notFound = () => {
  return(
  <Layout>
    <SEO title="Página não encontrada" description="Infelizmente a página desejada não pode ser encontrada"/>
    <h2>
      Infelizmente a página desejada não pode ser encontrada!
    </h2>
  </Layout>
  )
};

export default notFound