import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import  {useState, useEffect} from "react"

const pages = ['Home', 'TV Shows', 'Movies','New & Popular', 'My List','Browse by Languages'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar  sx={{ 
      position: scrolled?'fixed':'absolute',
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))', 
      boxShadow:'none', zIndex: 100, 
      width: '100%',
      left:0, right:0
      
    }}>
      <Container maxWidth= {false} sx={{background: scrolled?'#141414':'transparent',transition: 'background-color 0.5s ease-in-out', width:'100%', left:0, right:0}}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2,
              width: { xs: '70px', sm: '80px', md: '90px', lg: '100px' }, 
              height: 'auto',
              p:0
             }}>
              <img src="/netflixlogo.png" alt="Logo" style={{ width: '100%' }} />
            </Box>}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', color:'white' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {
          }
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            {pages.map((page) => (
              <Button
                variant="text"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textTransform:'none',
                  boxShadow: 'none',
                  outline: 'none',
                  fontWeight: 'normal',
                  
                  typography:{
                    fontSize: '14px',
                  }
                }}
                disableRipple
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, gap: 1 }}>

            <Tooltip title="Search">
              <IconButton color="inherit" sx={{
                p: 0,
                '@media (max-width: 275px)': {
                  display: 'none',
                }
              }}>
                <SearchIcon />
              </IconButton>
            </Tooltip>

            <Button
                variant="text"
                sx={{color: 'white', textTransform:'none',
                  boxShadow: 'none',
                  outline: 'none',
                  p:0,
                  display: { xs: 'none', md:'inline-flex'},
                  typography:{
                    fontSize: '13px',
                  }
                }}
                disableRipple
              >
                Kids
              </Button>
            

            <Tooltip title="Notifications">
              <IconButton color="inherit" sx={{ p:0 , mr:2, ml:1, '@media (max-width: 244px)': {
                  display: 'none',
                }}}>
                <NotificationsNoneIcon />
              </IconButton>
            </Tooltip>
            

            

            <Tooltip title="Profile">
              <IconButton  sx={{ p: 0, mr: 1 }}>
                <Avatar alt="Remy Sharp" src="/avatar.jpg" sx={{ borderRadius: '3px', width: { xs: '20px', sm: '20px', md: '35px', lg: '35px' }, height: 'auto' }} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px', p: 0, width: 'auto', maxWidth: '250px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center', color:'white'}}>{setting}</Typography>
                </MenuItem>
              //onClick={handleOpenUserMenu} 
              ))}
            </Menu>

            <Tooltip title="Open settings">
                <IconButton  color="inherit" sx={{p:0, display: { xs: 'none', md:'inline-flex'} } }>
                  <ArrowDropDownIcon />
                </IconButton>
              </Tooltip>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

