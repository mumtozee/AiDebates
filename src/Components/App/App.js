import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HotTopics from '../../Pages/HotTopics/HotTopics.jsx';
import AllTopics from '../../Pages/AllTopics/AllTopics';
import About from '../../Pages/About/About.jsx';
import AddTopic from '../../Pages/AddTopic/AddTopic';
import Contacts from '../../Pages/Contacts/Contacts';
import Signup from '../../Pages/Signup/Signup';
import Login from '../../Pages/Login/Login';
import Profile from '../../Pages/Profile/Profile';
import Discussion from '../../Pages/Discussion/Discussion';

import '../../bootstrap/css/bootstrap.min.css';
import '../../bootstrap/css/bootstrap-grid.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row fixed-top">
        <div className='col'><Header /></div>
      </div>
      <div className="row" id={styles.main_body}>
        <div className='col'>
          <Routes>
            <Route path="/" element={<HotTopics />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/all_topics" element={<AllTopics />}></Route>
            <Route path="/add_topic" element={<AddTopic isLoggedIn={true} />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/discuss" element={<Discussion />}></Route>
          </Routes>
        </div>
      </div>
      <div className="row fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default App;
