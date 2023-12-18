import { Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        // backgroundColor: "yellow",
        alignItems: "center",
        // padding: "10px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          padding: "10px",
          fontWeight: "900",
          fontFamily: "BreeSerif",
          color: "#89fffd",
        }}
      >
        4321
      </Typography>
    </Stack>
  );
};

export default Header;
