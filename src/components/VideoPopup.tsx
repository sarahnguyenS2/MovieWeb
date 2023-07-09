import { Movie } from '../shared/listOfMovie'
import { Box, Button } from '@mui/material'

interface VideoPopupProps {
  movie: Movie
  onClose: () => void
}

const VideoPopup = ({ movie, onClose }: VideoPopupProps) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '80%',
          maxWidth: 800,
          backgroundColor: 'black',
          borderRadius: '8px'
        }}
      >
        <iframe
          title='YouTube video player'
          width='100%'
          height='400'
          src={movie.trailer}
          frameBorder='0'
          allowFullScreen
        ></iframe>
        <Button
          variant='contained'
          color='error'
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '-1rem',
            right: '-1rem',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            minWidth: 0,
            minHeight: 0,
            padding: 0
          }}
        >
          X
        </Button>
      </Box>
    </Box>
  )
}

export default VideoPopup
