import React, { useContext } from 'react';
import { userContext } from './Component1';
import { IuserContext } from './Contextvalues.interface';
import { Box, Grid, Paper } from '@mui/material';



const Component4 = () => {
  const contextData: IuserContext = useContext(userContext);
  console.log(contextData);
  const handleNullorEmpty =(value: string | null) => {
    if(value===null || value ==="") {
      return "--";
    }
    else {
      return value;
    }

  }
  return (
    <div>
      <p>component 4</p>
      <p>{contextData.emailAddress}</p>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": {
            m: 1,
            width: "80%",
            minHeight: "200px",
            height: "auto"
          }
        }}
      >
        <Paper elevation={14} >
          <Grid container spacing={2}>
            <Grid item xs={6} >
              <h5>Name</h5>
              <p>{handleNullorEmpty(contextData.firstName + "" +contextData.lastName)}</p>
            </Grid>
            <Grid item xs={6}>
              <h5>Phone number</h5>
              <p>{handleNullorEmpty(contextData.mobilePhoneNumber)}</p>
            </Grid>
            <Grid item xs={6}>
              <h5>Email Address</h5>
              <p>{handleNullorEmpty(contextData.emailAddress)}</p>
            </Grid>
            <Grid item xs={6}>
              <h5>Department Name</h5>
              <p>{handleNullorEmpty(contextData.departmentName)}</p>
            </Grid>
            <Grid item xs={6}>
              <h5>License Type</h5>
              <p>{handleNullorEmpty(contextData.licenceType)}</p>
            </Grid>
            <Grid item xs={6}>
              <h5>Title</h5>
              <p>{handleNullorEmpty(contextData.title)}</p>
            </Grid>
            <Grid item xs={6}>
              <h5>Employee ID</h5>
              <p>{handleNullorEmpty(contextData.employeeID)}</p>
            </Grid>
          </Grid>

        </Paper>

      </Box>


    </div>
  )
}

export default Component4;
