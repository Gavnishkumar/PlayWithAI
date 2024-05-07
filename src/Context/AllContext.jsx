import { createContext, useContext, useState } from "react";

const AllContext= createContext();

export const AllContextProvider=({children})=>{
    const [selectedChat,setSelectedChats] = useState([]);
    const [user,setUser]= useState()
    const [PdfStyleSetting,setPdfStyleSetting]=useState({
        HeadingFontSize: '17',
        TextFontSize:'12',
        SubHeadingFontSize:'14',
        TextFontColor:'black',
        SubHeadingColor:'black',
        FontFamily:'Roboto',
    });
   return(
        <AllContext.Provider value={{selectedChat,setSelectedChats,PdfStyleSetting,setPdfStyleSetting,user,setUser}}>{children}</AllContext.Provider>
    )
}
export const useSelect=()=>{
    const {selectedChat,setSelectedChats,PdfStyleSetting,setPdfStyleSetting,user,setUser}= useContext(AllContext);
    return {selectedChat,setSelectedChats,PdfStyleSetting,setPdfStyleSetting,user,setUser};
}