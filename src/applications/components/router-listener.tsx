import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import context from  '../../utils/Context';
import { useContext } from 'react';
import PlatFormContext from "../../utils/Context";

export function RouterListener({children}:{ children: React.ReactNode}){
  
  const location = useLocation();
  const navigate = useNavigate();
  const {platform, region} = useContext(context);

    useEffect(() => {
      console.log(location);
      
    }, [location])
    
    return <>
      <PlatFormContext.Provider value={{navigate, platform, region}} >    
        {children}
      </PlatFormContext.Provider>
    </>;
}