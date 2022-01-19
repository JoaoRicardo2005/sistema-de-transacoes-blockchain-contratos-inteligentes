import {Navbar,Welcome,Footer,Transactions,Services} from './components'


const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome"> 
      <Navbar/>
      <Welcome/>
      </div>
      <Footer/>
      <Transactions/>
      <Services/>



      </div>

   
  );
}

export default App;
