import React, { Component } from 'react';
import Typed from 'react-typed';

import '../styles/Home.scss';

export class Home extends Component {
    render() {
        return(
            <div>
                <h1>Hi, my name is <span className="ColorTextMain">Saurja Ghosh</span></h1>
                <h2>and I'm a &nbsp; 
                    <Typed
                        strings={['Software Developer','Web Developer','UI & UX Designer']}
                        typeSpeed={60}
                        backSpeed={50}
                        loop
                    />
                </h2>
                <h1>living in <span className="ColorTextMain">India</span>.</h1>
            </div>
        )
    }
}
