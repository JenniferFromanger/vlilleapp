import {createMuiTheme} from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
  },
  status: {
    danger: "orange",
  },
});

export default theme;
