import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
export const Subscription = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data);


  useEffect(() => {
    // dispatch(getAdmins())
  }, [])
  return (
    <div>Subscription</div>
  )
}
