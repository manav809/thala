import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Images() {
  return (
    <ImageList sx={{ width: 600, height: 400 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://media.giphy.com/media/WDNszsLbxgVtE8Entw/giphy.gif',
    author: '@sakinator',
  },
  {
    img: 'https://media.giphy.com/media/2pVG9td6mpC2nakk8X/giphy-downsized-large.gif',
    author: '@flexwithadarsh',
  },
];


