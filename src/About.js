import React from 'react'
import { useState } from "react"
import PropTypes from 'prop-types'

export default function About(props) {
    // let [myStyle,setmyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
        
    // });
    // const [myBtn,setmyBtn] = useState("Enable Dark Mode")
    // const toggleModes = () => {
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor:'white'
    //         })
    //         setmyBtn("Enavle Light Mode")
        
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'white',
    //             back roundColor: 'black'
    //         })
    //         setmyBtn("Enavle Dark Mode")
    //     }
    // }
    return (
        <>
      
        <div className='container my-5' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061724', color: props.mode === 'light' ? 'white' : 'black' }} >
            <h1 className='my-3' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061724', color: props.mode === 'light' ? 'black' : 'white' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061724', color: props.mode === 'light' ? 'black' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061724', color: props.mode === 'light' ? 'black' : 'white' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061724', color: props.mode === 'light' ? 'black' : 'white' }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061724', color: props.mode === 'light' ? 'black' : 'white' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061724', color: props.mode === 'light' ? 'black' : 'white' }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061724', color: props.mode === 'light' ? 'black' : 'white' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={props.mode} className='btn btn-primary my-3'>{myBtn}</button> */}
        </div>
        </>
    )
}
