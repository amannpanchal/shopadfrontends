import React from 'react'
import './FooterSection.css'
import { data } from '../../../config/data'
const FooterSection = () => {
  return (
    <div
      style={{
        backgroundColor : "transparent"
      }}
      

      className='footer container'>
      <h5
        style={{
          textAlign: "center",
          padding: "10px 0 "
        }}

      >
        {
          data?.footer?.topLine
       }

      </h5>
      <h5
        style={{
          textAlign: "center",
          padding: "10px 0 "
        }}


      >
     {data?.footer?.bottomLine}
        {"("}     <a
          style={{
            color:
              'blue'
          }}
        >{data?.footer?.link} </a>        {")"}      </h5>
      <p>
        <span>Disclaimer :{
        data?.footer?.disclimer}


        </span>
       
        <span>
          <a

          >Read More</a>
        </span>
      </p>
      <p
        style={{
          textAlign: "center",
          padding: "5px 0 ",
          fontSize: "12px"
        }}

      >
        Privacy Policy

      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "12px"

        }}

      >
        {data?.footer?.footerAllRight}

      </p>
    </div>
  )
}

export default FooterSection