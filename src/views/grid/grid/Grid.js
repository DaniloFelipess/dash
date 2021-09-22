import React from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'
  import usersData from '../../users/UsersData'

  const getBadge = status => {
    switch (status) {
      case 'Ativo': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }

  const fields = ['name','registered', 'role', 'status']

const Grid = () => {
    return (
        <div>
            <h1>Grid</h1>
            <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Informações
            </CCardHeader>
            <CCardBody>
            <CDataTable
              columnFilterValue
              tableFilter
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        <CRow>        
      </CRow>
    </>
        </div>
    )
}

export default Grid
