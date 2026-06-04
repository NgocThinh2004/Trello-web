import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding:0 }}
          aria-controls={open ? 'basic-button-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="NgocThinh"
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-1/649414567_2007330836795928_4932316456686206682_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=f2IBK8ChYckQ7kNvwEn-44_&_nc_oc=AdqzK9p9tvNLj39uR2g2JeM98-uecSCaNkcFu4S0OVGQsQ4OZY1TBRZYavwzHAfzG4B5IGuYIooJiPpb1kLvcvWM&_nc_zt=24&_nc_ht=scontent.fhan14-2.fna&_nc_gid=nG5A_uNiW5hfX0Enu47KOw&_nc_ss=782a8&oh=00_Af8u7_AlYE716-cQ3vPfb6vCrEUTXcXpbkgddg2LUeA7kQ&oe=6A263112"
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
      >
        <MenuItem >
          <Avatar sx={{ width:28, height:28, mr:2 }}/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width:28, height:28, mr:2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles