import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
  return (
    <Paper

      sx={{
        p:3,
        height: "75vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <img src="/images/notfound.png" alt="" width="65%"/>
        {/* <Typography
          variant="h1"
          color="primary.main"
          sx={{ fontSize: "90px", fontWeight: 600, mb: 3 }}
        >
          404
        </Typography> */}
        <Typography variant="h5" color="text.light">
          Oops! Why You’re Here?
        </Typography>
        <Typography variant="h6" color="text.light" sx={{ mb: 3 }}>
          We are very sorry for inconvenience. It looks like you’re trying to
          access
          <br /> a page that either has been deleted or never existed.
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/"
          disableElevation
          // startIcon={
          //   <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     width="22"
          //     height="22"
          //     viewBox="0 0 22 22"
          //     fill="none"
          //   >
          //     <path
          //       d="M9.23076 2.585L2.87825 7.67249C2.16325 8.24082 1.70492 9.44169 1.86075 10.34L3.07992 17.6367C3.29992 18.9383 4.54658 19.9925 5.86658 19.9925H16.1333C17.4441 19.9925 18.6999 18.9292 18.9199 17.6367L20.1391 10.34C20.2858 9.44169 19.8274 8.24082 19.1216 7.67249L12.7691 2.59418C11.7882 1.80584 10.2024 1.80583 9.23076 2.585Z"
          //       stroke="#555555"
          //       stroke-width="1.5"
          //       stroke-linecap="round"
          //       stroke-linejoin="round"
          //     />
          //     <path
          //       d="M10.9999 14.2083C12.2656 14.2083 13.2916 13.1823 13.2916 11.9167C13.2916 10.651 12.2656 9.625 10.9999 9.625C9.73427 9.625 8.70825 10.651 8.70825 11.9167C8.70825 13.1823 9.73427 14.2083 10.9999 14.2083Z"
          //       stroke="#555555"
          //       stroke-width="1.5"
          //       stroke-linecap="round"
          //       stroke-linejoin="round"
          //     />
          //   </svg>
          // }
        >
          Back To Home
        </Button>
      </Box>
    </Paper>
  );
};

export default NoPageFound;
