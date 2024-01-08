import React, { useEffect } from "react";
import {
  Badge,
  Container,
  FormControl,
  Grid,
  Paper,
  Typography,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
// import ColumnChart from "../../components/charts/ColumnChart";
// import AreaChart from "../../components/charts/AreaChart";
// import MenuIcon from "../../components/icons/MenuIcon";
// import VerifyIcon from "../../components/icons/VerifyIcon";
// import SecurityIcon from "../../components/icons/SecurityIcon";
// import ListIcon2 from "../../components/icons/ListIcon2";
// import MoneyIcon from "../../components/icons/MoneyIcon";
// import UncompletedIcon from "../../components/icons/UncompletedIcon";
// import FailedIcon from "../../components/icons/FailedIcon";
// import FolderIcon from "../../components/icons/FolderIcon";
// import DownloadIcon from "../../components/icons/DownloadIcon";
// import MessageIcon from "../../components/icons/MessageIcon";
// import MoonIcon from "../../components/icons/MoonIcon";
const Dashboard = () => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(50);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 50 ? 10 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Grid container alignItems="center" spacing={3} sx={{ mb: 4 }}>
        {/* <Grid item xs={9}>
          <Paper sx={{py:3, px: 0, height: "174px" }}>
            {" "}
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 1.125, px: 3 }}
            >
              <Grid item xs="auto">
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 500 }}
                >
                  Statistics
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Updated 1 month ago
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container alignItems="center" sx={{ mt: 2.5, px: 3 }}>
              <Grid item xs={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs="auto">
                    {" "}
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: `${theme.palette.secondary.light}`,
                      }}
                    >
                      <SecurityIcon color={theme.palette.secondary.main} />
                    </Avatar>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      color="text.light"
                      sx={{ fontWeight: 500 }}
                    >
                      168119
                    </Typography>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 400 }}
                    >
                      e-KYC Attempted
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs="auto">
                    {" "}
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: `${theme.palette.info.light}`,
                      }}
                    >
                      <VerifyIcon color={theme.palette.info.main} />
                    </Avatar>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      color="text.light"
                      sx={{ fontWeight: 500 }}
                    >
                      91825
                    </Typography>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 400 }}
                    >
                      Verified e-KYC
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs="auto">
                    {" "}
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: `${theme.palette.warning.light}`,
                      }}
                    >
                      <ListIcon2 color={theme.palette.warning.main} />
                    </Avatar>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      color="text.light"
                      sx={{ fontWeight: 500 }}
                    >
                      $16926.8
                    </Typography>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 400 }}
                    >
                      Due Bill
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs="auto">
                    {" "}
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: `${theme.palette.success.light}`,
                      }}
                    >
                      <MoneyIcon color={theme.palette.success.main} />
                    </Avatar>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      color="text.light"
                      sx={{ fontWeight: 500 }}
                    >
                      $862.6
                    </Typography>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 400 }}
                    >
                      Paid
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}
        <Grid item xs={3}>
          <Paper sx={{ px: 6, py: 2.5, borderRadius: "20px", display: "flex" }}>
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Badge
                  badgeContent={4}
                  color="primary"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  sx={{
                    "& .MuiBadge-badge": {
                      right: "15px",
                      bottom: "7px",
                      minWidth: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
                    },
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/Avatar.svg"
                    sx={{
                      width: "96px",
                      height: "96px",
                      border: `2px solid ${theme.palette.text.fade}`,
                    }}
                  />
                </Badge>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="small" color="text.fade" sx={{ mb: 0.75 }}>
                  Welcome back!
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 500, mb: 0.75 }}
                >
                  Cameron Williamson
                </Typography>
                <Typography
                  variant="medium"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  User Type Goes Here
                </Typography>
                <Box sx={{ mt: 1.5 }}>
                  <IconButton
                    sx={{
                      mr: 0.75,
                      border: `1px solid ${theme.palette.border.main}`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 4.29333V6.51334"
                        stroke="#BE185D"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8.01333 1.33337C5.55999 1.33337 3.57333 3.32004 3.57333 5.77337V7.17337C3.57333 7.62671 3.38666 8.30671 3.15333 8.69337L2.30666 10.1067C1.78666 10.98 2.14666 11.9534 3.10666 12.2734C6.29333 13.3334 9.73999 13.3334 12.9267 12.2734C13.8267 11.9734 14.2133 10.92 13.7267 10.1067L12.88 8.69337C12.6467 8.30671 12.46 7.62004 12.46 7.17337V5.77337C12.4533 3.33337 10.4533 1.33337 8.01333 1.33337Z"
                        stroke="#BE185D"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.22 12.5466C10.22 13.7666 9.22003 14.7666 8.00003 14.7666C7.39336 14.7666 6.83336 14.5133 6.43336 14.1133C6.03336 13.7133 5.78003 13.1533 5.78003 12.5466"
                        stroke="#BE185D"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    sx={{
                      mr: 0.75,
                      border: `1px solid ${theme.palette.border.main}`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M1.35331 8.27997C1.59331 11.7133 4.50664 14.5066 7.99331 14.66C10.4533 14.7666 12.6533 13.62 13.9733 11.8133C14.52 11.0733 14.2266 10.58 13.3133 10.7466C12.8666 10.8266 12.4066 10.86 11.9266 10.84C8.66664 10.7066 5.99998 7.97997 5.98664 4.75997C5.97998 3.89331 6.15998 3.07331 6.48664 2.32664C6.84664 1.49997 6.41331 1.10664 5.57998 1.45997C2.93998 2.57331 1.13331 5.23331 1.35331 8.27997Z"
                        stroke="#BE185D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    sx={{
                      mr: 0.75,
                      border: `1px solid ${theme.palette.border.main}`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.3867 7.99995C10.3867 9.31995 9.32001 10.3866 8.00001 10.3866C6.68001 10.3866 5.61334 9.31995 5.61334 7.99995C5.61334 6.67995 6.68001 5.61328 8.00001 5.61328C9.32001 5.61328 10.3867 6.67995 10.3867 7.99995Z"
                        stroke="#BE185D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.00002 13.5133C10.3534 13.5133 12.5467 12.1266 14.0734 9.72665C14.6734 8.78665 14.6734 7.20665 14.0734 6.26665C12.5467 3.86665 10.3534 2.47998 8.00002 2.47998C5.64668 2.47998 3.45335 3.86665 1.92668 6.26665C1.32668 7.20665 1.32668 8.78665 1.92668 9.72665C3.45335 12.1266 5.64668 13.5133 8.00002 13.5133Z"
                        stroke="#BE185D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="base" color="text.light" sx={{ mb: 0.75 }}>
        KYC Requests
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container alignItems="center" spacing={2.5} sx={{ mb: 4 }}>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M20.6833 17.8217V21.6892C20.6833 24.9192 19.3941 26.2083 16.1641 26.2083H12.3108C9.09496 26.2083 7.79163 24.9192 7.79163 21.6892V17.8217C7.79163 14.6058 9.08079 13.3167 12.3108 13.3167H16.1783C19.3941 13.3167 20.6833 14.6058 20.6833 17.8217Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.2083 12.2967V16.1642C26.2083 19.3942 24.9192 20.6834 21.6892 20.6834H20.6833V17.8217C20.6833 14.6059 19.3942 13.3167 16.1642 13.3167H13.3167V12.2967C13.3167 9.06675 14.6058 7.79175 17.8358 7.79175H21.7033C24.9192 7.79175 26.2083 9.08092 26.2083 12.2967Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.1667 21.25C31.1667 26.7325 26.7325 31.1667 21.25 31.1667L22.7375 28.6875"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.83331 12.75C2.83331 7.26754 7.26748 2.83337 12.75 2.83337L11.2625 5.31254"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Partial &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    LIST
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M22.6666 12.7358V28.8291C22.6666 30.8833 21.1933 31.7474 19.3941 30.7558L13.8267 27.6533C13.2317 27.3274 12.2683 27.3274 11.6733 27.6533L6.10581 30.7558C4.30664 31.7474 2.83331 30.8833 2.83331 28.8291V12.7358C2.83331 10.3133 4.81663 8.32996 7.23913 8.32996H18.2608C20.6833 8.32996 22.6666 10.3133 22.6666 12.7358Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.1666 7.23919V23.3325C31.1666 25.3867 29.6933 26.2509 27.8941 25.2592L22.6666 22.3409V12.7359C22.6666 10.3134 20.6833 8.33005 18.2608 8.33005H11.3333V7.23919C11.3333 4.81669 13.3166 2.83337 15.7391 2.83337H26.7608C29.1833 2.83337 31.1666 4.81669 31.1666 7.23919Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.91669 17H15.5834"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.75 19.8333V14.1666"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Pending &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    ACTIVE
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M17 31.1667C24.8241 31.1667 31.1667 24.8241 31.1667 17C31.1667 9.17601 24.8241 2.83337 17 2.83337C9.17601 2.83337 2.83337 9.17601 2.83337 17C2.83337 24.8241 9.17601 31.1667 17 31.1667Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 21.9584V13.4584"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.75 16.2916L17 12.0416L21.25 16.2916"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Re-uploaded &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    LIST
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M11.3334 17H22.6667"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.75 31.1667H21.25C28.3334 31.1667 31.1667 28.3334 31.1667 21.25V12.75C31.1667 5.66671 28.3334 2.83337 21.25 2.83337H12.75C5.66671 2.83337 2.83337 5.66671 2.83337 12.75V21.25C2.83337 28.3334 5.66671 31.1667 12.75 31.1667Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Partially &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    Declined
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M21.1083 2.83337H12.8917C11.9283 2.83337 10.5683 3.40005 9.88831 4.08005L4.07999 9.88839C3.39999 10.5684 2.83331 11.9284 2.83331 12.8917V21.1084C2.83331 22.0717 3.39999 23.4317 4.07999 24.1117L9.88831 29.92C10.5683 30.6 11.9283 31.1667 12.8917 31.1667H21.1083C22.0716 31.1667 23.4317 30.6 24.1117 29.92L29.92 24.1117C30.6 23.4317 31.1666 22.0717 31.1666 21.1084V12.8917C31.1666 11.9284 30.6 10.5684 29.92 9.88839L24.1117 4.08005C23.4317 3.40005 22.0716 2.83337 21.1083 2.83337Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.99835 27.0299L27.03 6.99829"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Declined &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    Fully
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M7.98059 22.5391C7.8828 19.0935 8.2473 15.6267 9.37745 12.762C11.0618 8.49259 15.1222 5.69786 19.5554 6.88574C23.9887 8.07363 26.6196 12.6305 25.4317 17.0637C24.7651 19.5514 24.1104 21.7054 24.3568 24.3184M17.4039 14.9129C15.3263 19.7606 16.0189 23.9157 16.7117 27.3783M20.5503 26.0017C19.6094 21.4744 20.2793 19.4419 21.4085 16.0164L21.4178 15.9883C22.0117 13.7717 20.6963 11.4933 18.4797 10.8993C16.263 10.3054 13.9846 11.6208 13.3907 13.8375C12.2768 18.2541 11.4246 21.0308 12.1243 25.3092M25.6574 1.41663L29.1204 1.41663C31.0329 1.41663 32.5834 2.96705 32.5834 4.87959V8.34255M25.6574 32.5833H29.1204C31.0329 32.5833 32.5834 31.0329 32.5834 29.1203V25.6574M8.34261 1.41663L4.87965 1.41663C2.96711 1.41663 1.41669 2.96705 1.41669 4.87959L1.41669 8.34255M8.34261 32.5833H4.87965C2.96711 32.5833 1.41669 31.0329 1.41669 29.1203L1.41669 25.6574"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Operation &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    Verified
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M17 7.87671H31.1667"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.145 2.83337H28.0217C30.5433 2.83337 31.1667 3.45671 31.1667 5.95004V11.7725C31.1667 14.2659 30.5433 14.8892 28.0217 14.8892H20.145C17.6233 14.8892 17 14.2659 17 11.7725V5.95004C17 3.45671 17.6233 2.83337 20.145 2.83337Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.83337 24.1683H17"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97838 19.125H13.855C16.3767 19.125 17 19.7483 17 22.2417V28.0642C17 30.5575 16.3767 31.1808 13.855 31.1808H5.97838C3.45671 31.1808 2.83337 30.5575 2.83337 28.0642V22.2417C2.83337 19.7483 3.45671 19.125 5.97838 19.125Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.1667 21.25C31.1667 26.7325 26.7325 31.1667 21.25 31.1667L22.7375 28.6875"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.83337 12.75C2.83337 7.26754 7.26754 2.83337 12.75 2.83337L11.2626 5.31254"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  AML &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    Verified
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M17 7.87671H31.1667"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.145 2.83337H28.0217C30.5433 2.83337 31.1667 3.45671 31.1667 5.95004V11.7725C31.1667 14.2659 30.5433 14.8892 28.0217 14.8892H20.145C17.6233 14.8892 17 14.2659 17 11.7725V5.95004C17 3.45671 17.6233 2.83337 20.145 2.83337Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.83337 24.1683H17"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.97838 19.125H13.855C16.3767 19.125 17 19.7483 17 22.2417V28.0642C17 30.5575 16.3767 31.1808 13.855 31.1808H5.97838C3.45671 31.1808 2.83337 30.5575 2.83337 28.0642V22.2417C2.83337 19.7483 3.45671 19.125 5.97838 19.125Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.1667 21.25C31.1667 26.7325 26.7325 31.1667 21.25 31.1667L22.7375 28.6875"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.83337 12.75C2.83337 7.26754 7.26754 2.83337 12.75 2.83337L11.2626 5.31254"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  AML &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    Verified
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="base" color="text.light" sx={{ mb: 0.75 }}>
        KYB Requests
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container alignItems="center" spacing={2.5} sx={{ mb: 4 }}>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M20.6833 17.8217V21.6892C20.6833 24.9192 19.3941 26.2083 16.1641 26.2083H12.3108C9.09496 26.2083 7.79163 24.9192 7.79163 21.6892V17.8217C7.79163 14.6058 9.08079 13.3167 12.3108 13.3167H16.1783C19.3941 13.3167 20.6833 14.6058 20.6833 17.8217Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M26.2083 12.2967V16.1642C26.2083 19.3942 24.9192 20.6834 21.6892 20.6834H20.6833V17.8217C20.6833 14.6059 19.3942 13.3167 16.1642 13.3167H13.3167V12.2967C13.3167 9.06675 14.6058 7.79175 17.8358 7.79175H21.7033C24.9192 7.79175 26.2083 9.08092 26.2083 12.2967Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.1667 21.25C31.1667 26.7325 26.7325 31.1667 21.25 31.1667L22.7375 28.6875"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.83331 12.75C2.83331 7.26754 7.26748 2.83337 12.75 2.83337L11.2625 5.31254"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Partial &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    LIST
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M22.6666 12.7358V28.8291C22.6666 30.8833 21.1933 31.7474 19.3941 30.7558L13.8267 27.6533C13.2317 27.3274 12.2683 27.3274 11.6733 27.6533L6.10581 30.7558C4.30664 31.7474 2.83331 30.8833 2.83331 28.8291V12.7358C2.83331 10.3133 4.81663 8.32996 7.23913 8.32996H18.2608C20.6833 8.32996 22.6666 10.3133 22.6666 12.7358Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.1666 7.23919V23.3325C31.1666 25.3867 29.6933 26.2509 27.8941 25.2592L22.6666 22.3409V12.7359C22.6666 10.3134 20.6833 8.33005 18.2608 8.33005H11.3333V7.23919C11.3333 4.81669 13.3166 2.83337 15.7391 2.83337H26.7608C29.1833 2.83337 31.1666 4.81669 31.1666 7.23919Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.91669 17H15.5834"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.75 19.8333V14.1666"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Pending &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    ACTIVE
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M17 31.1667C24.8241 31.1667 31.1667 24.8241 31.1667 17C31.1667 9.17601 24.8241 2.83337 17 2.83337C9.17601 2.83337 2.83337 9.17601 2.83337 17C2.83337 24.8241 9.17601 31.1667 17 31.1667Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 21.9584V13.4584"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.75 16.2916L17 12.0416L21.25 16.2916"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Re-uploaded &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    LIST
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              px: 3,
              py: 2.5,
              display: "flex",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    background: "none",
                    border: `1px solid ${theme.palette.secondary.light}`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M11.3334 17H22.6667"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.75 31.1667H21.25C28.3334 31.1667 31.1667 28.3334 31.1667 21.25V12.75C31.1667 5.66671 28.3334 2.83337 21.25 2.83337H12.75C5.66671 2.83337 2.83337 5.66671 2.83337 12.75V21.25C2.83337 28.3334 5.66671 31.1667 12.75 31.1667Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h2" color="text.light" sx={{ mb: 0.75 }}>
                  628K
                </Typography>
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Partially &nbsp;
                  <span style={{ color: `${theme.palette.primary.main}` }}>
                    Declined
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <div style={{ height: "900px" }}></div>
    </>
  );
};

export default Dashboard;
