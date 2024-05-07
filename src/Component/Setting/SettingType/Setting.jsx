
import React from 'react'
import PdfStyle from './PdfStyle';
import DarkMode from './DarkMode';
function Setting(props) {
  const { settingType } = props;
  let component;
  switch (settingType) {
    case "Mode":
      component = <DarkMode />;
      break;
    case "PdfStyle":
      component = <PdfStyle />;
      break;
    default:
      component = null;
      break;
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {component}
    </div>
  );
}


export default Setting