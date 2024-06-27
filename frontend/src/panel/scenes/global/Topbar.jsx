import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { LogoutOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
//import SearchIcon from "@mui/icons-material/Search";
import logo from '../../../assets/images/logo.png'

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleLogOut = async () => {
    Swal.fire({
      title: "Are You Sure?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("data");
        window.location.href = "/";
      }
    });
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        // backgroundColor={colors.primary[400]}
        borderRadius="3px"
        alignItems='end'
        justifyContent='center'
      >
        <img src={logo} alt="Logo" width={60} height={60} />
        <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '20px', marginBottom: 10, fontWeight: 'bold', margin: '0', color: colors.grey[100], }}>Marriage Registration Demo</h1>
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          {/* <SearchIcon /> */}
        {/* </IconButton> */}
      </Box>

      {/* ICONS */}
      <Box display="flex">

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton>
          <LogoutOutlined onClick={handleLogOut} />
        </IconButton>

      </Box>

    </Box>
  );
};

export default Topbar;
