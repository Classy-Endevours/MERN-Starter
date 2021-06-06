import './App.scss';
import axios from 'axios';
import { useRoutes } from 'react-router-dom';
import routes from './routes/Routes';
import Themer from './theme/index';
import requestInterceptor from './utils/axiosInterceptor';
import { DEFAULT_AXIOS_URL } from './constant/env';

axios.defaults.baseURL = DEFAULT_AXIOS_URL;
// axios.defaults.withCredentials = true;
function App() {
  // initialize the axios
  requestInterceptor();
  const routing = useRoutes(routes);
  return <Themer id="theme-selector">{routing}</Themer>;
}

export default App;
