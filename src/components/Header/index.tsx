import { HeaderDiv, theme } from "./style";
import {useContext, useState} from "react"
import MovieIcon from '@mui/icons-material/Movie';
import HomeIcon from '@mui/icons-material/Home';
import {FaUser} from 'react-icons/fa'
import ExploreIcon from '@mui/icons-material/Explore';
import StarsIcon from '@mui/icons-material/Stars';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Box,ThemeProvider,Modal,Toolbar,Grid,MenuList, Divider,Typography,IconButton,Button,Tooltip,Menu,MenuItem, useMediaQuery, SwipeableDrawer, Input, InputAdornment, InputLabel} from "@mui/material"
import { GenresOfMoviesContext } from "../../context/GenresOfMoviesContext";
export default function Header (){

    const navigate = useNavigate()
    const [elOrigin,setElOrigin] = useState<HTMLElement | null>(null)
    const open = Boolean(elOrigin)
    const [mobileMenu,setMobileMenu] = useState<boolean>(false)
    const [openModal,setOpenModal] = useState<boolean>(false)
    const {genresOfMovies,setGenresOfMovies} = useContext(GenresOfMoviesContext)
    const menuResponsive = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <ThemeProvider theme = {theme}>
            <>
            <HeaderDiv>
                <Box margin={{xs : "0 1rem",sm : "0 1rem",xl : "0 200px"}} width={"auto"} height = "100%">
                    <Toolbar disableGutters sx = {{display : "flex",justifyContent : "space-between"}}>
                       <Box sx = {{mt : "0.6rem",display : "flex",alignItems : "center"}}>
                            <MovieIcon color="secondary" fontSize={"large"}></MovieIcon>
                            <Typography letterSpacing={1} fontWeight={900} sx = {{mt : "0.5rem"}} fontSize = {{xs : "1rem", sm : "2rem"}} variant="body2" color={`${theme.palette.grey[300]}`}>IMovieList</Typography>
                       </Box>
                       {menuResponsive
                       ?
                       <Toolbar>
                        <Box marginTop={"1rem"}>
                            <IconButton onClick = {(eve)=> setMobileMenu(oldValue => !oldValue) } color = "secondary">
                                    <MenuIcon color = "secondary" fontSize="large"></MenuIcon>
                            </IconButton>
                        </Box>
                        <SwipeableDrawer PaperProps={{sx : {backgroundColor : theme.palette.grey[900]}}} onOpen={()=> setMobileMenu(oldValue=> !oldValue)} onClose = {()=>
                            {
                                setMobileMenu(oldValue=> !oldValue)
                            }} open = {mobileMenu}>
                            <Tooltip placement="right" title = "Home page">
                                <IconButton>
                                    <HomeIcon fontSize="large" color = "secondary"></HomeIcon>
                                </IconButton> 
                            </Tooltip>
                            <Tooltip placement="right" title = "Discovery movies">
                                <IconButton onClick = {()=> setOpenModal(oldValue=> !oldValue)}>
                                    <ExploreIcon fontSize="large" color = "secondary"></ExploreIcon>
                                </IconButton>                               
                            </Tooltip>
                            <Tooltip placement="right" title = "Account">
                                <IconButton onClick={(eve)=> 
                                    {
                                        setElOrigin(eve.currentTarget)
                                    }} color = "secondary">
                                    <AccountCircleIcon fontSize="large" color = "secondary"></AccountCircleIcon>
                                </IconButton>
                            </Tooltip>
                            <Menu  anchorOrigin={{horizontal : "right",vertical : "center"}} PaperProps={{sx : { width : "120px",backgroundColor : theme.palette.grey[400] }}} open = {open} anchorEl = {elOrigin} onClose = {()=> setElOrigin(null)}>
                                    <MenuList disablePadding>
                                        <MenuItem>
                                        <Tooltip placement="right" title = {"Profile settings"}>
                                            <Button sx = {{textTransform : "none"}} endIcon = {<BuildCircleIcon sx = {{mb : "0.3rem"}}></BuildCircleIcon>}>
                                                <Typography>
                                                    Profile
                                                </Typography>
                                            </Button>
                                        </Tooltip>
                                        </MenuItem>
                                    </MenuList>
                                    <Divider sx = {{my : 0.5}}></Divider>
                                        <MenuList disablePadding>
                                            <MenuItem>
                                            <Tooltip placement="right" title = "Exit">
                                                <Button sx = {{textTransform : "none"}} endIcon = {<LogoutIcon sx = {{textTransform : "none",mb : "0.3rem"}}></LogoutIcon>}>
                                                    <Typography variant="body2">
                                                        Logout
                                                    </Typography>
                                                </Button>
                                            </Tooltip>
                                            </MenuItem>
                                        </MenuList>
                            </Menu> 
                        </SwipeableDrawer>
                       </Toolbar> 
                       : 
                       <Box sx = {{mt : "0.8rem",display : "flex",alignItems : "center"}}>
                            <Tooltip title = "Home page">
                                <Button sx = {{display : "flex",alignItems : "center"}} startIcon = {<HomeIcon fontSize="large" color = "secondary"></HomeIcon>}>
                                <Typography  fontWeight={600} sx = {{mt : "0.3rem"}} fontSize={"1rem"} variant="body2" color={`${theme.palette.grey[300]}`}>Home</Typography>
                                </Button>
                            </Tooltip>
                            <Tooltip title = "Discovery movies">
                                <Button onClick = {()=> setOpenModal(oldValue=> !oldValue)} sx = {{display : "flex",alignItems : "center"}} startIcon = {<ExploreIcon fontSize="large" color = "secondary"></ExploreIcon>}>
                                <Typography  fontWeight={600} sx = {{mt : "0.2rem"}} fontSize={"1rem"} variant="body2" color={`${theme.palette.grey[300]}`}>Discovery</Typography>
                                </Button>
                            </Tooltip>
                            <Tooltip title = "Account">
                                <IconButton onClick={(eve)=> 
                                    {
                                        setElOrigin(eve.currentTarget)
                                    }} color = "secondary">
                                    <AccountCircleIcon fontSize="large" color = "secondary"></AccountCircleIcon>
                                </IconButton>
                            </Tooltip>
                            <Menu PaperProps={{sx : {backgroundColor : theme.palette.grey[400] }}} open = {open} anchorEl = {elOrigin} onClose = {()=> setElOrigin(null)}>
                                    <MenuList>
                                        <MenuItem>
                                        <Tooltip placement="left" title = {"Profile settings"}>
                                            <Button endIcon = {<BuildCircleIcon sx = {{mb : "0.3rem"}}></BuildCircleIcon>}>
                                                <Typography>
                                                    Profile
                                                </Typography>
                                            </Button>
                                        </Tooltip>
                                        </MenuItem>
                                    </MenuList>
                                    <Divider sx = {{my : 0.5}}></Divider>
                                        <MenuList>
                                            <MenuItem>
                                            <Tooltip placement="left" title = "exit">
                                                <Button endIcon = {<LogoutIcon sx = {{mb : "0.3rem"}}></LogoutIcon>}>
                                                    <Typography>
                                                        Logout
                                                    </Typography>
                                                </Button>
                                            </Tooltip>
                                            </MenuItem>
                                        </MenuList>
                            </Menu>
                        </Box>}
                       
                    </Toolbar>
                </Box>
            </HeaderDiv>
        <Modal sx = {{mt : "0",display : "flex",justifyContent : "center",alignItems : "center"}} open = {openModal} onClose = {()=> setOpenModal(oldValue=> !oldValue)}>
            <Box width = "auto" height = "auto">
                <Box height = "auto" overflow={"auto"} display = "flex" flexDirection={"column"} alignItems = "center" justifyContent= "center"  borderRadius={"5px"} padding={"1rem"} sx = {{backgroundColor : theme.palette.grey[900]}}>
                    <Box gap = "5px" display = "flex" justifyContent= "center" alignItems={"center"}>
                        <InputLabel htmlFor="search"><Button variant="outlined"><Typography fontSize = "0.7rem" color = "secondary">Search</Typography></Button></InputLabel>
                        <Input id = "search" startAdornment = {<InputAdornment position = "start"><SearchIcon color = "secondary"></SearchIcon></InputAdornment>}></Input>
                    </Box>
                    <Box margin = {"2rem 0 2rem 0"} position = "relative" display = "flex" justifyContent={"center"} alignItems = "center" width = "100%" height = "50px">
                        <Typography sx = {{display  :"flex",gap :"4px"}} color = {theme.palette.grey[400]} fontWeight={400}>You have<Typography fontWeight={900}>2</Typography>results</Typography>
                        <Button sx = {{position : "absolute", bottom : 0, right : 0}}>Show</Button>
                    </Box>
                    <hr style ={{width : "100%"}}></hr>
                    <Box display = "flex" justifyContent={"start"} gap = "5px" mt = "0.5rem" width = "auto" height = "auto">
                        <Button variant="outlined"><Typography textTransform={"none"} variant = "body2">Genres</Typography></Button>
                    </Box>
                    <Grid justifyContent={"center"} rowSpacing={3} margin = {"1rem"} padding={"0 1rem"} columnSpacing = {0} columns = {2}
                    overflow={"auto"} container width={"300px"} 
                    height = {100}>
                        {genresOfMovies.map((genre)=>
                        {
                            return <Grid item xs = {1} display={"flex"} justifyContent = "center">
                                        <Button sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary"><Typography variant = "body2">{genre.name}</Typography></Button>
                                   </Grid> 
                        })}
                    </Grid>
                    <hr style ={{width : "100%"}}></hr>               
                    <Box display = "flex" justifyContent={"start"} gap = "5px" mt = "1.5rem" width = "auto" height = "auto">
                        <Button variant="outlined"><Typography textOverflow={"ellipsis"} textTransform={"none"} variant = "body2">Streaming Platforms</Typography></Button>     
                    </Box> 
                    <Grid justifyContent={"center"} rowSpacing={2} margin = {"1rem 0rem"} padding={"0 1rem"} columns = {1}
                    overflow={"auto"} container width={"300px"}
                    height = {120}>
                        <Grid item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Netflix</Button>
                                    </Grid> 
                                    <Grid padding = "1rem" item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Prime Video</Button>
                                    </Grid> 
                                    <Grid padding = "1rem" item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Hbo Max</Button>
                                    </Grid> 
                                    <Grid padding = "1rem"item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Disney Plus</Button>
                                    </Grid> 
                                    <Grid padding = "1rem" item xs = {1} display={"flex"} justifyContent = "center">
                                            <Button sx = {{width : "120px",height: "50px"}} variant = "contained" color = "secondary">Globo Play</Button>
                                    </Grid> 
                    </Grid>
                </Box>
            </Box>
        </Modal>
            </>
        </ThemeProvider>
        )
}