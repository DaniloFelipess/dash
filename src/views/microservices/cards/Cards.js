import React from 'react'
import './styles.css'
import {  
  CCard,
  CCardBody,
  CSwitch,  
  CCardHeader,
  CCol,
  CRow,
  CLink,
  // CBadge,
  // CCollapse,
  // CFade,
  // CCardFooter, 
} from  '@coreui/react'
// import { cilDisabled, freeSet } from '@coreui/icons'

import CIcon from '@coreui/icons-react'

// import { DocsLink } from 'src/reusable'


const Cards = () => {
  const [on, setOn] = React.useState(true)
  const [on1, setOn1] = React.useState(true)
  const [on2, setOn2] = React.useState(true)
  const [on3, setOn3] = React.useState(true)
  const [on4, setOn4] = React.useState(true)
  const [on5, setOn5] = React.useState(true)
  const [on6, setOn6] = React.useState(true)
  //const [off, setOff] = React.useState(false)
  const [collapsed, setCollapsed] = React.useState(true)
  const [collapsed1, setCollapsed1] = React.useState(true)
  const [collapsed2, setCollapsed2] = React.useState(true)
  const [collapsed3, setCollapsed3] = React.useState(true)
  const [collapsed4, setCollapsed4] = React.useState(true)
  const [collapsed5, setCollapsed5] = React.useState(true)
  const [collapsed6, setCollapsed6] = React.useState(true)  
  // const [showCard, setShowCard] = React.useState(true)

  const handleButtonOn =()=>{
    setOn(false)
  }
  const handleButtonOff = () =>{
    setOn(true)
  }
  const handleButtonOn1 =()=>{
    setOn1(false)
  }
  const handleButtonOff1 = () =>{
    setOn1(true)
  }
  const handleButtonOn2 =()=>{
    setOn2(false)
  }
  const handleButtonOff2 = () =>{
    setOn2(true)
  }
  const handleButtonOn3 =()=>{
    setOn3(false)
  }
  const handleButtonOff3 = () =>{
    setOn3(true)
  }
  const handleButtonOn4 =()=>{
    setOn4(false)
  }
  const handleButtonOff4 = () =>{
    setOn4(true)
  }
  const handleButtonOn5 =()=>{
    setOn5(false)
  }
  const handleButtonOff5 = () =>{
    setOn5(true)
  }
  const handleButtonOn6 =()=>{
    setOn6(false)
  }
  const handleButtonOff6 = () =>{
    setOn6(true)
  }

  return (
    <>
      <CRow>
      <CCol className='CCol-CCard' >         
          <CCard className='CCard'>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch value={on} onClick={on ? handleButtonOn : handleButtonOff} className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />                
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            {on ? <div className='borderIcon'>
            <CLink style={{float:'left',paddingLeft: 30,paddingBottom:30, color:'black'}} className="card-header-actions" onClick={()=> setCollapsed(!collapsed)}>
            <CIcon className='CIcon' name={collapsed ? "cil-chevron-circle-right-alt" : "cil-media-stop"}/>                      
            </CLink>
            </div> : "" }                      
          </CCard>
          <CCard className='CCard'>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch onClick={on1 ? handleButtonOn1 : handleButtonOff1} className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />                
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>           
            {on1 ? <div className='borderIcon'>
            <CLink style={{float:'left',paddingLeft: 30,paddingBottom:30, color:'black'}} className="card-header-actions" onClick={()=> setCollapsed1(!collapsed1)}>
            <CIcon className='CIcon' name={collapsed1 ? "cil-media-play" : "cil-media-pause"}/>                      
            </CLink>
            </div> : "" }  
          </CCard>
          <CCard className='CCard'>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch onClick={on2 ? handleButtonOn2 : handleButtonOff2} className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />                
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>           
            {on2 ? <div className='borderIcon'>
            <CLink style={{float:'left',paddingLeft: 30,paddingBottom:30, color:'black'}} className="card-header-actions" onClick={()=> setCollapsed2(!collapsed2)}>
            <CIcon className='CIcon' name={collapsed2 ? "cil-media-play" : "cil-media-pause"}/>                      
            </CLink>
            </div> : "" }  
          </CCard>
          <CCard className='CCard'>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch onClick={on3 ? handleButtonOn3 : handleButtonOff3} className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />                
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            {on3 ? <div className='borderIcon'>
            <CLink style={{float:'left',paddingLeft: 30,paddingBottom:30, color:'black'}} className="card-header-actions" onClick={()=> setCollapsed3(!collapsed3)}>
            <CIcon className='CIcon' name={collapsed3 ? "cil-media-play" : "cil-media-pause"}/>                      
            </CLink>
            </div> : "" }         
          </CCard>
          <CCard className='CCard'>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch onClick={on4 ? handleButtonOn4 : handleButtonOff4} className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />                
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            {on4 ? <div className='borderIcon'>
            <CLink style={{float:'left',paddingLeft: 30,paddingBottom:30, color:'black'}} className="card-header-actions" onClick={()=> setCollapsed4(!collapsed4)}>
            <CIcon className='CIcon' name={collapsed4 ? "cil-media-play" : "cil-media-pause"}/>                      
            </CLink>
            </div> : "" }           
          </CCard>
          <CCard className='CCard'>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch onClick={on5 ? handleButtonOn5 : handleButtonOff5} className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />                
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            {on5 ? <div className='borderIcon'>
            <CLink style={{float:'left',paddingLeft: 30,paddingBottom:30, color:'black'}} className="card-header-actions" onClick={()=> setCollapsed5(!collapsed5)}>
            <CIcon className='CIcon' name={collapsed5 ? "cil-media-play" : "cil-media-pause"}/>                      
            </CLink>
            </div> : "" }         
          </CCard>
          <CCard className='CCard'>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch onClick={on6 ? handleButtonOn6 : handleButtonOff6} className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />                
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            {on6 ? <div className='borderIcon'>
            <CLink style={{float:'left',paddingLeft: 30,paddingBottom:30, color:'black'}} className="card-header-actions" onClick={()=> setCollapsed6(!collapsed6)}>
            <CIcon className='CIcon' name={collapsed6 ? "cil-media-play" : "cil-media-pause"}/>                      
            </CLink>
            </div> : "" }           
          </CCard>
          <CCard className='CCard'>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch onClick={on6 ? handleButtonOn6 : handleButtonOff6} className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />                
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            {on6 ? <div className='borderIcon'>
            <CLink style={{float:'left',paddingLeft: 30,paddingBottom:30, color:'black'}} className="card-header-actions" onClick={()=> setCollapsed6(!collapsed6)}>
            <CIcon className='CIcon' name={collapsed6 ? "cil-media-play" : "cil-media-pause"}/>                      
            </CLink>
            </div> : "" }           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Cards
