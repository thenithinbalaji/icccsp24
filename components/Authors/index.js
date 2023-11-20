export default function Authors() {
  return (
    <div className="authorsContainer" id="authors">
      <h1>
        <b>FOR AUTHORS</b>
      </h1>

      <br />

      <h3>Paper Submission and Guidelines</h3>

      <p>
        Authors can contribute regular paper with scientific / technical
        research works, survey works and industrial experiences that include
        significant advances in field of Artificial Intelligence, Quantum
        Computing, AR/VR and IoT. Authors should write their papers in British
        English. The paper should not exceed 15 pages including references. The
        submission should be novel, plagiarism free and not simultaneously
        submitted to another conference. Submissions must include title,
        abstract, list of keywords (include the last keyword as which SDG the
        research paper addresses), introduction, literature review, methodology,
        results / discussion, and conclusion. All submissions will be subjected
        to a review process by at least three reviewers.
      </p>

      <br />

      <p>
        On submissions, file name should include the SDG number from the
        following list (such as SGD 1.doc). However, contributions towards
        achieving any other SDGs using ML & AI also may be submitted.
        <ul style={{ paddingTop: '10px' }}>
          <li>SDG No. 3 - Good Health & Well Being</li>
          <li>SDG No. 4 - Quality Education</li>
          <li>SDG No. 9 - Industry, Innovation & Infrastructure</li>
          <li>SDG No.11 - Sustainable Cities & Communities</li>
        </ul>
        Authors should abide Springer&rsquo;s authors&rsquo; guidelines and use
        its proceedings templates, either LaTeX or Word, for the preparation of
        manuscripts.
      </p>

      <br />

      {/* <h3>Templates</h3>
      <a href="/WordTemplates.zip" download>
        Click here For Sample Springer Paper Format in Word
      </a>
      <br />
      <a href="/LaTexTemplates.zip" download>
        Click here For Sample Springer Paper Format (LaTex Template)
      </a> */}

      {/* <p>
        For more detailed guidelines, please visit{' '}
        <span>
          <a
            href="http://preview.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
            rel="noopener noreferrer"
            target="_blank"
          >
            official Springer Link
          </a>
        </span>
        <br />
      </p> */}

      {/* <h3 style={{ marginBottom: '15px', marginTop: '15px' }}>
        Submission{' '}
        <span
          style={{ color: 'red' }}
          className="animate__animated animate__flash animate__slower animate__infinite"
        >
          (Closed)
        </span>
      </h3> */}

      {/* <p>
        The manuscript should be submitted in PDF format using the conference
        management system Easychair, in the following link: <br />
        <a
          href="https://easychair.org/conferences/?conf=icccsp2023"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://easychair.org/conferences/?conf=icccsp2023
        </a>
      </p> */}

      <p style={{ fontWeight: 600 }}>
        At least one author of each accepted paper must register for the
        conference and present the paper.
      </p>
    </div>
  );
}
