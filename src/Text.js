import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function Text(props) {
    const [Text, setText] = useState('')

    const changeContent = () => {
        let av = Text.toUpperCase();
        setText(av);
    }

    const changeCcontent = () => {
        let vv = Text.toLowerCase();
        setText(vv);
    }

    const clearContent = () => {
        setText("");
    }


    function handleOnChange(event) {
        setText(event.target.value);
    }


    const reverseBtn = () => {
        let cp = Text.split("");
        let reverse = cp.reverse();
        let join = reverse.join("");
        setText(join);
    }


    function changeCapitalBtn() {
        let temp = Text;
        let alter = temp.toLowerCase().split("")
        for (let i = 1; i < alter.length; i++) {
            if (i % 2 === 0) {
                alter[i] = alter[i].toUpperCase();
            }
            let join = alter.join('')
            setText(join)
        }
    }


    return (

        <div className='container' style={{color: props.mode === 'light' ? '#061724' : 'white' }}>

            <div className={`mb-3 `}>
                <h1 className='my-4'>Write Your Code To Convert Into UpperCase</h1>
                <textarea className="form-control Amit" id="box" value={Text} onChange={handleOnChange} rows="11" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#061724', color: props.mode === 'light' ? '#0617grey24' : 'white' }}></textarea>
                <button style={{ marginTop: "1rem" }} onClick={changeContent} className='btn btn-primary'>Convert to uppercase</button>
                <button style={{ marginTop: "1rem", marginLeft: "1rem" }} onClick={changeCcontent} className='btn btn-primary'>Convert to lowercase</button>
                <button style={{ marginTop: "1rem", marginLeft: "1rem" }} onClick={clearContent} className='btn btn-primary'>Clear text</button>
                <button style={{ marginTop: "1rem", marginLeft: "1rem" }} onClick={reverseBtn} className='btn btn-primary'>Reverse order</button>
                <button style={{ marginTop: "1rem", marginLeft: "1rem" }} onClick={changeCapitalBtn} className='btn btn-primary'>Alternat the String</button>
            </div>
            <div>
                <h1>Preview</h1>
                <p >{Text}</p>
            </div>

        </div>

    )
}


Text.propTypes = {
}