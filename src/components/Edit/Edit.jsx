import { Button, Space } from 'antd'
import React from 'react'

const Edit = ({ text, record, handleEdit, handleDelete, handleDetails }) => {
   
    
  return (
      <div>
          <Space>
              <Button
                  onClick={() => {
                      
                      handleDetails(record);
                    
                  }}
              > 
                  Details
              </Button>
              <Button type="primary" onClick={() => handleEdit(record)}>
                  Edit
              </Button>
              <Button danger onClick={() => handleDelete(record)}>
                  Delete
              </Button>
          </Space>
          

    </div>
  )
}

export default Edit