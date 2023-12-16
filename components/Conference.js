import Image from 'next/image';
import React from 'react';
import AboutUs from './AboutUs';

export default function Conference() {
  return (
    <>
      <div className="confContainer" id="conference">
        <h1 className="text-center">
          <b>ABOUT ICCCSP 2024</b>
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 style={{ marginTop: '20px' }} className="animate__animated animate__flash animate__slower animate__infinite">
            <a href="https://link.springer.com/book/10.1007/978-3-031-39811-7" style={{ color: 'red' }}>ICCCSP 2023 Proceedings</a>
          </h3>
        </div>
        <div className="aboutus-row">
          <div style={{ flexDirection: 'column' }}>
            <img
              src="https://icccsp.com/img/ifip.jpeg"
              alt="IFIP"
              height={118}
            />
            <h2 className="text-center">Approved Event (04823)</h2>
          </div>

          <div style={{ flexDirection: 'column' }}>
            <img
              src="https://icccsp.com/img/springer.jpeg"
              alt="Springer"
              width={320}
              height={118}
            />
            <h2 className="text-center">
              {/* IFIP AICT Series
              <span className="animate__animated animate__flash animate__slower animate__infinite">
                {' '}
                (Approved)
              </span> */}
              Approved
            </h2>
          </div>

          {/* <div style={{ flexDirection: 'column' }}>
            <Image
              src="/Sathiyam New Logo 2015.png"
              width={140}
              height={200}
              alt="Sathiyam Logo"
            />
            <h4 className="text-center" style={{ color: 'black' }}>
              Media Partner
            </h4>
          </div> */}
        </div>
        <br />
        <p>
          ICCCSP 2024 strives to foster a collaborative platform where scholars and professionals
          convene to exchange ideas and present their latest advancements. With a specific focus on
          &quot;Smart Solutions towards SDG,&quot; the conference aligns with the 2030 agenda for sustainable
          development proposed by the United Nations. By exploring innovative approaches and
          groundbreaking research, we endeavour to contribute to the enhancement of economic,
          social, and environmental dimensions in pursuit of the 17 core SDGs.
        </p>
        <br />
        <p>
          We take great pride in the approval from the prestigious International Federation for
          Information Processing (IFIP) that is imminent, and we are honoured to collaborate with
          Springer, further augmenting the calibre and influence of this esteemed event.
        </p>

        <br />

        <AboutUs />
      </div>
    </>
  );
}
