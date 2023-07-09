import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Info } from '@mui/icons-material'
import { Movie } from '../shared/listOfMovie'

interface MoviePresentationProps {
  movies: Movie[]
}

export default function MoviePresentation({ movies }: MoviePresentationProps) {
  const navigate = useNavigate()
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null)

  const handleToggleDetails = (movieId: number) => {
    if (expandedCardId === movieId) {
      setExpandedCardId(null)
    } else {
      setExpandedCardId(movieId)
    }
  }
  return (
    <Grid
      bgcolor='var(--black-color)'
      container
      spacing={3}
      sx={{
        marginTop: '0',
        // marginBottom: '5rem',
        padding: '10px 30px 030px'
      }}
    >
      {movies.map((movie) => (
        <Grid xs={12} sm={6} lg={3} item key={movie.id}>
          <Card sx={{ backgroundColor: 'var(--black-light-color)', color: 'var(--white-color)', fontWeight: '700' }}>
            <CardMedia sx={{ height: '300px' }} image={movie.image} title={movie.title} />
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  onClick={() => handleToggleDetails(movie.id)}
                  style={{ cursor: 'pointer' }}
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    cursor: 'default',
                    '&:hover': {
                      color: 'var(--primary-color)'
                    }
                  }}
                >
                  {movie.title}
                </Typography>
                <Button
                  startIcon={<Info sx={{ color: 'var(--primary-color)', width: 'fit-content' }} />}
                  onClick={() => {
                    navigate(`/detail/${movie.id}`)
                  }}
                  sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                    '&:active': { backgroundColor: 'transparent' },
                    justifyContent: 'flex-end'
                  }}
                />
              </div>
              {expandedCardId === movie.id && (
                <>
                  <Typography>
                    <strong>Nation:</strong> {movie.nation}
                  </Typography>
                  <Typography>
                    <strong>Year:</strong> {movie.year}
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
