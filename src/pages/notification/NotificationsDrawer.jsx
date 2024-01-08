import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Badge, IconButton } from "@mui/material";

export default function NotificationsDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Badge
            badgeContent={4}
            color="primary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiBadge-badge": {
                right: "10px",
                bottom: "7px",
                minWidth: "20px",
                height: "20px",
                borderRadius: "50%",
                boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
              },
            }}
          >
            <IconButton
              onClick={toggleDrawer(anchor, true)}
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
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
              >
                <path
                  d="M9.64014 22.1201C9.6428 22.8832 9.99765 23.6145 10.6272 24.1541C11.2567 24.6937 12.1098 24.9978 13.0001 25.0001C13.8904 24.9978 14.7435 24.6937 15.3731 24.1541C16.0026 23.6145 16.3575 22.8832 16.3601 22.1201"
                  fill="#FC2861"
                />
                <path
                  d="M25 22.3333C22.4392 19.7729 21.0003 16.3 21 12.6787V11.6667C20.9987 10.0052 20.4801 8.38536 19.5162 7.03204C18.5524 5.67872 17.1911 4.65908 15.6213 4.11467C15.6487 3.96683 15.6639 3.81699 15.6667 3.66667C15.6667 2.95942 15.3857 2.28115 14.8856 1.78105C14.3855 1.28095 13.7072 1 13 1C12.2928 1 11.6145 1.28095 11.1144 1.78105C10.6143 2.28115 10.3333 2.95942 10.3333 3.66667C10.3361 3.81699 10.3513 3.96683 10.3787 4.11467C8.80892 4.65908 7.44762 5.67872 6.48376 7.03204C5.51991 8.38536 5.00132 10.0052 5 11.6667V12.6773C5.00001 14.4707 4.64676 16.2464 3.96044 17.9032C3.27411 19.56 2.26815 21.0654 1 22.3333H25Z"
                  stroke="#155C9E"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
          </Badge>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
