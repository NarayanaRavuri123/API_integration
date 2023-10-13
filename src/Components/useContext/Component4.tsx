import React, { useContext } from 'react';
import { userContext } from './Component1';
import { IuserContext } from './Contextvaluestypes';


const Component4 = () => {
  const contextData:IuserContext = useContext(userContext);
  console.log(contextData.);
  return (
    <div>
      <p>component 4</p>
      <p>{contextData}</p>
    </div>
  )
}

export default Component4;
