import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from './bll/store'
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
  // useSelector, useDispatch
  const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
  const dispatch = useDispatch()
  const loading = false

  const setLoading = () => {
    // dispatch
    dispatch(loadingAC(true));

    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 500)
  };

  return (
    <div>
      <hr/>
      homeworks 10

      {/*should work (должно работать)*/}
      {loading
        ? (
          <div>крутилка...</div>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
