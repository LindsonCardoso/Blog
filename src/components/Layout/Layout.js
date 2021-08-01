import React from 'react';

//import components
import { Header    } from '../Header/Header';
//import { Sidebar   } from '../Sidebar/Sidebar';
import { Container } from '../Container/Container';
import { Bio       } from '../Bio';

//import libres..
import Helmet from 'react-helmet';
import favicon from '../../../static/favicon.png';
import config from '../../../data/config';

//import styles..
import '../../styles/global.css';

export const Layout = ({ children }) => {
 
 return(
  <>
 <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Bio author={config.siteAuthor} title="Lindson" description="Sou um desenvolvedor apaixonado por JavaScript e amo desenvolver produtos que melhoram a vida das pessoas."/>
        </aside>
      </Container>
    </main>
  </div>
</>
)
}


