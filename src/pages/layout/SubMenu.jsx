import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Container, Grid, Paper } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SubMenu({
  handleClose,
  openSubmenu,
  setOpenSubmenu,
  handleSubmenuClickOpen,
  handleSubmenuClose,
}) {
  const theme = useTheme();

  const menuBox = {
    p: 4,
    display: "flex",
    borderRadius: "20px",
    boxShadow: "none",
    border: `1px solid ${theme.palette.border.main}`,
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  };
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={openSubmenu}
        onClose={handleSubmenuClose}
        TransitionComponent={Transition}
      >
        {/* <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar> */}
        <Container maxWidth="lg" sx={{ height: "100%", position: "relative" }}>
          <br /> <br />
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs="auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                style={{ marginTop: "5px" }}
              >
                <path
                  d="M18.0399 8.30989C19.3986 8.30989 20.5 7.20851 20.5 5.84989C20.5 4.49127 19.3986 3.38989 18.0399 3.38989C16.6813 3.38989 15.58 4.49127 15.58 5.84989C15.58 7.20851 16.6813 8.30989 18.0399 8.30989Z"
                  stroke="#BE185D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.96001 8.30989C8.31863 8.30989 9.42 7.20851 9.42 5.84989C9.42 4.49127 8.31863 3.38989 6.96001 3.38989C5.60139 3.38989 4.5 4.49127 4.5 5.84989C4.5 7.20851 5.60139 8.30989 6.96001 8.30989Z"
                  stroke="#BE185D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.0399 20.6099C19.3986 20.6099 20.5 19.5086 20.5 18.1499C20.5 16.7913 19.3986 15.6899 18.0399 15.6899C16.6813 15.6899 15.58 16.7913 15.58 18.1499C15.58 19.5086 16.6813 20.6099 18.0399 20.6099Z"
                  stroke="#BE185D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.96001 20.6099C8.31863 20.6099 9.42 19.5086 9.42 18.1499C9.42 16.7913 8.31863 15.6899 6.96001 15.6899C5.60139 15.6899 4.5 16.7913 4.5 18.1499C4.5 19.5086 5.60139 20.6099 6.96001 20.6099Z"
                  stroke="#BE185D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Grid>
            <Grid item xs="auto">
              {" "}
              <Typography
                variant="h5"
                color="primary.main"
                sx={{ textAlign: "center" }}
              >
                KYC Request Navigation
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container alignItems="center" spacing={2.5}>
            <Grid item xs={4}>
              <Paper
                sx={{ ...menuBox }}
                component={Link}
                to="/table"
                onClick={() => {
                  handleClose();
                  handleSubmenuClose();
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    <Grid container alignItems="center" spacing={2.5}>
                      <Grid item xs="auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          style={{ position: "relative", top: 3 }}
                        >
                          <path
                            d="M11.5 19.5H21.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.5 12.5H21.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.5 5.5H21.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.5 5.5L4.5 6.5L7.5 3.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.5 12.5L4.5 13.5L7.5 10.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Grid>
                      <Grid item xs="auto">
                        <Typography
                          variant="base"
                          color="text.main"
                          sx={{ fontWeight: 400 }}
                        >
                          Partial KYC List
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <MoreVertIcon sx={{ color: theme.palette.text.fade }} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{ ...menuBox }}
                component={Link}
                to="/table"
                onClick={() => {
                  handleClose();
                  handleSubmenuClose();
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    {" "}
                    <Grid container alignItems="center" spacing={2.5}>
                      <Grid item xs="auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          style={{ position: "relative", top: 3 }}
                        >
                          <path
                            d="M21.25 13.25C21.25 18.08 17.33 22 12.5 22C7.67 22 3.75 18.08 3.75 13.25C3.75 8.42 7.67 4.5 12.5 4.5C17.33 4.5 21.25 8.42 21.25 13.25Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 8V13"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.5 2H15.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Grid>
                      <Grid item xs="auto">
                        <Typography
                          variant="base"
                          color="text.main"
                          sx={{ fontWeight: 400 }}
                        >
                          Pending KYC List
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <MoreVertIcon sx={{ color: theme.palette.text.fade }} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{ ...menuBox }}
                component={Link}
                to="/table"
                onClick={() => {
                  handleClose();
                  handleSubmenuClose();
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    {" "}
                    <Grid container alignItems="center" spacing={2.5}>
                      <Grid item xs="auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          style={{ position: "relative", top: 3 }}
                        >
                          <path
                            d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.17 7.51025C13.67 7.36025 13.12 7.26025 12.5 7.26025C9.74 7.26025 7.5 9.50025 7.5 12.2603C7.5 15.0203 9.74 17.2603 12.5 17.2603C15.26 17.2603 17.5 15.0203 17.5 12.2603C17.5 11.2303 17.19 10.2803 16.66 9.48026"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.88 7.65024L13.22 5.74023"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.8799 7.65039L12.9399 9.07039"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Grid>
                      <Grid item xs="auto">
                        <Typography
                          variant="base"
                          color="text.main"
                          sx={{ fontWeight: 400 }}
                        >
                          Reuploaded KYC List
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <MoreVertIcon sx={{ color: theme.palette.text.fade }} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{ ...menuBox }}
                component={Link}
                to="/table"
                onClick={() => {
                  handleClose();
                  handleSubmenuClose();
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    {" "}
                    <Grid container alignItems="center" spacing={2.5}>
                      <Grid item xs="auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          style={{ position: "relative", top: 3 }}
                        >
                          <path
                            d="M7.5 14H12.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.5 5.95996L3.75 2.20996"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.46002 2.25L3.71002 6"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.5 10H15.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.5 2H16.5C19.83 2.18 21.5 3.41 21.5 7.99V16"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.5 9.00977V15.9798C3.5 19.9898 4.5 21.9998 9.5 21.9998H12.5C12.67 21.9998 15.34 21.9998 15.5 21.9998"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.5 16L15.5 22V19C15.5 17 16.5 16 18.5 16H21.5Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Grid>
                      <Grid item xs="auto">
                        <Typography
                          variant="base"
                          color="text.main"
                          sx={{ fontWeight: 400 }}
                        >
                          Partially Declined KYC List
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <MoreVertIcon sx={{ color: theme.palette.text.fade }} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{ ...menuBox }}
                component={Link}
                to="/table"
                onClick={() => {
                  handleClose();
                  handleSubmenuClose();
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    {" "}
                    <Grid container alignItems="center" spacing={2.5}>
                      <Grid item xs="auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          style={{ position: "relative", top: 3 }}
                        >
                          <path
                            d="M10.99 2.23006L6.00003 4.11006C4.85003 4.54006 3.91003 5.90006 3.91003 7.12006V14.5501C3.91003 15.7301 4.69003 17.2801 5.64003 17.9901L9.94003 21.2001C11.35 22.2601 13.67 22.2601 15.08 21.2001L19.38 17.9901C20.33 17.2801 21.11 15.7301 21.11 14.5501V7.12006C21.11 5.89006 20.17 4.53006 19.02 4.10006L14.03 2.23006C13.18 1.92006 11.82 1.92006 10.99 2.23006Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.65 13.4399L10.4 9.18994"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.6 9.24023L10.35 13.4902"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Grid>
                      <Grid item xs="auto">
                        <Typography
                          variant="base"
                          color="text.main"
                          sx={{ fontWeight: 400 }}
                        >
                          Declined KYC List
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <MoreVertIcon sx={{ color: theme.palette.text.fade }} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{ ...menuBox }}
                component={Link}
                to="/table"
                onClick={() => {
                  handleClose();
                  handleSubmenuClose();
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    {" "}
                    <Grid container alignItems="center" spacing={2.5}>
                      <Grid item xs="auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          style={{ position: "relative", top: 3 }}
                        >
                          <path
                            d="M10.99 2.23006L6.00003 4.11006C4.85003 4.54006 3.91003 5.90006 3.91003 7.12006V14.5501C3.91003 15.7301 4.69003 17.2801 5.64003 17.9901L9.94003 21.2001C11.35 22.2601 13.67 22.2601 15.08 21.2001L19.38 17.9901C20.33 17.2801 21.11 15.7301 21.11 14.5501V7.12006C21.11 5.89006 20.17 4.53006 19.02 4.10006L14.03 2.23006C13.18 1.92006 11.82 1.92006 10.99 2.23006Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.55005 11.8702L11.16 13.4802L15.46 9.18018"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Grid>
                      <Grid item xs="auto">
                        <Typography
                          variant="base"
                          color="text.main"
                          sx={{ fontWeight: 400 }}
                        >
                          Verified KYC List
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <MoreVertIcon sx={{ color: theme.palette.text.fade }} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleSubmenuClose}
            aria-label="close"
            sx={{
              position: "absolute",
              bottom: "2%",
              left: "50%",
              transform: "translate(0, -50%)",
              background: theme.palette.info.main,
              "&:hover": {
                background: theme.palette.info.main,
              },
            }}
          >
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
