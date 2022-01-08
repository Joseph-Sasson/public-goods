import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="top-div">
        <h1>Treat your pet (and you).</h1>
        <h1>It"s on us!</h1>
        <p>Treat your pet to a healthy treat for <strong>free</strong> to kick off your Public Goods trial membership.</p>
        <h3>See what it"s like to be a Public Goods member.</h3>
        <ul>
          <li>Included in your bundle is a free 2-week membership that gives you unlimited access to our entire collection of sustainable essentials.</li>
          <li>Take a load off. We make it easy for you to make better choices. Always included: eco-friendly products you can trust</li>
        </ul>
        <button>Claim your free offer</button>
        <div className="img-div">
          <img alt="Cat wanting treats" src="/images/cat-desktop-1.png" className="img-one"/>
        </div>
      </div>
      <div className="middle-div">
        <h3>OUR TREAT</h3>
        <div>
          <img alt="Cat treats" src="/images/cat-treats-minnows.png" className="treats"/>
          <h3>Freeze Dried Minnows</h3>
          <p>Healthy ingredients with nothing to hide.</p>
        </div>
        <div>
          <img alt="Cat treats" src="/images/cat-treats-minnows.png" className="treats"/>
          <h3>Freeze Dried Minnows</h3>
          <p>Healthy ingredients with nothing to hide.</p>
        </div>
      </div>
      <div className="bottom-div">
        <img alt="Cat High Five" src="/images/cat-desktop-2.png" className="img-two"/>
        <h3>PET-APPROVED</h3>
        <h4>It feels good to be a member.</h4>
        <p>After your free trial, become a full-time member with benefits for $59 a year.</p>
        <ul className="bottom-ui">
          <li className="bottom-li">Cancel anytime during your free trial.</li>
          <li className="bottom-li">Free shipping on orders over $45.</li>
          <li className="bottom-li">Direct-to-consumer prices on hundreds of premium products.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
