import React from 'react';
import './WavyBackground.css';

const WavyBackground = ({ fill = "#6fb3e0", height = "420px", text,text1,text2}) => {
    return (
        <div className="curvy-wavy-background" style={{ height }}>
          
            <svg
                viewBox="0 0 1440 320"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >

                
            
                <path
                
                
                    fill={fill}
                   
                    fillOpacity="1"
                    
                    d="M0,160L60,186.7C120,213,240,267,360,282.7C480,299,600,277,720,250.7C840,224,960,192,1080,197.3C1200,203,1320,245,1380,266.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
                   
            </svg>
            <div className="content">
            <div style={{marginTop:"180px", color:"white"}} className='dfg'>{text}</div>
            <div style={{marginTop:"180px", color:"white"}} className='dfg1'>{text1}</div>
            <div style={{marginTop:"180px", color:"white"}} className='dfg2'>{text2}</div>

            </div>  
        
        </div>
    );
};

export default WavyBackground;
