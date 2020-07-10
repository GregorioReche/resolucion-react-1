import React, { Component } from 'react';
import NavBar from './NavBar';
import ContentRowTop from './ContentRowTop';
import ContentRowBottom from './ContentRowBottom'

function MainContent(){
    return (
        <React.Fragment>
        
            <NavBar />

            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">
                
                {/* <!-- Page Heading --> */}
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                
                <ContentRowTop />
                
                <ContentRowBottom />
            
            </div>

        </React.Fragment>
    )
}

export default MainContent;