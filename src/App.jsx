import "./App.css";
import { Stack } from "@mui/material";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Quote from "./components/Quote";

function App() {
  return (
    <Stack sx={{ width: "100%", margin: "0" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Quote />}></Route>
      </Routes>
    </Stack>
  );
}

export default App;
