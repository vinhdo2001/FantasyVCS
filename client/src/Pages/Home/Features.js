import React from 'react'
import './Features.css'
function Features() {
    return (
        <>
            <div className="title-text-wrapper big-h1" id="features">
                <h1>FEATURES</h1>
                <p>Assemble a league, talk some smack, draft players at every position, and go head-to-head with friends and family.</p>
            </div>
            <div className='home-features-wrapper d-flex flex-column m-auto'>
                <div className="d-flex flex-row justify-content-between mb-5">
                    <div className="features-container ">
                        <img src='/images/live-scoring.png' />
                        <img src='/images/features-base.png' id='features-base' />
                        <h2>Live Scoring</h2>
                        <p>Follow along with the fastest scores, straight from the official source.</p>
                    </div>
                    <div className="features-container ">
                        <img src='/images/live-scoring.png' />
                        <img src='/images/features-base.png' id='features-base' />
                        <h2>Live Scoring</h2>
                        <p>Follow along with the fastest scores, straight from the official source.</p>
                    </div>
                    <div className="features-container ">
                        <img src='/images/live-scoring.png' />
                        <img src='/images/features-base.png' id='features-base' />
                        <h2>Live Scoring</h2>
                        <p>Follow along with the fastest scores, straight from the official source.</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="features-container ">
                        <img src='/images/live-scoring.png' />
                        <img src='/images/features-base.png' id='features-base' />
                        <h2>Live Scoring</h2>
                        <p>Follow along with the fastest scores, straight from the official source.</p>
                    </div>
                    <div className="features-container ">
                        <img src='/images/live-scoring.png' />
                        <img src='/images/features-base.png' id='features-base' />
                        <h2>Live Scoring</h2>
                        <p>Follow along with the fastest scores, straight from the official source.</p>
                    </div>
                    <div className="features-container ">
                        <img src='/images/live-scoring.png' />
                        <img src='/images/features-base.png' id='features-base' />
                        <h2>Live Scoring</h2>
                        <p>Follow along with the fastest scores, straight from the official source.</p>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Features