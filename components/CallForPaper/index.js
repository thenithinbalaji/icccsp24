import { PAPERS } from './constants';

export default function CallForPaper() {
  return (
    <div className="callForPaperContainer" id="callforpaper">
      <div>
        <h1><b>CALL FOR PAPER</b></h1>
        <br />
      </div>
      <p style={{ textAlign: 'left' }}>
        We cordially invite the submission of original research articles, aiming to address the
        application of intelligent technologies towards the attainment of sustainable development
        goals. Prospective areas of interest encompass, but are not limited to, the following:
      </p>
      <div className="papersList-wrapper">
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
      </div>
    </div>
  );
}
