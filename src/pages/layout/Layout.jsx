import React, { useState } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MyTable from "./MyTable";
import Navigation from "../navigation/Navigation";
import MainMenu from "./MainMenu";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import FormHolder from "../forms/FormHolder";
import FilterHolder from "../filters/FilterHolder";
import NotificationsDrawer from "../notification/NotificationsDrawer";

const Layout = () => {
  const theme = useTheme();
  const [formDialog, setFormDialog] = useState(false);
  const [filterDialog, setFilterDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickFormDialogOpen = () => {
    setFormDialog(true);
  };

  const handleFormDialogClose = () => {
    setFormDialog(false);
  };
  const handleClickFilterDialogOpen = () => {
    setFilterDialog(true);
  };

  const handleFilterDialogClose = () => {
    setFilterDialog(false);
  };
  return (
    <>
      <Grid
        id="topbar"
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ py: 2, position: "sticky", top: "0px" }}
      >
        <Grid xs="item">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid xs="item">
              {" "}
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="34"
                  viewBox="0 0 24 34"
                  fill="none"
                >
                  <path
                    d="M13 32.1025C14.1046 32.1025 15 31.2071 15 30.1025C15 28.998 14.1046 28.1025 13 28.1025C11.8954 28.1025 11 28.998 11 30.1025C11 31.2071 11.8954 32.1025 13 32.1025Z"
                    fill="white"
                    stroke="#2B2B2B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 19C14.1046 19 15 18.1046 15 17C15 15.8954 14.1046 15 13 15C11.8954 15 11 15.8954 11 17C11 18.1046 11.8954 19 13 19Z"
                    fill="white"
                    stroke="#2B2B2B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 5.89746C14.1046 5.89746 15 5.00203 15 3.89746C15 2.79289 14.1046 1.89746 13 1.89746C11.8954 1.89746 11 2.79289 11 3.89746C11 5.00203 11.8954 5.89746 13 5.89746Z"
                    fill="white"
                    stroke="#2B2B2B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    px: 2.5,

                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      left: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                    "& .MuiMenuItem-root": {
                      minWidth: "150px",
                      fontSize: "12px",
                      borderBottom: `1px solid ${theme.palette.border.main}`,
                      px: 0,
                      py: 1.25,
                    },
                    "& .MuiMenuItem-root:last-child": {
                      borderBottom: `none`,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M11.1917 12.5H3.66666C2.15 12.5 1.18333 10.875 1.91666 9.5417L3.85833 6.00835L5.675 2.70001C6.43333 1.32501 8.41666 1.32501 9.17499 2.70001L11 6.00835L11.875 7.60002L12.9417 9.5417C13.675 10.875 12.7083 12.5 11.1917 12.5Z"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3333 12.9167C18.3333 15.9083 15.9083 18.3333 12.9167 18.3333C9.925 18.3333 7.5 15.9083 7.5 12.9167C7.5 12.775 7.50833 12.6417 7.51667 12.5H11.1917C12.7083 12.5 13.675 10.875 12.9417 9.54168L11.875 7.6C12.2083 7.53333 12.5583 7.5 12.9167 7.5C15.9083 7.5 18.3333 9.925 18.3333 12.9167Z"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                  Marketing Panel
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.1417 10.2083V13.9583C14.1417 17.0833 12.8917 18.3333 9.76666 18.3333H6.01666C2.89166 18.3333 1.64166 17.0833 1.64166 13.9583V10.2083C1.64166 7.08331 2.89166 5.83331 6.01666 5.83331H9.76666C12.8917 5.83331 14.1417 7.08331 14.1417 10.2083Z"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3083 6.25002C18.3083 8.64169 16.4833 10.6 14.1417 10.8084V10.2084C14.1417 7.08335 12.8917 5.83335 9.76666 5.83335H9.16666C9.37499 3.49169 11.3333 1.66669 13.725 1.66669C16.05 1.66669 17.9667 3.39169 18.2583 5.64169C18.2917 5.83335 18.3083 6.04169 18.3083 6.25002Z"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                  Merchant Panel
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M13.3333 10.575V15.0666C13.3333 17.0166 12.0333 18.3083 10.0917 18.3083H4.90832C2.96666 18.3083 1.66666 17.0166 1.66666 15.0666V8.59164C1.66666 6.64164 2.96666 5.34998 4.90832 5.34998H8.09999C8.95832 5.34998 9.78332 5.69164 10.3917 6.29998L12.3833 8.28331C12.9917 8.89164 13.3333 9.71664 13.3333 10.575Z"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3333 6.875V11.3667C18.3333 13.3083 17.0333 14.6083 15.0917 14.6083H13.3333V10.575C13.3333 9.71666 12.9917 8.89166 12.3833 8.28333L10.3917 6.3C9.78332 5.69166 8.95832 5.35 8.09999 5.35H6.66666V4.88333C6.66666 2.94166 7.96666 1.64166 9.90832 1.64166H13.1C13.9583 1.64166 14.7833 1.98333 15.3917 2.59166L17.3833 4.58333C17.9917 5.19166 18.3333 6.01666 18.3333 6.875Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                  Commission Panel
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.1417 10.2083V13.9583C14.1417 17.0833 12.8917 18.3333 9.76666 18.3333H6.01666C2.89166 18.3333 1.64166 17.0833 1.64166 13.9583V10.2083C1.64166 7.08331 2.89166 5.83331 6.01666 5.83331H9.76666C12.8917 5.83331 14.1417 7.08331 14.1417 10.2083Z"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3083 4.87502V7.62502C18.3083 9.91669 17.3917 10.8334 15.1 10.8334H14.1417V10.2084C14.1417 7.08335 12.8917 5.83335 9.76666 5.83335H9.14166V4.87502C9.14166 2.58335 10.0583 1.66669 12.35 1.66669H15.1C17.3917 1.66669 18.3083 2.58335 18.3083 4.87502Z"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                  Counter Panel
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M15 15.7166H14.3667C13.7 15.7166 13.0667 15.975 12.6 16.4416L11.175 17.85C10.525 18.4917 9.46667 18.4917 8.81667 17.85L7.39166 16.4416C6.925 15.975 6.28333 15.7166 5.625 15.7166H5C3.61667 15.7166 2.5 14.6083 2.5 13.2417V4.14996C2.5 2.7833 3.61667 1.67499 5 1.67499H15C16.3833 1.67499 17.5 2.7833 17.5 4.14996V13.2417C17.5 14.6 16.3833 15.7166 15 15.7166Z"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.83334 7.63336C5.83334 6.85836 6.46668 6.22498 7.24168 6.22498C8.01668 6.22498 8.65001 6.85836 8.65001 7.63336C8.65001 9.20003 6.42501 9.36669 5.93334 10.8584C5.83334 11.1667 6.09167 11.475 6.41667 11.475H8.65001"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3667 11.4667V6.70838C13.3667 6.49171 13.225 6.3 13.0167 6.24166C12.8083 6.18333 12.5834 6.26666 12.4667 6.45C11.8667 7.41666 11.2167 8.51667 10.65 9.48334C10.5584 9.64167 10.5584 9.85001 10.65 10.0083C10.7417 10.1667 10.9167 10.2666 11.1084 10.2666H14.1667"
                        stroke="#2B335E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                  Tech. Help Desk
                </MenuItem>
              </Menu>
            </Grid>
            <Grid xs="item">
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  padding: "13px",
                  borderRadius: "100vw",
                  background: "#fff",

                  boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <img src="/assets/logo.svg" alt="logo" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs="item">
          <MainMenu />
          &nbsp; &nbsp;
        </Grid>
      </Grid>
      <Grid id="body" container>
        <Grid
          item
          sx={{
            width: "80px",
            height: "calc(100vh - 90px)",
            // background: "red",
            position: "sticky",
            top: "90px",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Grid
              item
              sx={{
                //  background: "yellow",
                textAlign: "center",
              }}
            >
              {/* <IconButton
                sx={{
                  p: 1.75,
                  background: "#fff",
                  "&:hover": { background: "#fff" },
                  boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
                  mb: 2,
                }}
                variant="contained"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M13 1V25M1 13H25"
                    stroke="#155C9E"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M21.8694 1V7.26087M18.739 4.13043H24.9999"
                    stroke="#FC2861"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </IconButton> */}
              <FormHolder
                formDialog={formDialog}
                setFormDialog={setFormDialog}
                handleClickFormDialogOpen={handleClickFormDialogOpen}
                handleFormDialogClose={handleFormDialogClose}
              />
              <FilterHolder
                filterDialog={filterDialog}
                setFilterDialog={setFilterDialog}
                handleClickFilterDialogOpen={handleClickFilterDialogOpen}
                handleFilterDialogClose={handleFilterDialogClose}
              />
              <NotificationsDrawer />
             
              <IconButton
                sx={{
                  // p: 2,
                  border: "2px solid #fff",
                  boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
                  mb: 2,
                }}
              >
                <img src="/Avatar.svg" alt="" width="auto" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            // background: "green",
            width: "calc(100% - 160px)",
            // height: "calc(100vh - 90px)",
            // overflowX: "auto",
          }}
        >
          <Box sx={{ px: 8 }}>
            <Navigation />
            {/* <MyTable /> */}
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            width: "80px",
            height: "calc(100vh - 90px)",
            position: "sticky",
            top: "90px",
            // background: "red",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Grid
              item
              sx={{
                //  background: "yellow",
                textAlign: "center",
              }}
            >
              <IconButton
                sx={{
                  p: 1.75,
                  background: "#fff",
                  "&:hover": { background: "#fff" },
                  boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
                  border: "1p solid #BE185D",
                  mb: 2,
                }}
                variant="contained"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#BE185D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15.5V9.5"
                    stroke="#BE185D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 11.5L12 8.5L15 11.5"
                    stroke="#BE185D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </IconButton>
              <IconButton
                sx={{
                  p: 1.75,
                  background: "#fff",
                  "&:hover": { background: "#fff" },
                  boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
                  mb: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.25 7.50001C21.25 9.57107 19.5711 11.25 17.5 11.25C15.4289 11.25 13.75 9.57107 13.75 7.50001C13.75 5.42895 15.4289 3.75002 17.5 3.75002L20.2098 3.75001L21.25 3.75001V3.75487V3.76362V3.7724V3.78123V3.79009V3.79899V3.80792V3.8169V3.8259V3.83495V3.84402V3.85314V3.86229V3.87147V3.88069V3.88995V3.89923V3.90856V3.91791V3.9273V3.93672V3.94618V3.95567V3.96519V3.97474V3.98433V3.99395V4.0036V4.01328V4.02299V4.03273V4.04251V4.05231V4.06215V4.07201V4.0819V4.09183V4.10178V4.11176V4.12178V4.13182V4.14188V4.15198V4.16211V4.17226V4.18244V4.19265V4.20288V4.21314V4.22343V4.23374V4.24408V4.25445V4.26484V4.27526V4.2857V4.29616V4.30666V4.31717V4.32771V4.33828V4.34886V4.35947V4.37011V4.38077V4.39145V4.40215V4.41288V4.42362V4.43439V4.44518V4.456V4.46683V4.47768V4.48856V4.49946V4.51037V4.52131V4.53226V4.54324V4.55423V4.56525V4.57628V4.58733V4.5984V4.60949V4.62059V4.63172V4.64286V4.65402V4.66519V4.67638V4.68759V4.69882V4.71006V4.72131V4.73259V4.74387V4.75517V4.76649V4.77782V4.78917V4.80053V4.81191V4.82329V4.83469V4.84611V4.85754V4.86898V4.88043V4.8919V4.90337V4.91486V4.92637V4.93788V4.9494V4.96094V4.97248V4.98404V4.9956V5.00718V5.01876V5.03036V5.04196V5.05358V5.0652V5.07683V5.08847V5.10012V5.11177V5.12343V5.1351V5.14678V5.15846V5.17016V5.18185V5.19356V5.20527V5.21698V5.2287V5.24043V5.25216V5.2639V5.27564V5.28738V5.29913V5.31088V5.32264V5.3344V5.34616V5.35793V5.3697V5.38147V5.39325V5.40502V5.4168V5.42858V5.44036V5.45214V5.46392V5.47571V5.48749V5.49927V5.51106V5.52284V5.53462V5.54641V5.55819V5.56997V5.58175V5.59352V5.6053V5.61707V5.62884V5.64061V5.65237V5.66414V5.67589V5.68765V5.6994V5.71115V5.72289V5.73463V5.74636V5.75809V5.76981V5.78153V5.79324V5.80495V5.81665V5.82834V5.84003V5.85171V5.86338V5.87505V5.88671V5.89836V5.91V5.92164V5.93326V5.94488V5.95649V5.96809V5.97968V5.99126V6.00283V6.01439V6.02594V6.03748V6.049V6.06052V6.07203V6.08352V6.09501V6.10648V6.11793V6.12938V6.14081V6.15224V6.16364V6.17504V6.18642V6.19778V6.20914V6.22047V6.2318V6.24311V6.2544V6.26568V6.27694V6.28819V6.29942V6.31064V6.32184V6.33302V6.34419V6.35533V6.36647V6.37758V6.38867V6.39975V6.41081V6.42185V6.43287V6.44388V6.45486V6.46583V6.47677V6.4877V6.4986V6.50949V6.52035V6.53119V6.54201V6.55281V6.56359V6.57435V6.58509V6.5958V6.60649V6.61716V6.6278V6.63842V6.64902V6.6596V6.67015V6.68067V6.69118V6.70165V6.71211V6.72253V6.73294V6.74331V6.75367V6.76399V6.77429V6.78456V6.79481V6.80503V6.81522V6.82538V6.83552V6.84563V6.85571V6.86576V6.87579V6.88578V6.89575V6.90569V6.91559V6.92547V6.93532V6.94514V6.95493V6.96468V6.97441V6.9841V6.99377V7.0034V7.013V7.02257V7.0321V7.0416V7.05107V7.06051V7.06992V7.07929V7.08862V7.09793V7.1072V7.11643V7.12563V7.1348V7.14393V7.15302V7.16208V7.1711V7.18009V7.18904V7.19796V7.20683V7.21567V7.22448V7.23324V7.24197V7.25066V7.25932V7.26793V7.27651V7.28504V7.29354V7.302V7.31042V7.3188V7.32714V7.33544V7.3437V7.35191V7.36009V7.36823V7.37632V7.38437V7.39238V7.40035V7.40828V7.41616V7.42401V7.4318V7.43956V7.44727V7.45494V7.46256V7.47014V7.47768V7.48517V7.49261V7.50001Z"
                    stroke="#969696"
                    stroke-width="1.5"
                  />
                  <path
                    d="M2.75 7.50001C2.75 9.57107 4.42893 11.25 6.5 11.25C8.57107 11.25 10.25 9.57107 10.25 7.50001C10.25 5.42895 8.57107 3.75002 6.5 3.75002L3.7902 3.75001L2.75 3.75001V3.75487V3.76362V3.7724V3.78123V3.79009V3.79899V3.80792V3.8169V3.8259V3.83495V3.84402V3.85314V3.86229V3.87147V3.88069V3.88995V3.89923V3.90856V3.91791V3.9273V3.93672V3.94618V3.95567V3.96519V3.97474V3.98433V3.99395V4.0036V4.01328V4.02299V4.03273V4.04251V4.05231V4.06215V4.07201V4.0819V4.09183V4.10178V4.11176V4.12178V4.13182V4.14188V4.15198V4.16211V4.17226V4.18244V4.19265V4.20288V4.21314V4.22343V4.23374V4.24408V4.25445V4.26484V4.27526V4.2857V4.29616V4.30666V4.31717V4.32771V4.33828V4.34886V4.35947V4.37011V4.38077V4.39145V4.40215V4.41288V4.42362V4.43439V4.44518V4.456V4.46683V4.47768V4.48856V4.49946V4.51037V4.52131V4.53226V4.54324V4.55423V4.56525V4.57628V4.58733V4.5984V4.60949V4.62059V4.63172V4.64286V4.65402V4.66519V4.67638V4.68759V4.69882V4.71006V4.72131V4.73259V4.74387V4.75517V4.76649V4.77782V4.78917V4.80053V4.81191V4.82329V4.83469V4.84611V4.85754V4.86898V4.88043V4.8919V4.90337V4.91486V4.92637V4.93788V4.9494V4.96094V4.97248V4.98404V4.9956V5.00718V5.01876V5.03036V5.04196V5.05358V5.0652V5.07683V5.08847V5.10012V5.11177V5.12343V5.1351V5.14678V5.15846V5.17016V5.18185V5.19356V5.20527V5.21698V5.2287V5.24043V5.25216V5.2639V5.27564V5.28738V5.29913V5.31088V5.32264V5.3344V5.34616V5.35793V5.3697V5.38147V5.39325V5.40502V5.4168V5.42858V5.44036V5.45214V5.46392V5.47571V5.48749V5.49927V5.51106V5.52284V5.53462V5.54641V5.55819V5.56997V5.58175V5.59352V5.6053V5.61707V5.62884V5.64061V5.65237V5.66414V5.67589V5.68765V5.6994V5.71115V5.72289V5.73463V5.74636V5.75809V5.76981V5.78153V5.79324V5.80495V5.81665V5.82834V5.84003V5.85171V5.86338V5.87505V5.88671V5.89836V5.91V5.92164V5.93326V5.94488V5.95649V5.96809V5.97968V5.99126V6.00283V6.01439V6.02594V6.03748V6.049V6.06052V6.07203V6.08352V6.09501V6.10648V6.11793V6.12938V6.14081V6.15224V6.16364V6.17504V6.18642V6.19778V6.20914V6.22047V6.2318V6.24311V6.2544V6.26568V6.27694V6.28819V6.29942V6.31064V6.32184V6.33302V6.34419V6.35533V6.36647V6.37758V6.38867V6.39975V6.41081V6.42185V6.43287V6.44388V6.45486V6.46583V6.47677V6.4877V6.4986V6.50949V6.52035V6.53119V6.54201V6.55281V6.56359V6.57435V6.58509V6.5958V6.60649V6.61716V6.6278V6.63842V6.64902V6.6596V6.67015V6.68067V6.69118V6.70165V6.71211V6.72253V6.73294V6.74331V6.75367V6.76399V6.77429V6.78456V6.79481V6.80503V6.81522V6.82538V6.83552V6.84563V6.85571V6.86576V6.87579V6.88578V6.89575V6.90569V6.91559V6.92547V6.93532V6.94514V6.95493V6.96468V6.97441V6.9841V6.99377V7.0034V7.013V7.02257V7.0321V7.0416V7.05107V7.06051V7.06992V7.07929V7.08862V7.09793V7.1072V7.11643V7.12563V7.1348V7.14393V7.15302V7.16208V7.1711V7.18009V7.18904V7.19796V7.20683V7.21567V7.22448V7.23324V7.24197V7.25066V7.25932V7.26793V7.27651V7.28504V7.29354V7.302V7.31042V7.3188V7.32714V7.33544V7.3437V7.35191V7.36009V7.36823V7.37632V7.38437V7.39238V7.40035V7.40828V7.41616V7.42401V7.4318V7.43956V7.44727V7.45494V7.46256V7.47014V7.47768V7.48517V7.49261V7.50001Z"
                    stroke="#969696"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8.41603 10.376C8.07138 10.1462 7.60573 10.2393 7.37596 10.584C7.1462 10.9286 7.23933 11.3943 7.58397 11.624L8.41603 10.376ZM12 15L11.3292 15.3354C11.4562 15.5895 11.7159 15.75 12 15.75C12.2841 15.75 12.5438 15.5895 12.6708 15.3354L12 15ZM16.416 11.624C16.7607 11.3943 16.8538 10.9286 16.624 10.584C16.3943 10.2393 15.9286 10.1462 15.584 10.376L16.416 11.624ZM13 13L12.584 12.376L12.4183 12.4864L12.3292 12.6646L13 13ZM11 13L11.6708 12.6646L11.5817 12.4864L11.416 12.376L11 13ZM12.6708 15.3354L13.6708 13.3354L12.3292 12.6646L11.3292 14.6646L12.6708 15.3354ZM13.416 13.624L16.416 11.624L15.584 10.376L12.584 12.376L13.416 13.624ZM7.58397 11.624L10.584 13.624L11.416 12.376L8.41603 10.376L7.58397 11.624ZM10.3292 13.3354L11.3292 15.3354L12.6708 14.6646L11.6708 12.6646L10.3292 13.3354Z"
                    fill="#969696"
                  />
                  <path
                    d="M7 16L11.2929 20.2929C11.6834 20.6834 12.3166 20.6834 12.7071 20.2929L17 16"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="17"
                    cy="7"
                    r="1.25"
                    stroke="#969696"
                    stroke-width="1.5"
                  />
                  <circle
                    cx="7"
                    cy="7"
                    r="1.25"
                    stroke="#969696"
                    stroke-width="1.5"
                  />
                </svg>
              </IconButton>
              <IconButton
                sx={{
                  p: 1.75,
                  background: "#fff",
                  "&:hover": { background: "#fff" },
                  boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
                  mb: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M10.5 17.25H12.75V19.5H10.5V17.25Z" fill="#969696" />
                  <path
                    d="M6.375 8.64813C6.96129 5.74253 9.72328 3.78559 12.6896 4.17409C15.6559 4.56258 17.8092 7.16327 17.6125 10.1199C17.4159 13.0765 14.9368 15.3751 11.9446 15.375H10.5V13.2115H11.9446C13.7155 13.2115 15.4615 11.6971 15.4615 9.75C15.4615 7.80288 13.768 6.50481 12 6.50481C9.57296 6.50481 8.53846 9.10096 8.53846 9.10096L6.375 8.64813Z"
                    fill="#969696"
                  />
                </svg>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
