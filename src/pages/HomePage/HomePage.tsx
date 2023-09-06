import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTouristList, touristList, touristStatus } from 'src/store/touristSlice'
import ProtectedLayout from 'src/components/layout/ProtectedLayout'
import { AppDispatch } from 'src/store'

export default function Homepage() {
  const dispatch = useDispatch<AppDispatch>()
  const touristListData = useSelector(touristList)
  // const touristStatusData = useSelector(touristStatus)

  useEffect(() => {
    // if (touristStatusData === 'idle') {
    dispatch(getTouristList())

    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(touristListData, 'touristListData')

  return (
    <ProtectedLayout>
      {/* <div id="sidebar"> */}
      <h1>Homepage</h1>
      <ul>
        {touristListData.map((item: any, index: any) => (
          <li key={index}>{item.tourist_name} </li>
        ))}
      </ul>
      {/* <div id="detail"></div> */}
    </ProtectedLayout>
  )
}
