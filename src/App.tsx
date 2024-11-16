import './css/style.css'

import Header from '@/src/components/ui/header'
const App: React.FC = () => {
  return (
      <HashRouter>
        <div id={"sideBar"}>
          <SideNavigationBar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        {/*<BackToTopBtn/>*/}
      </HashRouter>
  );
}

export default App;
