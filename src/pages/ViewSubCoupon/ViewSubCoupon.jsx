import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const ViewSubCoupon = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data);

  const [isEditingModelVisible, setIsEditingModelVisible] = useState(false)
  const [isCreateModelVisible, setIsCreateModelVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState(null)
  const [createRecord, setCreateRecord] = useState(null);


  const [allData, setAllData] = useState([]);
  useEffect(() => {
    setAllData(data)
  }, [data])



  useEffect(() => {
    // dispatch(getAdmins())
  }, [])
  return (
    <div>ViewSubCoupon</div>
  )
}

export default ViewSubCoupon