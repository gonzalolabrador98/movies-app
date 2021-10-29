import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Rating, Stack } from '@mui/material';

export default function Modal({
  open,
  onClose,
  title,
  overview,
  release,
  rating,
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          backgroundColor: '#282828',
          padding: 10,
          color: 'white',
        }}
      >
        {title}
      </DialogTitle>

      <DialogContent
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          backgroundColor: '#3D3D3D',
          padding: 20,
          color: 'white',
        }}
      >
        <DialogContentText style={{ color: 'white' }}>
          {overview}
        </DialogContentText>
        <hr />
        <DialogContentText style={{ color: 'white' }}>
          Release: {release}
        </DialogContentText>
        <Stack style={{ alignItems: 'center' }} spacing={1}>
          <Rating name="size-medium" defaultValue={rating} max={10} readOnly />
        </Stack>
        <DialogContentText style={{ color: 'white' }}>
          {rating}
        </DialogContentText>
      </DialogContent>

      <DialogActions
        style={{
          backgroundColor: '#282828 ',
        }}
      >
        <Button
          style={{
            color: 'black',
            backgroundColor: '#fff9',
            margin: 8,
          }}
          onClick={onClose}
        >
          Back
        </Button>
      </DialogActions>
    </Dialog>
  );
}
