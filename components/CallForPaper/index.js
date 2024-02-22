// import { PAPERS } from './constants';

export default function CallForPaper() {
  return (
    <div className="callForPaperContainer" id="callforpaper">
      <div>
        <h1>
          <b>CALL FOR PAPER</b>
        </h1>
        <br />
      </div>
      <p style={{ textAlign: 'left' }}>
        We cordially invite the submission of original research articles, aiming
        to address the application of intelligent technologies towards the
        attainment of sustainable development goals for Health & Well being,
        Quality Education, Industry Innovation & Smart Cities. Prospective areas
        of interest encompass, but are not limited to, the following:
      </p>
      <p>
        <ul>
          <li>Neural Networks and Deep Learning</li>
          <li>Fuzzy Systems</li>
          <li>Evolutionary Computation and Optimization</li>
          <li>
            Multi-agent/distributed systems using computational intelligence
            techniques
          </li>
          <li>
            Computational Intelligence approaches in combinations with classical
            machine learning and statistical methods
          </li>
          <li>IoT-based frameworks for smart solutions</li>
          <li>Quantum Machine Learning</li>
          <li>Big Data Analytics</li>
          <li>Information Retrieval</li>
          <li>Computer vision</li>
          <li>Natural Language Processing, Speech and Text processing</li>
          <li>Robotics</li>
          <li>Social Network Analysis</li>
          <li>Cognitive Science</li>
        </ul>
      </p>

      <br />

      <p><a href="#paperguidelines" style={{ color: "white", fontSize: "1.17em", fontWeight: "bold" }}>Paper Submission Guidelines</a></p>
      <p><a href="#important_dates" style={{ color: "white", fontSize: "1.17em", fontWeight: "bold" }}>Important Dates</a></p>
      {/* <div className="papersList-wrapper">
        {PAPERS.map(paper => (
          <div className="paperList" key={paper.title}>
            <h1>{paper.title}</h1>
            <ul>
              {paper.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
}
