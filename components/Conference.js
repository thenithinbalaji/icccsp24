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
        <div className="aboutus-row">
          <div style={{ flexDirection: 'column' }}>
            <img
              src="https://icccsp.com/img/ifip.jpeg"
              alt="IFIP"
              height={118}
            />
            <h2 className="text-center">Approval Awaited</h2>
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
              Approval Awaited
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
          The 8th edition of the International Conference on Computer, Communication and Signal Processing ICCCSP 2024 has a special focus towards building sustainable AI solutions. The 2030 agenda for sustainable development agreed by the UN member countries is to improve the quality of life in the economic, social, and environmental aspects through the 17 core Sustainable Development Goals (SDG) - <a href="https://ifip.org/">( https://sdgs.un.org/goals)</a>, which has good scope for deployment of smart solutions, to attain the 169 targets by 2030. ICCCSP 2024 aims to provide a collaborative platform for industry experts and researchers who are keen in employing AI and ML techniques in the design of smart solutions for attaining the SDGs.
        </p>
        <h2>
          International Federation for Information Processing( IFIP) our
          supporter
        </h2>
        <h3 style={{ marginTop: '20px' }}>
          <a href="https://ifip.org/">IFIP TC12 - Artificial Intelligence</a>
        </h3>
        <p>
          AI is one of the oldest and most exciting subfields of computing,
          covering such areas as intelligent robotics, intelligent planning and
          scheduling, model-based reasoning, fault diagnosis, natural language
          processing, machine translation, knowledge representation and
          reasoning, knowledge- based systems, knowledge engineering,
          intelligent agents, machine learning, neural nets, genetic algorithms
          and knowledge management. TC12 was formed back in 1989. It now has
          members representing 33 national computer societies, together with
          representatives of the ACM and the IEEE, and has several working
          groups covering major topics in AI. <br /> In recent years, TC12 and
          its Working Groups have sponsored or co-sponsored a range of events
          worldwide. Details of some of these are given on this website. It has
          also made major contributions to recent IFIP World Computer
          Congresses. <br />
          ICCCSP 2023 is proud in associating with TC12, our respect to The
          chair of TC12 <br />
          <i>Professor Eunika Mercier-Laurent</i>
        </p>
        <a href="https://www.youtube.com/watch?v=w_ORl9mLH0U">
          <b>
            IFIP - Leading Professional & Socially Responsible ICT Worldwide
            (https://www.youtube.com/watch?v=w_ORl9mLH0U)
          </b>
        </a>
        <br />
        <br />
        <AboutUs />
      </div>
    </>
  );
}
