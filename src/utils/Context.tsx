import  {createContext } from 'react'
import { NavigateFunction } from 'react-router-dom';

const PlatFormContext = createContext<{platform: string, region: string, navigate?: NavigateFunction}>({platform : '', region: ''});

export default PlatFormContext;