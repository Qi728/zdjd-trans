import TextField from '@mui/material/TextField';
import Zdjd from 'zdjd'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import '@/scss/trans.scss'
import { useState } from 'react';
import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const Trans = () => {

  const [zd, setZd] = useState('')
  const [jd, setJd] = useState('')

  const showTip = (text: string) => {
    toast(text,
    {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
  }

  const toZd = () => {
    if(!jd) {
      showTip("请输入假嘟!")
      return
    }
    const zdMsg = Zdjd.encode(jd)
    setZd(zdMsg)
    copy(zdMsg)
    toast.success('尊都已复制');
  }

  const toJd = () => {
    if(!zd) {
      showTip("请输入尊嘟!")
      return
    }
    const isZd = Zdjd.isZdjd(zd)
    if(!isZd){
      toast.error("宝贝，你这不是尊嘟")
      return
    }
    const jdMsg = Zdjd.decode(zd)
    setJd(jdMsg)
    copy(jdMsg)
    toast.success('假都已复制');
  }

  const changeZd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const zdMsg = e.target.value
    setZd(zdMsg)
  }

  const changeJd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const jdMsg = e.target.value
    setJd(jdMsg)
  }
  
  return (
    <div className="trans-root">
      <div className="text-zd">
        <TextField 
          onChange={changeZd} 
          value={zd} 
          className='zd-input'  
          label="尊嘟" 
          multiline 
          rows={6}
          variant='filled'
        />
      </div>

    <div className="options">
      <Fab variant="extended" onClick={toJd}>
        <NavigationIcon sx={{ mr: 1 }} style={{transform: "rotate(180deg)"}} />
        假嘟
      </Fab>
      <Fab variant="extended" onClick={toZd}>
        <NavigationIcon sx={{ mr: 1 }} />
        尊嘟
      </Fab>
    </div>

    <div className="text-jd">
      <TextField 
        onChange={changeJd}  
        className='jd-input' 
        value={jd} 
        label="假嘟" multiline
        rows={6}  
      />
      {/* <div className="jd-options">
        <Button className='btn-clean' variant="contained" startIcon={<EditIcon />}>清空</Button>
        <Button className='btn-copy' variant="contained" startIcon={<EditIcon />}>复制</Button>
      </div> */}
    </div>
    <Toaster />
    </div>
  )
}
export default Trans