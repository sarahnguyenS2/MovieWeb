import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import MovieFilterIcon from '@mui/icons-material/MovieFilter'
import { Link, useNavigate } from 'react-router-dom'
import useActivePath from '../hooks/useActivePath'

const pages = ['Home', 'About', 'News', 'Contact']

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  const activePath = useActivePath(pages)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='static' sx={{ backgroundColor: 'var(--black-light-color)' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MovieFilterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            MOVIE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor:
                      activePath === (page === 'Home' ? '/' : `/${page.toLowerCase()}`)
                        ? 'var(--primary-color)'
                        : 'inherit',
                    color:
                      activePath === (page === 'Home' ? '/' : `/${page.toLowerCase()}`)
                        ? 'var(--white-color)'
                        : 'inherit'
                  }}
                >
                  <Typography
                    component={Link}
                    to={page === 'Home' ? '/' : `/${page.toLocaleLowerCase()}`}
                    textAlign='center'
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MovieFilterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            MOVIE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, margin: '0 4rem' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  navigate(page === 'Home' ? '/' : `/${page.toLocaleLowerCase()}`)
                }}
                sx={{
                  my: 2,
                  display: 'block',
                  backgroundColor:
                    activePath === (page === 'Home' ? '/' : `/${page.toLowerCase()}`)
                      ? 'var(--primary-color)'
                      : 'inherit',
                  color:
                    activePath === (page === 'Home' ? '/' : `/${page.toLowerCase()}`)
                      ? 'var(--white-color)'
                      : 'inherit',
                  margin: '0 15px',
                  fontWeight: 700,
                  '&:hover': {
                    backgroundColor: 'var(--primary-light-color)'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
