export default function HomeSection() {
  return (
    <div id="home" className="homeContainer">
      <h1 style={{ fontSize: '40px', color: 'white' }}>ICCCSP 2023</h1>
      <h1 style={{ fontSize: '35px', color: 'white' }}>
        7<sup>th</sup> International Conference on Computer, Communication and
        Signal Processing
      </h1>
      <h2>January 4 – 6 , 2023</h2>
      <p className="textContents">
        <span style={{ fontWeight: 500 }}>Special Focus on</span>
        <br />
        <br />
        <b style={{ lineHeight: '40px' }}>
          AI, Knowledge Engineering and IoT for Smart Systems
        </b>
      </p>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://icccsp.com/img/ifip.jpeg" alt="Springer" height={118} />
      <h1 className="ifip" style={{ color: 'white' }}>
        IFIP Event Number: <span>04695</span>
      </h1>
      </div>
        <h1 className="address" style={{ color: 'white' }}>
        Department of Information Technology <br /> SSN College of Engineering{' '}
        <br /> Rajiv Gandhi Salai, Kalavakkam - 603 110 <br /> Chennai,
        Tamilnadu, India.
      </h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://icccsp.com/img/springer.jpeg" alt="Springer" width={320} height={118} />
          <p className="subtext">
            IFIP AICT series <br /> (approval awaiting)
          </p>
        </div>
      </div>

      {/* <div className="btnContainer">
        <button>Brochure</button>
        <button>Paper Submission</button>
        <button>Conference Registration</button>
        <button>Schedule</button>
        <button>Pre-Conference Workshop and Registration</button>
      </div> */}
    </div>
  );
}
