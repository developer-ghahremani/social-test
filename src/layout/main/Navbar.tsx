import { Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import ReactCountryFlag from "react-country-flag";
import { IBox } from "../../components/general";

const Navbar = () => {
  return (
    <IBox display="flex" alignItems="center" justifyContent="space-between">
      <Search />
      <IBox display="flex" alignItems="center">
        <IBox mr="1rem" alignItems="center">
          <ReactCountryFlag
            countryCode="Ir"
            style={{
              width: "1rem",
              height: "1rem",
            }}
          />
          <p>Reza Ghahremani</p>
        </IBox>
        <Avatar />
      </IBox>
    </IBox>
  );
};

export default Navbar;
