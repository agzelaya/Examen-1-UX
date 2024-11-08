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

  return (
    <AppBar  sx={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))', 
      boxShadow:'none', zIndex: 100, 
      position: 'absolute'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {
           <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
           <img src="/netflixlogo.png" alt="Logo" style={{ height: '60px' }} />
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
              <IconButton color="inherit" sx={{ p:0}}>
                <SearchIcon />
              </IconButton>
            </Tooltip>

            <Button
                variant="text"
                sx={{color: 'white', textTransform:'none',
                  boxShadow: 'none',
                  outline: 'none',
                  p:0,
                  
                  typography:{
                    fontSize: '13px',
                  }
                }}
                disableRipple
              >
                Kids
              </Button>
            

            <Tooltip title="Notifications">
              <IconButton color="inherit" sx={{ p:0 , mr:2}}>
                <NotificationsNoneIcon />
              </IconButton>
            </Tooltip>
            

            

            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0, mr: 1}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ width: 35, height: 35 , borderRadius: '3px'}} />
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
                <IconButton  color="inherit" sx={{p:0 }}>
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

