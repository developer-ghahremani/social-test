import { Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import ReactCountryFlag from "react-country-flag";
import { IBox } from "../../components/general";

type Props = {};

const Navbar = () => {
  return (
    <IBox display="flex" alignItems="center" justifyContent="space-between">
      <IBox display="flex" alignItems="center">
        <Avatar />
        <IBox ml="1rem">
          <ReactCountryFlag
            countryCode="Ir"
            style={{
              width: "1rem",
              height: "1rem",
            }}
          />
          <p>Reza Ghahremani</p>
        </IBox>
      </IBox>
      <Search />
    </IBox>
  );
};

export default Navbar;
