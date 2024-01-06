"use client"

import { Alert } from "@mozeyinedu/react-lab"
import React, { useEffect, useState, } from 'react'
import Header from './components/Header';
import { useSnap } from '@mozeyinedu/hooks-lab'
import axios from 'axios';
import exportToExcel from "./utils/exportData";
axios.defaults.baseURL = 'http://localhost:4000/api/v1';
// axios.defaults.baseURL = 'https://nee-server.onrender.com/api/v1';


export default function Home() {
  const [extracting, setExtracting] = useState(false);
  const { snap } = useSnap(.5)
  const [msg, setMsg] = useState({ text: "", type: '' })
  const [data, setData] = useState([])

  const extractData = async () => {
    setExtracting(true)

    try {
      const { data } = await axios.get('/extract-data');
      setData(data.data)
      setExtracting(false)
    }
    catch (e) {
      if (e.response) {
        setMsg({ text: e.response.data.msg, type: 'error' });
      }
      else {
        setMsg({ text: e.message, type: 'error' })
      }
      setExtracting(false)
    }
  }

  useEffect(() => {
    exportToExcel(data, setMsg)
  }, [data])

  return (
    <div className=''>
      {/* header */}
      <Header />
      <div className='flex justify-center flex-col h-[50vh]'>

        <div>
          <div className='bg-white rounded-[10px] w-[90vw] m-auto md:w-[400px]'>
            <Alert show={msg.text} type={msg.type} >{msg.text}</Alert>
          </div>
        </div>

        <div className='flex justify-center items-center flex-col mt-[10px]'>
          <div className='text-white p-[10px]'>Extract Data to Local File</div>
          <div className='flex gap-2'>
            <div onClick={extractData} className='bg-white p-[10px] pr-[25px] pl-[25px] rounded-sm cursor-pointer select-none flex-grow-0' {...snap()}>
              {
                extracting ? "Extracting..." : "Extract Data"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}