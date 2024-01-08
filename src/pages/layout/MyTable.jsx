import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import makeStyles from "@mui/styles/makeStyles";

const MyTable = () => {
  const theme = useTheme();
  // const classes = useStyles();
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div>
      <Paper sx={{ p: 1.25, mb: 3 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs="auto">
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs="auto">
                {/* <Avatar
                  sx={{
                    width: 44,
                    height: 44,
                    bgcolor: `${theme.palette.success.light}`,
                  }}
                >
                  <ListIcon color={theme.palette.success.main} />
                </Avatar> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M13.9866 2.97333L7.3333 5.48C5.79996 6.05333 4.54663 7.86666 4.54663 9.49333V19.4C4.54663 20.9733 5.58663 23.04 6.8533 23.9867L12.5866 28.2667C14.4666 29.68 17.56 29.68 19.44 28.2667L25.1733 23.9867C26.44 23.04 27.48 20.9733 27.48 19.4V9.49333C27.48 7.85333 26.2266 6.04 24.6933 5.46666L18.04 2.97333C16.9066 2.56 15.0933 2.56 13.9866 2.97333Z"
                    stroke="#035B77"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0667 15.8267L14.2133 17.9733L19.9467 12.24"
                    stroke="#035B77"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="base"
                  color="secondary.main"
                  sx={{ fontWeight: 400 }}
                >
                  Partial KYC List
                </Typography>

                <Breadcrumbs aria-label="breadcrumb">
                  <Link to="/">DASHBORD</Link>
                  <Link to="#">List View</Link>
                </Breadcrumbs>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs="auto">
            {/* 222222222222222 */}
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 3, pb: 0 }}>
        <TableContainer sx={{ maxHeight: "calc(100vh - 264px)" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell sx={{ width: "75px" }}>Photo</TableCell> */}
                <TableCell colSpan={2}>Basic Info</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Doc Type</TableCell>
                <TableCell>Doc ID</TableCell>
                <TableCell>Registration Date</TableCell>

                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <TableRow
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ width: "50px" }}>
                    <Avatar alt="Remy Sharp" src="/Avatar.svg" />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: `${theme.palette.secondary.main}`,
                      fontWeight: 500,
                    }}
                  >
                    Guy Hawkins
                    <Typography variant="small" color="warning.main">
                      +9641793661527
                    </Typography>
                  </TableCell>
                  <TableCell>
                    Personal{" "}
                    <Typography variant="small" color="text.light">
                      Temporary Account
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Grid container alignItems="center">
                      <Grid item xs="auto">
                        85% &nbsp;
                      </Grid>
                      <Grid item xs="auto">
                        <Box sx={{ width: "120px" }}>
                          <LinearProgress
                            variant="determinate"
                            value={85}
                            color="warning"
                          />
                        </Box>
                      </Grid>
                    </Grid>

                    <Typography variant="small" color="text.main">
                      Pending
                    </Typography>
                  </TableCell>
                  <TableCell>gafura1992@newroztech.com </TableCell>
                  <TableCell>Smart National ID</TableCell>
                  <TableCell>19970776380</TableCell>
                  <TableCell>2023-07-26 14:59 PM</TableCell>

                  <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
                    <Button
                      sx={{
                        borderRadius: "100vw",
                        textTransform: "none",
                        mr: 1,
                        ".MuiButton-startIcon": {
                          mr: 0.5,
                          mb: 0.25,
                        },
                      }}
                      variant="outlined"
                      color="info"
                      size="small"
                      startIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            d="M5.99992 15.1667H9.99992C13.3333 15.1667 14.6666 13.8334 14.6666 10.5V6.50004C14.6666 3.16671 13.3333 1.83337 9.99992 1.83337H5.99992C2.66659 1.83337 1.33325 3.16671 1.33325 6.50004V10.5C1.33325 13.8334 2.66659 15.1667 5.99992 15.1667Z"
                            stroke="#426DF3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.0001 10.7533H6.72008C5.58675 10.7533 4.66675 9.83327 4.66675 8.69994C4.66675 7.56661 5.58675 6.64661 6.72008 6.64661H11.2334"
                            stroke="#426DF3"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.2869 7.67995L11.3335 6.62662L10.2869 5.57996"
                            stroke="#426DF3"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      }
                    >
                      {/* <MenuIcon color={theme.palette.text.light} /> */}
                      Forward
                    </Button>
                    <Button
                      sx={{
                        borderRadius: "100vw",
                        textTransform: "none",
                        mr: 1,
                        ".MuiButton-startIcon": {
                          mr: 0.5,
                          mb: 0.25,
                        },
                      }}
                      variant="outlined"
                      color="secondary"
                      size="small"
                      startIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            d="M10.3866 8.49995C10.3866 9.81995 9.31995 10.8866 7.99995 10.8866C6.67995 10.8866 5.61328 9.81995 5.61328 8.49995C5.61328 7.17995 6.67995 6.11328 7.99995 6.11328C9.31995 6.11328 10.3866 7.17995 10.3866 8.49995Z"
                            stroke="#035B77"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.9999 14.0133C10.3532 14.0133 12.5466 12.6266 14.0732 10.2266C14.6732 9.28665 14.6732 7.70665 14.0732 6.76665C12.5466 4.36665 10.3532 2.97998 7.9999 2.97998C5.64656 2.97998 3.45323 4.36665 1.92656 6.76665C1.32656 7.70665 1.32656 9.28665 1.92656 10.2266C3.45323 12.6266 5.64656 14.0133 7.9999 14.0133Z"
                            stroke="#035B77"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      }
                    >
                      Details
                    </Button>
                    <Button
                      sx={{
                        borderRadius: "100vw",
                        textTransform: "none",
                        mr: 1,
                        ".MuiButton-startIcon": {
                          mr: 0.5,
                          mb: 0.25,
                        },
                      }}
                      variant="outlined"
                      color="success"
                      size="small"
                      startIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            d="M6.99344 1.98679L3.66677 3.24012C2.9001 3.52679 2.27344 4.43345 2.27344 5.24679V10.2001C2.27344 10.9868 2.79344 12.0201 3.42677 12.4935L6.29344 14.6335C7.23344 15.3401 8.7801 15.3401 9.7201 14.6335L12.5868 12.4935C13.2201 12.0201 13.7401 10.9868 13.7401 10.2001V5.24679C13.7401 4.42679 13.1134 3.52012 12.3468 3.23345L9.0201 1.98679C8.45344 1.78012 7.54677 1.78012 6.99344 1.98679Z"
                            stroke="#68C81C"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.0332 8.41345L7.10654 9.48678L9.9732 6.62012"
                            stroke="#68C81C"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      }
                    >
                      Verify Me
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Grid container alignItems="center">
              <Grid item xs={12}> */}
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {/* </Grid>
            </Grid> */}
      </Paper>
    </div>
  );
};

export default MyTable;
