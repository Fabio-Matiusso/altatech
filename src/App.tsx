import Apresentation from './components/Apresentation/Apresentation';
import Depositions from './components/Depositions/Depositions';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Partners from './components/Partners/Partners';
import Services from './components/Services/Services';

export default function App() {
  return (
    <div>
      <Header />
      <Apresentation />
      <Services />
      <Partners />
      <Depositions />
      <Newsletter />
    </div>
  );
}
