import { Input } from 'antd'
import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {

  return (
    <div
      style={{
        position: 'fixed',
        top: "18px",
        left: "330px",
        zIndex  :"32"
    }}
    >
      <Input
        style={{
          height: "30px",
          borderRadius: "2px",
          width: "250px"
        }}
        onChange={((e)=>{ setSearchTerm(e.target.value)})}
        value= { searchTerm }
       placeholder='Enter here to search...'
      />
    </div>
  )
}

export default SearchBar