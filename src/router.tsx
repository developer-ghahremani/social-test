import { pageNames } from "./constants";
import Home from "./pages/home";
interface Props {
  path: string;
  element: JSX.Element;
}

const router: Array<Props> = [{ path: pageNames.home, element: <Home /> }];

export default router;
