import React, {  useState } from 'react'
import { useSelect } from '../../../Context/AllContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const ListFontFamily = [
  {
    value: 'Roboto',
    label: 'Roboto',
  }

];
const colors = [
  {
    value: 'black',
    label: 'black'
  },
  {
    value: 'red',
    label: 'red'
  },
  {
    value: 'blue',
    label: 'blue'
  },
]
export default function PdfStyle() {
  const { PdfStyleSetting, setPdfStyleSetting } = useSelect();
  const [TextFontSize, setTextFontSize] = useState(PdfStyleSetting.TextFontSize);
  const [SubHeadingFontSize, setSubHeadingFontSize] = useState(PdfStyleSetting.SubHeadingFontSize);
  const [TextFontColor, setTextFontColor] = useState(PdfStyleSetting.TextFontColor);
  const [SubHeadingColor, setSubHeadingColor] = useState(PdfStyleSetting.SubHeadingColor);
  const [FontFamily, setFontFamily] = useState(PdfStyleSetting.FontFamily);
  const [HeadingFontSize, setHeadingFontSize] = useState(PdfStyleSetting.HeadingFontSize);

  const HandleSaveSetting=()=>{
    setPdfStyleSetting({
      TextFontSize:TextFontSize,
      SubHeadingFontSize: SubHeadingFontSize,
      TextFontColor: TextFontColor,
      SubHeadingColor: SubHeadingColor,
      FontFamily: FontFamily,
      HeadingFontSize: HeadingFontSize
    })
  }
  const HandleResetSetting=()=>{
    setPdfStyleSetting({
      HeadingFontSize: '17',
      TextFontSize:'12',
      SubHeadingFontSize:'14',
      TextFontColor:'black',
      SubHeadingColor:'black',
      FontFamily:'Roboto',
  })
  }
  return (
    <Box>
      <Typography style={{ fontWeight: 'bold', padding: '10px', fontSize: '20px', width: '70%', margin: 'auto' }}>PDF Style</Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{marginLeft:'20px'}}
      >
        <div>
          <TextField
            id="Font color"
            select
            defaultValue={TextFontColor}
            label="Font Color"
            helperText="please select your font color"
          >
            {colors.map((option) => (
              <MenuItem key={option.value} onClick={() => setTextFontColor(option.value)} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="Font size in px"
            required
            type='number'
            label="Font size in px"
            value={TextFontSize}
            onChange={(e) => setTextFontSize(e.target.value)}
            helperText="Please select font size."
          >

          </TextField>
        </div>
        <div>
          <TextField
            id="Font family"
            select
            label="Font Family"
            value={FontFamily}
            helperText="please select your font Family"
          >
            {ListFontFamily.map((option) => (
              <MenuItem key={option.value} onClick={()=>setFontFamily(option.value)} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="SubHeading Font size in px"
            label="SubHeading Font size in px"
            type='number'
            value={SubHeadingFontSize}
            onChange={(e) => setSubHeadingFontSize(e.target.value)}
            helperText="Please enter SubHeading Font size in px."
          >
          </TextField>
        </div>
        <div>
          <TextField
            id="SubHeading Color"
            select
            label="SubHeading Color"
            value={SubHeadingColor}
            helperText="please enter SubHeading Color"
          >
            {colors.map((option) => (
              <MenuItem key={option.value} onClick={()=>setSubHeadingColor(option.value)} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="Heading Font Size in px"
            label="Heading Font Size in px"
            type='number'
            value={HeadingFontSize}
            onChange={(e) => setHeadingFontSize(e.target.value)}
            helperText="Please enter Heading Font Size"
          >
          </TextField> 
        </div>
        <div style={{width:'250px',display:'flex',justifyContent:'space-between'}}>
            <Button variant='contained' style={{width:'47%'}} onClick={HandleSaveSetting}>Save</Button>
          
            <Button  style={{backgroundColor:'rgb(47 54 58)',width:'47%',color:'white'}} onClick={HandleResetSetting}>Reset</Button>
          </div>
          
      </Box>
    </Box>
  );
}