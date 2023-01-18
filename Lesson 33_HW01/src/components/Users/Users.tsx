import React from 'react';
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Users = () => {
  const [usersInfo, setUsersInfo] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsersInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {usersInfo &&
        usersInfo.map((item: any) => {
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