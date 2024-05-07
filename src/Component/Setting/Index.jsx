import React, { useState } from 'react'
import LeftSideBar from './LeftSideBar'
import Setting from './SettingType/Setting'

function Index() {
  const [settingType,setSettingType] = useState();
  return (
    <div style={{width:'100%', display:'flex',height:'100vh'}}>
        <div style={{width:'15%',backgroundColor:'#666665'}}>
            <LeftSideBar setSettingType={setSettingType}/>
        </div>
        <div style={{width:'85%',backgroundColor:'#adadac'}}>
            <Setting settingType={settingType}/>
        </div>
    </div>
  )
}

export default Index