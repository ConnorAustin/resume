import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header.jsx';
import Contact from './components/contact/Contact.jsx';
import Experience from './components/experience/Experience.jsx';
import Skills from './components/skills/Skills.jsx';
import Education from './components/education/Education.jsx';
import Interests from './components/interests/Interests.jsx';
import Projects from './components/projects/Projects.jsx';
import Qrcode from './components/qrcode/Qrcode.jsx';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Contact />
            <div className="flex">
                <Experience />
                <div>
                    <Skills />
                    <Education />
                    <Interests />
                </div>
            </div>
            <Projects />
            <Qrcode />
        </div>
    );
  }

  componentDidMount() {
    document.title = 'Connor Austin - Resume';
  }
}

export default App;
