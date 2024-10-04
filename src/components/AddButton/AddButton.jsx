import { Button } from 'antd'
import React from 'react'

const AddButton = ({ setIsCreateModelVisible, title }) => {
  return (
      <div>
          <div
              style={{
                  width: "100%",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
              }}
          >
              <Button
                  type="primary"
                  onClick={() => { setIsCreateModelVisible(true) }}
              >+ {title}</Button>
          </div>
    </div>
  )
}

export default AddButton