import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../rdx/store";
import { fetchPhotosMiddleware } from "../../rdx/photosSlice";

const Photos = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch<AppDispatch>()
  const fetchPhotos = useSelector((state:any) => state.fetchPhotosData.data)


  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    dispatch(fetchPhotosMiddleware(URL))
  }, []);

  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {fetchPhotos && fetchPhotos.map((item:any) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button variant="contained" size='small'>
        <Link to={'/'} style={{color:'white'}}>Home page</Link>
      </Button>
    </div>
  );
};

export default Photos;
