import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { postCategory } from '../../../redux/actions/AllActions'

const CreateCategory = ({
    setIsCreateModelVisible,
    isCreateModelVisible,
    workFunction

}) => {

    const [name, setName] = useState('')
    const handleSubmit = async () => {
        const data = await  postCategory(name);
       
        if (data?.status) {
            setIsCreateModelVisible(false);
            workFunction();
        } else {
            console.log(data);
        }
        
    }






  return (
      <div>
          <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
          />
          <Button 
            style ={{
                marginTop : "20px"
              }}
                
          type="primary" onClick={() => {
            handleSubmit()

           }}>
              Create Category
          </Button>
          
          
          
    </div>
  )
}

export default CreateCategory