import React from 'react'
import './bar.scss';

const Graph = () => {
    return (
        <>
            <h4 className='d-flexx justify-content-centerr mb-3 mt-3'>Skill Graph </h4>
            <div className='d-flexx justify-content-between p-lg-4 m-3'>
                <div className='prog'>
                    <h4 className='fs-6 mb-0'>HTML</h4>
                    <div className="progress   mb-3">
                        <div className="progress-bar progress-bar-striped progress-bar-animated html  bn" style={{ width: "90%" }}>90%</div>
                    </div>

                    <h4 className='fs-6 mb-0'>CSS</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped progress-bar-animated css" style={{ width: "80%" }}>80%</div>
                    </div>

                    <h4 className='fs-6 mb-0'>Javascript</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped progress-bar-animated js" style={{ width: "65%" }}>65%</div>
                    </div>

                    <h4 className='fs-6 mb-0'>React</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped react progress-bar-animated" style={{ width: "70%" }}>70%</div>
                    </div>
                </div>
                <div className='prog'>
                    <h4 className='fs-6 mb-0'>Bootstrap</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bootstrap" style={{ width: "80%" }}>80%</div>
                    </div>

                    <h4 className='fs-6 mb-0'>Node.js</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped progress-bar-animated node" style={{ width: "20%" }}>20%</div>
                    </div>

                    <h4 className='fs-6 mb-0'>C </h4>
                    <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped progress-bar-animated c" style={{ width: "70%" }}>70%</div>
                    </div>

                    <h4 className='fs-6 mb-0'>Python</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar progress-bar-striped progress-bar-animated python" style={{ width: "50%" }}>50%</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graph