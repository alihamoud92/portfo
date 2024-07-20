import React from 'react'
import { Col, Row } from '../../Tools/Grid-system'
import { BsFillTelephoneMinusFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from '../Index';


function ContactUsCom() {
  return (
    <>
    <div>
      <Col  className='mx-auto flex justify-between  '>
          <Col md={6} className='my-1'>
            <div className='flex-col space-y-1 '>
              <div className='flex justify-center items-center gap-5 mt-3 '>
                <span><BsFillTelephoneMinusFill size={30} color='#447799'/></span>
                <h1 className='text-black text-xl font-normal md:text-2xl'>Phone Number</h1>
              </div>
              <h1 className='flex justify-center  text-start  text-sm text-slate-900 md:text-xl'>+963 - 987654321</h1>
            </div>
          </Col>
          <Col md={6} className='my-1'>
          <div className='flex-col space-y-1 '>
            <div className='flex justify-center items-center gap-5 mt-3'>
              <span><MdOutlineEmail  size={30} color='#447799'/></span>
              <h1 className='text-black text-xl font-normal md:text-2xl'>E-mail Address</h1>
            </div>
            <h1 className='flex justify-center  text-start  text-sm text-slate-900 md:text-xl'>info.company.com</h1>
          </div>
         </Col>
      </Col>
      <Row className=''>
        <Col md={6}  className='w-1/2 '>
                  <input type="text" placeholder='E_EMAIL' className=' text-xl text-start font-bold text-blue-900 border-2 border-blue-400 rounded-lg px-6 py-2 w-full opacity-50'/>
        </Col>
        <Col md={6} className='w-1/2'>
                  <input type="text" placeholder='NAME' className='text-xl text-start font-bold text-blue-900 border-2 border-blue-400 rounded-lg px-6 py-2 w-full opacity-50'/>
        </Col>
      </Row>
      <Col className='mx-auto'>
        <textarea placeholder='MESSAGE' className='border-2 border-blue-900 w-full h-[200px] rounded-xl px-6 py-2 text-xl font-bold opacity-50'></textarea>
      </Col>
      <div className='mx-auto  w-[200px] '>
      <Button
      name='Submit'
      link="/contact-us/firststep"
      />
      </div>
      </div>
      </>
  )
}

export default ContactUsCom
