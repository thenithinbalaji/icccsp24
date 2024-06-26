import Image from 'next/image';
import React from 'react';

export default function Workshop() {
  return (
    <div className="workshopContainer" id="workshop">
      <h1 className="text-center">
        <b>PRE-CONFERENCE WORKSHOP</b>
      </h1>

      <div style={{ textAlign: 'center' }}>
        <b>Workshop Coordinator:</b> Dr. E. M. Malathy, Associate Professor, IT
        (<a href="mailto:malathyem@ssn.edu.in">malathyem@ssn.edu.in</a>)
      </div>

      <div className="workshopGrid">
        <div>
          <h3>1. Advances in Image Processing</h3>
          <p>
            Biometric technology has been in use for several decades now and has
            proven to be a reliable and secure method of identity
            authentication. However, it is also a field that continues to
            advance and evolve, with new developments and innovations emerging
            regularly. Recent advances in artificial intelligence and machine
            learning have enabled biometric systems to become more accurate and
            efficient, with the ability to learn and adapt to new patterns and
            data over time. This has resulted in improved performance, reduced
            error rates, and increased convenience for users. The development of
            new biometric modalities, such as vein recognition, gait analysis,
            and DNA biometrics, has expanded the range of options available for
            identity authentication, providing greater flexibility and
            adaptability to different security requirements. Another important
            area of advancement in biometrics is in the integration of multiple
            biometric modalities, known as multimodal biometrics. By combining
            two or more biometric factors, such as facial recognition and voice
            recognition, multimodal systems can offer even greater accuracy and
            security, with reduced vulnerability to fraud and hacking attempts.
            The increasing prevalence of biometric technology in everyday life,
            such as in smartphones and other consumer devices, has helped to
            drive further innovation and development in the field, as well as
            greater acceptance and adoption by the public. Biometrics has
            expanded its wings and a lot of research on Animal Biometrics in the
            recent past has given us motivating results. Overall, biometric
            technology is an established and reliable method of identity
            authentication, but it is also a field that continues to advance and
            evolve, with new developments and innovations emerging regularly. As
            the technology continues to evolve, it is likely that we will see
            even greater improvements in accuracy, security, and convenience for
            users. This talk is intended to highlight the milestones achieved in
            the domain so far and ignite the minds of young researchers with
            recent advances and newer challenges in the domain.
          </p>
          <p>
            <b>Faculty Coordinators :</b> Dr. N. Radha , Dr. R. Swathika Dr. A.
            Sandana Karuppan, SSNCE.
          </p>
          <h4>Workshop Speaker</h4>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <div>
              <Image
                src="/WorkshopSpeakers/imgspeaker1.png"
                alt="ai"
                height={140}
                width={140}
                style={{ borderRadius: '100%' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#002446',
                  fontSize: '14px',
                }}
              >
                Dr. Rahul Raman
              </div>
              <div
                style={{
                  textAlign: 'center',
                  color: '#002446',
                  fontSize: '11px',
                }}
              >
                IIITDM, Chennai
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>2. Immersive Technology (AR, VR, MR, XR)</h3>
          <p>
            The workshop on Immersive Technologies typically aim to educate
            participants about the latest advancements and applications of
            immersive technologies such as virtual reality (VR), augmented
            reality (AR), and mixed reality (MR). It highlights on providing an
            overview of these technologies, their differences, and how they are
            used in various industries. It help the participants to gain insight
            to the different types of hardware sets involved with the necessary
            development tools and platforms. It guarantees on few demonstrations
            of immersive projects and explores future opportunities of these
            technologies for innovation and growth.
          </p>
          <p>
            <b>Faculty Coordinators :</b> Dr. Josephinejulina JK, Dr. G.
            Sornavalli, Dr. Suganya E, SSNCE.
          </p>
          <div
            style={{
              flexGrow: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h4>Workshop Speaker</h4>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <div>
                <Image
                  src="/WorkshopSpeakers/arvr1.png"
                  alt="ai"
                  height={200}
                  width={200}
                  style={{ borderRadius: '100%' }}
                />
                <div
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#002446',
                    fontSize: '14px',
                  }}
                >
                  Mr. M. Sathiya Sankar
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    color: '#002446',
                    fontSize: '11px',
                  }}
                >
                  Head of Immersive Technologies Wizorld
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>3. Hands-on: IoT and Robotic solutions towards SDG</h3>
          <p>
            The adoption of IoT and application of robotics in creating
            technical innovations aimed at attaining SDGs. Skill update on
            sensor integration, incorporating intelligence and building smart
            embedded systems. Hands-on session to think, design, develop and
            implement multi- disciplinary applications in the field of IoT and
            Robotic automation. Revitalize the research gaps for all the
            intelligence process of an automation industry for societal impact.
          </p>
          <p>
            <b>Faculty Coordinators:</b> Dr. E.M. Malathy, Dr. K.S. Gayathri,
            Dr. V. Sivamurugan, Dr. S. Anitha, SSNCE
          </p>
          <h4>Workshop Speakers</h4>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <div>
              <Image
                src="/WorkshopSpeakers/iot.png"
                alt="ai"
                height={140}
                width={140}
                style={{ borderRadius: '100%' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#002446',
                  fontSize: '14px',
                }}
              >
                Dr. G. Satheesh Kumar
              </div>
              <div
                style={{
                  textAlign: 'center',
                  color: '#002446',
                  fontSize: '11px',
                }}
              >
                Associate Professor, SSNCE
              </div>
            </div>

            <div>
              <Image
                src="/WorkshopSpeakers/iot2.png"
                alt="ai"
                height={140}
                width={140}
                style={{ borderRadius: '100%' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#002446',
                  fontSize: '14px',
                }}
              >
                Dr. Vimal Singh
              </div>
              <div
                style={{
                  textAlign: 'center',
                  color: '#002446',
                  fontSize: '11px',
                }}
              >
                Associate Professor, SSNCE
              </div>
            </div>

            <div>
              <Image
                src="/WorkshopSpeakers/iot1.png"
                alt="ai"
                height={140}
                width={140}
                style={{ borderRadius: '100%' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#002446',
                  fontSize: '14px',
                }}
              >
                Dr. C. Arun Prakash
              </div>
              <div
                style={{
                  textAlign: 'center',
                  color: '#002446',
                  fontSize: '11px',
                }}
              >
                Assistant Professor, MIT Anna University
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>4. Explainable AI (XAI)</h3>
          <p>
            Text analysis and Information Extraction &amp; Retrieval (TIER
            2024): The Eighth Edition of workshop (TIER-2024) seeks to foster
            growth and excellence in the emerging NLP community. This time. the
            theme of the workshop is “Explainable AI (XAI)” which involves
            making AI models transparent and interpretable so that humans can
            comprehend why a certain decision was made or a particular
            prediction was generated. This workshop focuses on applying XAI
            techniques specifically to text analytics opens numerous
            possibilities for improving the transparency and interpretability of
            natural language processing (NLP) models. Participants of this
            workshop can gain a comprehensive understanding of how XAI
            techniques can be applied to text analytics models, ultimately
            leading to more effective and responsible use of AI in natural
            language processing applications. The workshop features talks by
            experts in XAI and a hands-on session exploring tools that offer
            diverse options for implementing XAI techniques in text analytics.
          </p>
          <p>
            <b>Faculty Coordinators:</b> Dr. C. Aravindan, Dr. N. Sripriya, Mr.
            B. Senthilkumar, SSNCE
          </p>
          <h4>Workshop Speakers</h4>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <div>
              <Image
                src="/WorkshopSpeakers/xai1.png"
                alt="ai"
                height={140}
                width={140}
                style={{ borderRadius: '100%' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#002446',
                  fontSize: '14px',
                }}
              >
                Mr. Malaikannan Sankarasubbu
              </div>
              <div
                style={{
                  textAlign: 'center',
                  color: '#002446',
                  fontSize: '11px',
                }}
              >
                Vice President of AI Research, Saama Technologies
              </div>
            </div>

            <div>
              <Image
                src="/WorkshopSpeakers/xai2.png"
                alt="ai"
                height={140}
                width={140}
                style={{ borderRadius: '100%' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#002446',
                  fontSize: '14px',
                }}
              >
                Mr. Anand Kumar M
              </div>
              <div
                style={{
                  textAlign: 'center',
                  color: '#002446',
                  fontSize: '11px',
                }}
              >
                Assistant Professor, IT, NITK Surathkal
              </div>
            </div>
            <div>
              <Image
                src="/WorkshopSpeakers/xai3.jpeg"
                alt="ai"
                height={140}
                width={140}
                style={{ borderRadius: '100%' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#002446',
                  fontSize: '14px',
                }}
              >
                Dr. D. Thenmozhi
              </div>
              <div
                style={{
                  textAlign: 'center',
                  color: '#002446',
                  fontSize: '11px',
                }}
              >
                Associate Professor, CSE, SSNCE
              </div>
            </div>
            <div>
              <Image
                src="/WorkshopSpeakers/xai4.jpeg"
                alt="ai"
                height={140}
                width={140}
                style={{ borderRadius: '100%' }}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#002446',
                  fontSize: '14px',
                }}
              >
                Dr. B. Bharathi
              </div>
              <div
                style={{
                  textAlign: 'center',
                  color: '#002446',
                  fontSize: '11px',
                }}
              >
                Associate Professor, CSE, SSNCE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '25px' }}>
        <h2>Workshop Highlights</h2>
        <ul>
          <li>The workshops will be conducted in physical mode.</li>
          <li>
            Registered candidates can attend anyone workshop specified above.{' '}
          </li>
          <li>
            These workshops will provide a guideline for students, faculty
            members and research scholars who pursue their project and research
            in their respective areas.{' '}
          </li>
          <li>
            The resource persons are eminent faculties, researchers from
            renowned institutions and industry professionals.
          </li>
        </ul>
      </div>

      <div>
        <h2>Registration Fees</h2>
        <ul>
          <li>Faculty/Industry - ₹ 500</li>
          <li>Research scholar/UG/PG Students - ₹ 300</li>
        </ul>
      </div>

      <p style={{ fontSize: '20px', color: 'red' }}>
        Thanks for the overwhelming response. The registration for Pre-Conference Workshops has been closed.
      </p>

      <h5>
        <b>Payment link:</b>{' '}
        <a
          href="https://rzp.io/l/ICCCSP-2024"
          target="_blank"
          rel="noreferrer"
          style={{ overflowWrap: 'break-word', opacity: '50%' }}
        >
          https://rzp.io/l/ICCCSP-2024
        </a> <span style={{ color: 'red' }}>(Closed)</span>
      </h5>

      <h5>
        <b>Registration Form:</b>{' '}
        <a
          href="https://forms.gle/BTFrxmk7FrU5mNmS7"
          target="_blank"
          rel="noreferrer"
          style={{ overflowWrap: 'break-word', opacity: '50%' }}
        >
          https://forms.gle/BTFrxmk7FrU5mNmS7
        </a> <span style={{ color: 'red' }}>(Closed)</span>
      </h5>

    </div >
  );
}
