import './App.css';

//Bootstrap imported
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

//react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Landingpage
import Landingpage from './LandingPage/Landingpage/Landingpage';
import Management from './LandingPage/Managements/Management';
import Brands from './LandingPage/Brands/Brands';
import Footer from './LandingPage/Footer/Footer';
import ContactUs from './LandingPage/ContactUs/ContactUs';
import FindPricing from './LandingPage/FindPricing/FindPricing';
import Partners from './LandingPage/Partners/Partners';
import Success from './LandingPage/Success/Success';
import Engage from './LandingPage/Engage/Engage'
// import Overlaycards from './LandingPage/Overlaycards/Overlaycards'

//Assessments
import Entrylevel from './Assessments/Entrylevel/Entrylevel';
import Closelevel from './Assessments/Closelevel/Closelevel';
import Assessmentsstart from './Assessments/Assessmentsstart/Assessmentsstart'
import Authentication from './Authentication/Authentication';

import Pricing from './PaymentPage/Pricing';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div style={{width:"100vw", overflow:"hidden"}}>
      <Router>
        <Routes>
          <Route path="/" element={[<Landingpage/>,<Management/>,<Brands/>,<Success/>,<Engage/>,<Partners/>,<FindPricing/>,<ContactUs/>,<Footer/>]}/>
          <Route path="/authentication" element={<Authentication></Authentication>}></Route>
          <Route path="/quick-assessment" element={<Entrylevel/>}/>
          <Route path="/assessment-page" element={<Assessmentsstart/>}/>
          <Route path="/finish-assessment" element={<Closelevel/>}/>
          <Route path='/payment' element={<Pricing></Pricing>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
     </Router>  
    </div>
  );
}

export default App;
