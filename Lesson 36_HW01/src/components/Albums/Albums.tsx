import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, Grid} from "@mui/material";
import { fetchAlbumsMiddleware } from "../../rdx/albumsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../rdx/store";


const Albums = () => {
  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>()
  const fetchAlbums = useSelector((state:any) => state.fetchAlbumsData.data)

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/user/${userId}/albums`
    dispatch(fetchAlbumsMiddleware(URL))
  }, []);

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
      {fetchAlbums &&
        fetchAlbums.map((item: any) => {
          return (
            <Grid item xs={6} key={Math.random()*1000}>
              <Card sx={{ maxWidth: 320, height:150, p: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{p: 1}}>
                  Album title:
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{p: 2}}>
                  {item.title}
                </Typography>
                <Button size="small" color="warning" variant="contained">
                  <Link to={`/photos/${item.id}`} style={{ color: "white" }}>
                    Photos
                  </Link>
                </Button>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Albums;
