import React from 'react'
import {  
  CCard,
  CCardBody,
  CSwitch,  
  CCardHeader,
  CCol,
  CRow,
  // CBadge,
  // CCollapse,
  // CFade,
  // CCardFooter,
  // CLink
} from  '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'


const Cards = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
      <CRow>
      <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            <CCardBody>
             ICONPLAY
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            <CCardBody>
             ICONPLAY
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            <CCardBody>
             ICONPLAY
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              Started Fedex
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
             SERVICES
            </CCardBody>
            <CCardBody>
             ICONPLAY
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Cards
