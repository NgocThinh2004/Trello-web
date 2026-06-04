import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const Menu_Styles = {
  color:'primary.main',
  bgcolor:'white',
  border:'none',
  paddingX:'5px',
  borderRadius:'4px',
  '& .MuiSvgIcon-root':{
    color:'primary.main'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}
function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      gap:2,
      paddingX:2,
      overflowX:'auto',
      borderTop:'1px solid #00bfa5'
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <Chip
          sx = {Menu_Styles}
          clickable
          icon={<DashboardIcon />} label="Thinhnn" />
        <Chip
          sx = {Menu_Styles}
          clickable
          icon={<VpnLockIcon />} label="Public/Private Workspace" />
        <Chip
          sx = {Menu_Styles}
          clickable
          icon={<AddToDriveIcon />} label="Add to Google Drive" />
        <Chip
          sx = {Menu_Styles}
          clickable
          icon={<BoltIcon />} label="Automation" />
        <Chip
          sx = {Menu_Styles}
          clickable
          icon={<FilterListIcon />} label="Filters" />
      </Box>

      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root':{
              width:34,
              height:34,
              fontSize:'16px'
            }
          }}
        >
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-1/649414567_2007330836795928_4932316456686206682_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=f2IBK8ChYckQ7kNvwEn-44_&_nc_oc=AdqzK9p9tvNLj39uR2g2JeM98-uecSCaNkcFu4S0OVGQsQ4OZY1TBRZYavwzHAfzG4B5IGuYIooJiPpb1kLvcvWM&_nc_zt=24&_nc_ht=scontent.fhan14-2.fna&_nc_gid=nG5A_uNiW5hfX0Enu47KOw&_nc_ss=782a8&oh=00_Af8u7_AlYE716-cQ3vPfb6vCrEUTXcXpbkgddg2LUeA7kQ&oe=6A263112" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQlcg72vWBrbxogaSCGCV5-zyFlDCRJi4CzSQP2xySQ&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5LWHka_MrFsEkzJhSSfDoWK60Gnchgc30gmVd4nzyA&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlciIMoG5JyBJWyosqKZPYFHkBB-9UMq60fJo82RyHuA&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MR0fHumLqyB1Xv2or2XD6qc7SL5gbgES-ZhMd415ew&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5oiKfQ2KVjhea0cSzJnIz_ZFpltOfPF1iSaS2scJmA&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj39Qa-Dsfp7eYFaIHp21yrN60UgizA9ZO-SArpnpUSQ&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-1/649414567_2007330836795928_4932316456686206682_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=f2IBK8ChYckQ7kNvwEn-44_&_nc_oc=AdqzK9p9tvNLj39uR2g2JeM98-uecSCaNkcFu4S0OVGQsQ4OZY1TBRZYavwzHAfzG4B5IGuYIooJiPpb1kLvcvWM&_nc_zt=24&_nc_ht=scontent.fhan14-2.fna&_nc_gid=nG5A_uNiW5hfX0Enu47KOw&_nc_ss=782a8&oh=00_Af8u7_AlYE716-cQ3vPfb6vCrEUTXcXpbkgddg2LUeA7kQ&oe=6A263112" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQlcg72vWBrbxogaSCGCV5-zyFlDCRJi4CzSQP2xySQ&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5LWHka_MrFsEkzJhSSfDoWK60Gnchgc30gmVd4nzyA&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlciIMoG5JyBJWyosqKZPYFHkBB-9UMq60fJo82RyHuA&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MR0fHumLqyB1Xv2or2XD6qc7SL5gbgES-ZhMd415ew&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5oiKfQ2KVjhea0cSzJnIz_ZFpltOfPF1iSaS2scJmA&s=10" />
          </Tooltip>
          <Tooltip title="Ngoc Thinh">
            <Avatar alt="Ngoc Thinh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj39Qa-Dsfp7eYFaIHp21yrN60UgizA9ZO-SArpnpUSQ&s=10" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
