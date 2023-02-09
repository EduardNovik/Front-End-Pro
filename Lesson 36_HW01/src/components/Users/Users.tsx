import React from 'react';
import { useEffect} from "react";
import { Link } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import  {fetchUsersMiddleware} from '../../rdx/usersSlice'
import { AppDispatch } from '../../rdx/store';

const Users = () => {
  const fetchData = useSelector((state:any) => state.fetchData.data)
  const dispatch = useDispatch<AppDispatch>()
  
  
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users"
    dispatch(fetchUsersMiddleware(url))
  }, []);
  
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {fetchData &&
        fetchData.map((item: any) => {
          return (
            <Grid item xs={6} key={Math.random() * 1000}>
              <Card sx={{ maxWidth: 345, p: 2 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.email}
                  </Typography>
                </CardContent>
                <Button size="small" color="warning" variant="contained">
                  <Link to={`/albums/${item.id}`} style={{ color: "white" }}>Albums</Link>
                </Button>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Users;