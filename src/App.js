import Logo from './assets/Logo.webp';
import img1 from './assets/1.png';
import img2 from './assets/2.webp';
import img3 from './assets/3.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='nav'>
          <div className='Left'>
            <img className='logo' src={Logo} />
            <li>Contact Us</li>
            <li>Log In</li>
            <li>Sign Up</li>
          </div>
          <div className='Right'>
            <ul style={{ display: 'flex' }}>
              <li><button line={1}>Contact Us</button> </li>
              <li><button>Log In</button> </li>
              <li><button>Sign Up</button> </li>
            </ul>
          </div>
        </div>
      </header>
      <div className='landing'>
        <h1>See value from social sooner</h1>
        <p style={{ textAlign: 'center', lineHeight: '25px', fontSize: 18, marginBottom: 40 }}>Our training and strategic services have helped <br /> thousands of organizations succed on social.</p>
        <button style={{ backgroundColor: '#03ac13', width: '16%', color: 'white', fontWeight: 500, marginBottom: 40 }}>Request a Demo</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', height: '100%', marginTop: '2%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src={img1} style={{ height: 200, width: 200 }} />
          <h2>2,500</h2>
          <p>Enterprise organization successfully launched</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src={img2} style={{ height: 200, width: 200 }} />
          <h2>45,000</h2>
          <p>Enterprise users onboarded seamlessly</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src={img3} style={{ height: 200, width: 200 }} />
          <h2>200,000+</h2>
          <p>Professionals trained on product and strategy</p>
        </div>
      </div>
    </div>
  );
}

export default App;
