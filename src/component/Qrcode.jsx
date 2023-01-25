import React from 'react'
import { useState } from 'react'
import qr from 'qrcode'
import ReactHtmlparser from 'react-html-parser'
import './Qrcode.css'
export default function Qrcode() {
    const [data, setdata] = useState({ name: '', email: "", city: "" })
    const [qrdata, setqrdata] = useState(null)
    const handlegenerate = (e) => {
        e.preventDefault()
        let datajson = JSON.stringify(data)
        qr.toString(datajson, { type: 'terminal' }, (err, code) => {
            if (err) return console.log(err)
            setqrdata(code)
        })

    }
    return (
        <>

            <div className='q-wrap'>

                <div className='h-wrap'>
                    <p>QR CODE GENERATOR</p>
                </div>
                <div className="c-wrap">
                    <div className='d-wrap'>
                        <div>
                            <label htmlFor="Name">NAME : </label><br />
                            <input type="text" name="name" onChange={(e) => {
                                setdata({ ...data, name: e.target.value })
                            }} />
                        </div>
                        <div>
                            <label htmlFor="Email">EMAIL : </label><br />
                            <input type="text" name="email" onChange={(e) => {
                                setdata({ ...data, email: e.target.value })
                            }} />
                        </div>
                        <div>
                            <label htmlFor="Name">CITY : </label><br />
                            <input type="text" name="city" onChange={(e) => {
                                setdata({ ...data, city: e.target.value })
                            }} />
                        </div>
                        <button onClick={handlegenerate}>Generate</button>
                    </div>

                    <div className='i-warp'>
                        <div>
                            {ReactHtmlparser(qrdata)}
                        </div></div>



                </div>
            </div>

        </>
    )
}
