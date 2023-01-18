import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Photos = () => {
  const { albumId } = useParams();
  const [userPhoto, setUserPhoto] = useState<any>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${albumId}`)
      .then((response) => response.json())
      .then((data) => setUserPhoto(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card sx={{ width: 300, maxHeight: "auto" }}>
      <CardActionArea>
        {userPhoto && (
          <CardMedia component="img" image={`${userPhoto.thumbnailUrl}`} />
        )}
        {userPhoto && (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {userPhoto.title}
            </Typography>
          </CardContent>
        )}
        {userPhoto && (
          <Button size="small" color="warning" variant="contained" sx={{m:2}}>
            <Link to={`/`} style={{color: 'white'}}>
              Go to Users list
            </Link>
          </Button>
        )}
      </CardActionArea>
    </Card>
  );
};

export default Photos;
