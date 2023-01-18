import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';


const Albums = () => {
    const {userId} = useParams()
    const [userAlbum, setUserAlbum] = useState <any> ()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums/${userId}`)
        .then(response =>response.json())
        .then(data => setUserAlbum(data))
        .catch(err => console.log(err))
    },[])

    return (
      <Card sx={{ width: 345, height: 130 }}>
        {userAlbum &&
        <CardContent>
            <Typography variant="body2" color="text.secondary">Album title:</Typography>
            <Typography variant="body1" color="text.secondary">{userAlbum.title}</Typography>
        </CardContent>
        }
        {userAlbum && 
        <CardActions>
            <Button size="small" color="warning" variant="contained">
                <Link to={`/photos/${userAlbum.id}`} style={{color: 'white'}}>Photos</Link>
            </Button>
        </CardActions>
        }
      </Card>
    );
};

export default Albums;