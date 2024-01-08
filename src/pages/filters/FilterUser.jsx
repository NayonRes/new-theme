import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const FilterUser = () => {
  const theme = useTheme();
  const customCSS = {
    "& .MuiOutlinedInput-root": {
      //   background: background,
      borderRadius: "4px",
      color: "#555",
      fontSize: "14px",
      padding: "7px 16px",
      "& .MuiOutlinedInput-input": {
        padding: "0px",
      },
      //     "& fieldset": {
      //       borderWidth: borderWidth,
      //       borderColor: borderColor,
      //       borderRadius: borderRadius,
      //     },
      //     "&:hover fieldset": {
      //       borderColor: hoverBorderColor,
      //       borderRadius: borderRadius,
      //     },
      //     "&.Mui-focused fieldset": {
      //       borderColor: theme.palette.primary.main,
      //       borderWidth: "2px",
      //       borderRadius: borderRadius,
      //     },
      //   },
      //   "& input::placeholder": {
      //     color: placeholderColor, // Change this to your desired placeholder color
      //     opacity: 1,
      //   },
    },
  };
  const menuBox = {
    p: 1.25,
    display: "flex",
    borderRadius: "4px",
    boxShadow: "none",
    border: `1px solid ${theme.palette.border.main}`,
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  };
  return (
    <>
      <Box sx={{ px: 2.5, py: 2.5 }}>
        <Grid
          container
          alignItems="center"
          columnSpacing={1}
          rowSpacing={2}
          sx={{ maxWidth: "750px" }}
        >
          <Grid item xs={6}>
            <Typography
              variant="medium"
              color="text.main"
              sx={{ fontWeight: 500, mt: 0.5 }}
            >
              Full Name
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              sx={customCSS}
              variant="outlined"
              placeholder="Name"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="medium"
              color="text.main"
              sx={{ fontWeight: 500, mt: 0.5 }}
            >
              Nickname
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              sx={customCSS}
              variant="outlined"
              placeholder="Nickname"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="medium"
              color="text.main"
              sx={{ fontWeight: 500, mt: 0.5 }}
            >
              Contact
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              sx={customCSS}
              variant="outlined"
              placeholder="Contact"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="medium"
              color="text.main"
              sx={{ fontWeight: 500, mt: 0.5 }}
            >
              Address
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              sx={customCSS}
              variant="outlined"
              placeholder="Address"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="medium"
              color="text.main"
              sx={{ fontWeight: 500, mt: 0.5 }}
            >
              Degeneration
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              sx={customCSS}
              variant="outlined"
              placeholder="Sr. Executive"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="medium"
              color="text.main"
              sx={{ fontWeight: 500, mt: 0.5 }}
            >
              Department
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              sx={customCSS}
              variant="outlined"
              placeholder="Department"
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper
              sx={{ ...menuBox }}
              // component={Link}
              // to="/table"
              // onClick={handleClose}
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
                      <Avatar
                        sx={{
                          width: "40px",
                          height: "40px",
                          background: "none",
                          border: `1px solid ${theme.palette.secondary.light}`,
                        }}
                        alt="Remy Sharp"
                        src="/Avatar.svg"
                      />
                    </Grid>
                    <Grid item xs="auto">
                      <Typography
                        variant="base"
                        color="secondary.main"
                        sx={{ fontWeight: 400 }}
                      >
                        Guy Hawkins
                      </Typography>
                      <Typography variant="small" color="warning.main">
                        +9641793661527
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs="auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                  >
                    <path
                      d="M12.4301 0.929932L18.5001 6.99993L12.4301 13.0699"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.5 7H18.33"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              sx={{ ...menuBox }}
              // component={Link}
              // to="/table"
              // onClick={handleClose}
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
                      <Avatar
                        sx={{
                          width: "40px",
                          height: "40px",
                          background: "none",
                          border: `1px solid ${theme.palette.secondary.light}`,
                        }}
                        alt="Remy Sharp"
                        src="/Avatar.svg"
                      />
                    </Grid>
                    <Grid item xs="auto">
                      <Typography
                        variant="base"
                        color="secondary.main"
                        sx={{ fontWeight: 400 }}
                      >
                        Guy Frank
                      </Typography>
                      <Typography variant="small" color="warning.main">
                        +9641793661527
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs="auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                  >
                    <path
                      d="M12.4301 0.929932L18.5001 6.99993L12.4301 13.0699"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.5 7H18.33"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* <Divider />
      <Box sx={{ px: 2.5, py: 2.5, textAlign: "right" }}>
        <Button
          variant="outlined"
          disableElevation
          sx={{ mr: 1.25, textTransform: "none" }}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12 6.74252V15.2625C12 16.35 11.22 16.8075 10.2675 16.2825L7.32001 14.64C7.00501 14.4675 6.49499 14.4675 6.17999 14.64L3.2325 16.2825C2.28 16.8075 1.5 16.35 1.5 15.2625V6.74252C1.5 5.46002 2.54999 4.41003 3.83249 4.41003H9.66751C10.95 4.41003 12 5.46002 12 6.74252Z"
                stroke="#BE185D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 3.83249V12.3525C16.5 13.44 15.72 13.8975 14.7675 13.3725L12 11.8275V6.74249C12 5.45999 10.95 4.41 9.66751 4.41H6V3.83249C6 2.54999 7.04999 1.5 8.33249 1.5H14.1675C15.45 1.5 16.5 2.54999 16.5 3.83249Z"
                stroke="#BE185D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.25 9H8.25"
                stroke="#BE185D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.75 10.5V7.5"
                stroke="#BE185D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          Save And Add More
        </Button>
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          disableElevation
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12.3333 16.5V14.8333C12.3333 13.2617 12.3333 12.4767 11.8449 11.9883C11.3566 11.5 10.5716 11.5 8.99992 11.5H8.16659C6.59492 11.5 5.80992 11.5 5.32159 11.9883C4.83325 12.4767 4.83325 13.2617 4.83325 14.8333V16.5"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M4.83325 5.66663H8.99992"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M1.5 6.5C1.5 4.14333 1.5 2.96417 2.2325 2.2325C2.96417 1.5 4.14333 1.5 6.5 1.5H12.4767C12.8167 1.5 12.9875 1.5 13.14 1.56333C13.2933 1.62667 13.4142 1.74667 13.655 1.98833L16.0117 4.345C16.2533 4.58667 16.3733 4.70667 16.4367 4.86C16.5 5.0125 16.5 5.18333 16.5 5.52333V11.5C16.5 13.8567 16.5 15.0358 15.7675 15.7675C15.0358 16.5 13.8567 16.5 11.5 16.5H6.5C4.14333 16.5 2.96417 16.5 2.2325 15.7675C1.5 15.0358 1.5 13.8567 1.5 11.5V6.5Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          }
        >
          Save And Exit
        </Button>
      </Box> */}
    </>
  );
};

export default FilterUser;
