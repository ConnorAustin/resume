import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header.jsx';
import Section from './components/section/Section.jsx';
import Contact from './components/contact/Contact.jsx';
import Experience from './components/experience/Experience.jsx';
import Skills from './components/skills/Skills.jsx';
import Education from './components/education/Education.jsx';
import Interests from './components/interests/Interests.jsx';
import Projects from './components/projects/Projects.jsx';

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
        </div>
    );
  }
}

export default App;
