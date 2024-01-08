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
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function MainMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmenuClickOpen = () => {
    setOpenSubmenu(true);
  };

  const handleSubmenuClose = () => {
    setOpenSubmenu(false);
  };
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
      <IconButton
        onClick={handleClickOpen}
        sx={{
          background: theme.palette.secondary.main,
          "&:hover": { background: theme.palette.secondary.main },
          p: 1.75,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M20.4633 9.69496C22.0483 9.69496 23.3333 8.41001 23.3333 6.82496C23.3333 5.2399 22.0483 3.95496 20.4633 3.95496C18.8782 3.95496 17.5933 5.2399 17.5933 6.82496C17.5933 8.41001 18.8782 9.69496 20.4633 9.69496Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.53651 9.69496C9.12157 9.69496 10.4065 8.41001 10.4065 6.82496C10.4065 5.2399 9.12157 3.95496 7.53651 3.95496C5.95145 3.95496 4.6665 5.2399 4.6665 6.82496C4.6665 8.41001 5.95145 9.69496 7.53651 9.69496Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.4633 24.0449C22.0483 24.0449 23.3333 22.76 23.3333 21.1749C23.3333 19.5899 22.0483 18.3049 20.4633 18.3049C18.8782 18.3049 17.5933 19.5899 17.5933 21.1749C17.5933 22.76 18.8782 24.0449 20.4633 24.0449Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.53651 24.0449C9.12157 24.0449 10.4065 22.76 10.4065 21.1749C10.4065 19.5899 9.12157 18.3049 7.53651 18.3049C5.95145 18.3049 4.6665 19.5899 4.6665 21.1749C4.6665 22.76 5.95145 24.0449 7.53651 24.0449Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
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
                App All Navigation
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid container alignItems="center" spacing={2.5}>
            <Grid item xs={4}>
              <Paper
                sx={{ ...menuBox }}
                component={Link}
                to="/"
                onClick={handleClose}
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
                            d="M9.52 2.83992L4.13 7.03992C3.23 7.73992 2.5 9.22992 2.5 10.3599V17.7699C2.5 20.0899 4.39 21.9899 6.71 21.9899H18.29C20.61 21.9899 22.5 20.0899 22.5 17.7799V10.4999C22.5 9.28992 21.69 7.73992 20.7 7.04992L14.52 2.71992C13.12 1.73992 10.87 1.78992 9.52 2.83992Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 17.99V14.99"
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
                          Home
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
                onClick={handleClose}
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
                            d="M20 12.5C20 11.12 21.12 10 22.5 10V9C22.5 5 21.5 4 17.5 4H7.5C3.5 4 2.5 5 2.5 9V9.5C3.88 9.5 5 10.62 5 12C5 13.38 3.88 14.5 2.5 14.5V15C2.5 19 3.5 20 7.5 20H17.5C21.5 20 22.5 19 22.5 15C21.12 15 20 13.88 20 12.5Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.5 4L10.5 20"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-dasharray="5 5"
                          />
                        </svg>
                      </Grid>
                      <Grid item xs="auto">
                        <Typography
                          variant="base"
                          color="text.main"
                          sx={{ fontWeight: 400 }}
                        >
                          Tickets
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
                onClick={handleClose}
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
                            d="M21.5 7V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V7C3.5 4 5 2 8.5 2H16.5C20 2 21.5 4 21.5 7Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15 4.5V6.5C15 7.6 15.9 8.5 17 8.5H19"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 13H12.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 17H16.5"
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
                          Customer Report
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
                onClick={handleClose}
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
                            d="M9.66 10.87C9.56 10.86 9.44 10.86 9.33 10.87C6.95 10.79 5.06 8.84 5.06 6.44C5.06 3.99 7.04 2 9.5 2C11.95 2 13.94 3.99 13.94 6.44C13.93 8.84 12.04 10.79 9.66 10.87Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.91 4C18.85 4 20.41 5.57 20.41 7.5C20.41 9.39 18.91 10.93 17.04 11C16.96 10.99 16.87 10.99 16.78 11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.65997 14.56C2.23997 16.18 2.23997 18.82 4.65997 20.43C7.40997 22.27 11.92 22.27 14.67 20.43C17.09 18.81 17.09 16.17 14.67 14.56C11.93 12.73 7.41997 12.73 4.65997 14.56Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.84 20C19.56 19.85 20.24 19.56 20.8 19.13C22.36 17.96 22.36 16.03 20.8 14.86C20.25 14.44 19.58 14.16 18.87 14"
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
                          User List
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
                onClick={handleClose}
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
                            d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.91003 22C3.91003 18.13 7.76003 15 12.5 15C13.46 15 14.39 15.13 15.26 15.37"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.5 18C22.5 18.32 22.46 18.63 22.38 18.93C22.29 19.33 22.13 19.72 21.92 20.06C21.23 21.22 19.96 22 18.5 22C17.47 22 16.54 21.61 15.84 20.97C15.54 20.71 15.28 20.4 15.08 20.06C14.71 19.46 14.5 18.75 14.5 18C14.5 16.92 14.93 15.93 15.63 15.21C16.36 14.46 17.38 14 18.5 14C19.68 14 20.75 14.51 21.47 15.33C22.11 16.04 22.5 16.98 22.5 18Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.53 16.9399L17.42 19.0499"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.4401 16.96L19.5601 19.0699"
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
                          Block User List
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
                onClick={handleClose}
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
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          style={{ position: "relative", top: 3 }}
                        >
                          <path
                            d="M15.78 8.45001L19.5 4.72998L15.78 1.01001"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.5 4.72998H19.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.21997 11.55L1.5 15.2701L5.21997 18.9901"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.5 15.27H1.5"
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
                          Transactions
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
                onClick={handleClose}
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
                            d="M22.5 10V15C22.5 20 20.5 22 15.5 22H9.5C4.5 22 2.5 20 2.5 15V9C2.5 4 4.5 2 9.5 2H14.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.5 10H18.5C15.5 10 14.5 9 14.5 6V2L22.5 10Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.5 13H13.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.5 17H11.5"
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
                          Data Bundle Log
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
              <Paper sx={{ ...menuBox }} onClick={handleSubmenuClickOpen}>
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
                            d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.91003 22C3.91003 18.13 7.76003 15 12.5 15C13.46 15 14.39 15.13 15.26 15.37"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.5 18C22.5 18.32 22.46 18.63 22.38 18.93C22.29 19.33 22.13 19.72 21.92 20.06C21.23 21.22 19.96 22 18.5 22C17.47 22 16.54 21.61 15.84 20.97C15.54 20.71 15.28 20.4 15.08 20.06C14.71 19.46 14.5 18.75 14.5 18C14.5 16.92 14.93 15.93 15.63 15.21C16.36 14.46 17.38 14 18.5 14C19.68 14 20.75 14.51 21.47 15.33C22.11 16.04 22.5 16.98 22.5 18Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.99 17.98H17.01"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.5 16.52V19.51"
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
                          KYC Request
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <KeyboardArrowRightRoundedIcon
                      sx={{ color: theme.palette.text.fade }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{ ...menuBox }}
                component={Link}
                to="/table"
                onClick={handleClose}
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
                            d="M12.87 8.87988H18.12"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.88 8.87988L7.63 9.62988L9.88 7.37988"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.87 15.8799H18.12"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.88 15.8799L7.63 16.6299L9.88 14.3799"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
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
                          KYB Request
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
                onClick={handleClose}
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
                            d="M3.51001 11.22V15.71C3.51001 20.2 5.31001 22 9.80001 22H15.19C19.68 22 21.48 20.2 21.48 15.71V11.22"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 12C14.33 12 15.68 10.51 15.5 8.68L14.84 2H10.17L9.49999 8.68C9.31999 10.51 10.67 12 12.5 12Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.81 12C20.83 12 22.31 10.36 22.11 8.35L21.83 5.6C21.47 3 20.47 2 17.85 2H14.8L15.5 9.01C15.67 10.66 17.16 12 18.81 12Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.14 12C7.79 12 9.28 10.66 9.44 9.01L9.66 6.8L10.14 2H7.09C4.47001 2 3.47 3 3.11 5.6L2.84 8.35C2.64 10.36 4.12 12 6.14 12Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 17C10.83 17 10 17.83 10 19.5V22H15V19.5C15 17.83 14.17 17 12.5 17Z"
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
                          Store Management
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
              <Paper sx={{ ...menuBox }} onClick={handleSubmenuClickOpen}>
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
                            d="M12.87 2.15009L21.87 5.75006C22.22 5.89006 22.5 6.31006 22.5 6.68006V10.0001C22.5 10.5501 22.05 11.0001 21.5 11.0001H3.5C2.95 11.0001 2.5 10.5501 2.5 10.0001V6.68006C2.5 6.31006 2.78 5.89006 3.13 5.75006L12.13 2.15009C12.33 2.07009 12.67 2.07009 12.87 2.15009Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.5 22H2.5V19C2.5 18.45 2.95 18 3.5 18H21.5C22.05 18 22.5 18.45 22.5 19V22Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.5 22H23.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 8.5C13.3284 8.5 14 7.82843 14 7C14 6.17157 13.3284 5.5 12.5 5.5C11.6716 5.5 11 6.17157 11 7C11 7.82843 11.6716 8.5 12.5 8.5Z"
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
                          Banking Log
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <KeyboardArrowRightRoundedIcon
                      sx={{ color: theme.palette.text.fade }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper sx={{ ...menuBox }} onClick={handleSubmenuClickOpen}>
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
                            d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.91003 22C3.91003 18.13 7.76003 15 12.5 15C13.46 15 14.39 15.13 15.26 15.37"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.8334 16.8311V19.1648C14.8334 20.0222 14.8334 20.0222 15.6482 20.5683L17.8889 21.8544C18.2271 22.0485 18.7771 22.0485 19.1112 21.8544L21.3519 20.5683C22.1667 20.0222 22.1667 20.0222 22.1667 19.1689V16.8311C22.1667 15.9778 22.1667 15.9778 21.3519 15.4317L19.1112 14.1456C18.7771 13.9515 18.2271 13.9515 17.8889 14.1456L15.6482 15.4317C14.8334 15.9778 14.8334 15.9778 14.8334 16.8311Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.5 19.3334C19.2363 19.3334 19.8333 18.7365 19.8333 18.0001C19.8333 17.2637 19.2363 16.6667 18.5 16.6667C17.7636 16.6667 17.1666 17.2637 17.1666 18.0001C17.1666 18.7365 17.7636 19.3334 18.5 19.3334Z"
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
                          Manage Roles
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <KeyboardArrowRightRoundedIcon
                      sx={{ color: theme.palette.text.fade }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{ ...menuBox }}
                component={Link}
                to="/table"
                onClick={handleClose}
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
                            d="M6.5 10V8C6.5 4.69 7.5 2 12.5 2C17.5 2 18.5 4.69 18.5 8V10"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 18.5C13.8807 18.5 15 17.3807 15 16C15 14.6193 13.8807 13.5 12.5 13.5C11.1193 13.5 10 14.6193 10 16C10 17.3807 11.1193 18.5 12.5 18.5Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.5 22H7.5C3.5 22 2.5 21 2.5 17V15C2.5 11 3.5 10 7.5 10H17.5C21.5 10 22.5 11 22.5 15V17C22.5 21 21.5 22 17.5 22Z"
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
                          Manage Access
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
            onClick={handleClose}
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

      <SubMenu
        handleClose={handleClose}
        openSubmenu={openSubmenu}
        setOpenSubmenu={setOpenSubmenu}
        handleSubmenuClickOpen={handleSubmenuClickOpen}
        handleSubmenuClose={handleSubmenuClose}
      />
    </React.Fragment>
  );
}
