import React, { createContext, useState } from 'react';
import Component2 from './Component2';
import { callGetUserAPI } from './callGetUserAPI';
import { IuserContext } from './Contextvalues.interface';
import { Button, CircularProgress, TextField } from '@mui/material';

const sampleContextData = {
  "firstName": "",
  "lastName": "",
  "userName": "",
  "emailAddress": "",
  "phoneNumber": null,
  "mobilePhoneNumber": "",
  "licenceType": "",
  "departmentName": "",
  "title": "",
  "eulaAcceptedDate": "",
  "smsTnCAcceptedDate": "",
  "emailContactPreference": false,
  "smsContactPreference": false,
  "keepMeUpdated": false,
  "emailNotifications": [],
  "extension": "",
  "facilities": [
    {
      "number": 0,
      "typeCode": "",
      "typeName": "",
      "siteUseId": 1,
      "careGiverId": null,
      "facilityName": null,
      "address1": null,
      "address2": null,
      "city": null,
      "state": null,
      "zipCode": null,
      "mode": 0,
      "facilityAddressID": 1
    }
  ],
  "userPermissions": {
    "userRole": "",
    "permissions": [],
    "pagePermissions": []
  },
  "employeeID": null,
  "userID": 0
}
const userContext = createContext<IuserContext>(sampleContextData);

const Component1 = () => {
  const [data, setData] = useState(sampleContextData);
  const [email,setEmail] = useState('');

  const submitHandler = () => {
    const fecthData = async () => {
      const result = await callGetUserAPI(email);
      setData(result);
    }
    fecthData();
  }

  const changeHandler = (e:any) => {
    setEmail(e.target.value);
  }

  return (
    <div>
      <p>component 1</p>
      <TextField
      sx={{width:'30vw'}}
      onChange={changeHandler}
      >

      </TextField>
      <Button 
      variant='contained'
      sx={{marginLeft:'5vw'}}
      onClick={submitHandler}
      >
        Submit
      </Button>

      <userContext.Provider value={data}>
        {
          data ? (<Component2/>) : (<CircularProgress/>)
        }
      </userContext.Provider>


    </div>
  )
}

export { userContext, Component1 };
