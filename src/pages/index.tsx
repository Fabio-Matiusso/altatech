import React from 'react';
import Apresentation from '../components/Apresentation/Apresentation';
import Depositions from '../components/Depositions/Depositions';
import AccordionList from '../components/Faq/AccordionList';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Newsletter from '../components/Newsletter/Newsletter';
import Partners from '../components/Partners/Partners';
import Services from '../components/Services/Services';

export default function Website() {
  return (
    <React.Fragment>
      <Header />
      <Apresentation />
      <Services />
      <Partners />
      <Depositions />
      <Newsletter />
      <Form />
      <AccordionList />
      <Footer />
    </React.Fragment>
  );
}
