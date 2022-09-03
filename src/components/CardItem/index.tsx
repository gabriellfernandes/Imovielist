import { ReactElement, useContext } from "react";
import {
  CardContent,
  CardActions,
  CardMedia,
  ThemeProvider,
  Typography,
  useMediaQuery,
  Button,
  Box,
  Tooltip,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { IResults } from "../../interfaces/axiosReponseApiTmdb";
import { CardItemStyled, theme } from "./style";
import { base_ImageUrl } from "../../services/api";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

interface ICardItemProps {
  movies: IResults;
}
function CardItem({ movies }: ICardItemProps): ReactElement {
  const { setMovie_Id } = useContext(AuthContext);
  const navigate = useNavigate();
  function movieNavigate() {
    navigate("/movie");
  }

  return (
    <ThemeProvider theme={theme}>
      <CardItemStyled>
        <CardMedia
          height={"60%"}
          component="img"
          image={`${base_ImageUrl}${movies.backdrop_path}`}
          onClick={() => {
            setMovie_Id(movies.id);
            window.scrollTo(0, 0);
            movieNavigate();
          }}
        ></CardMedia>
        <CardContent>
          <Typography
            noWrap
            fontWeight={700}
            color={theme.palette.grey[400]}
            variant="body1"
          >
            {movies.original_title}
          </Typography>
          <Typography variant="body2" color="GrayText">
            Popularity
          </Typography>
          <Box position={"relative"} display={"flex"}>
            <Typography variant="body2" color="GrayText">
              {movies.popularity}
            </Typography>
            <Visibility
              sx={{
                width: "10px",
                height: "10px",
                position: "absolute",
                right: "0",
              }}
              color="primary"
            ></Visibility>
          </Box>
        </CardContent>
        <CardActions>
          <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Button
              size="small"
              sx={{ fontWeight: 600 }}
              color="primary"
              variant="text"
              onClick={() => {
                setMovie_Id(movies.id);
                window.scrollTo(0, 0);
                movieNavigate();
              }}
            >
              more
            </Button>
            {movies.overview ? (
              <Tooltip title={movies.overview}>
                <Button>
                  <Typography variant="body2" color="GrayText">
                    Resume
                  </Typography>
                </Button>
              </Tooltip>
            ) : (
              <Button disabled>
                <Typography
                  sx={{ textDecoration: "line-through", opacity: 0.5 }}
                  variant="body2"
                  color="GrayText"
                >
                  Resume
                </Typography>
              </Button>
            )}
          </Box>
        </CardActions>
      </CardItemStyled>
    </ThemeProvider>
  );
}
export { CardItem };
