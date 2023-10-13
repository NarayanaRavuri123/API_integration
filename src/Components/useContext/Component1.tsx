import React, { createContext, useState } from 'react';
import Component2 from './Component2';
import { callGetUserAPI } from './callGetUserAPI';
import { useEffect } from 'react';
import { IuserContext } from './Contextvaluestypes';

const userContext = createContext<IuserContext>(
  {
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
        "siteUseId": "",
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
  
);

const Component1 = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const result = await callGetUserAPI();
      setData(result);
    }
    fetchdata();
  });

  return (
    <div>
      <p>component 1</p>
      <h1>{data} </h1>
      <userContext.Provider value={data}>
        <Component2 />
      </userContext.Provider>


    </div>
  )
}

export {userContext,Component1};
