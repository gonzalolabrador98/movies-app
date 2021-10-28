import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Modal from '../modal/Modal';
import { Rating, Stack } from '@mui/material';

export default function Movie({
  title,
  img,
  rating,
  overview,
  votes,
  release,
}) {
  const urlImg = 'https://image.tmdb.org/t/p/w500';

  const isMobile = useMediaQuery('(max-width:600px)');

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <Card
        onClick={handleOpen}
        sx={{
          boxShadow: 'none',
          backgroundColor: 'transparent',
          flex: isMobile ? '50%' : '25%',
          color: 'white',
          flexGrow: 0,
        }}
      >
        <div
          style={{ margin: 8, backgroundColor: '#282828', borderRadius: 10 }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={`${urlImg}${img}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
            <Stack spacing={1}>
              <Rating
                name="size-medium"
                defaultValue={rating}
                max={10}
                readOnly
              />
            </Stack>
            <Typography gutterBottom variant="h6" component="div">
              {rating}
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
              Votation: {votes}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        overview={overview}
        title={title}
        release={release}
        rating={rating}
      />
    </>
  );
}
