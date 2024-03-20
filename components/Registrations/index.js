const items = [
  { date: ['Rs 6500'], event: 'Student / Scholar' },
  { date: ['Rs 7500'], event: 'Faculty / Academician' },
  { date: ['Rs 8500'], event: 'Industry' },
  { date: ['$100'], event: 'Foreign ' },
  { date: ['Rs 500 / head'], event: 'Pre-Conference Workshop' },
  { date: ['Rs 300 / head'], event: 'Poster Presentation' },
];

export default function Registration() {
  return (
    <div className="registrationContainer" id="registration">
      <h1 className="text-center">
        <b>REGISTRATION</b>
      </h1>

      <p className="text-center">
        At least one author of each accepted paper must register for the
        conference and present the paper.
      </p>

      <div className="registrationDatesContainer">
        <table>
          <tbody>
            <tr>
              <th>Participants</th>
              <th>Registration Fees</th>
              {/* <th>Early Bird Registration</th> */}
            </tr>
            {items.map(item => (
              <tr key={item.event}>
                <td>{item.event}</td>
                <td>{item.date[0]}</td>
                {/* <td>{item.date[1]}</td> */}
              </tr>
            ))}
            <tr>
              <td colSpan="2">
                10% discount on registeration fees for IFIP members, IFIP TC
                members and IFIP working group
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-center">* No TA and DA will be provided</p>
      </div>

      <br />

      <h5>
        <b>Registration Fee Payment link:</b> <a href="https://rzp.io/l/ICCCSP-2024" target="_blank" rel="noreferrer" style={{ overflowWrap: 'break-word', opacity: "50%" }}>
          https://rzp.io/l/ICCCSP-2024
        </a> <span style={{ color: "red" }}>(Closed)</span>
      </h5>

      <p>
        The above link is common to all participants of ICCCSP 2024 - Author of Paper, Participants of Pre-Conference Workshops, Participants of Poster Presentation. Participants should choose appropriate event and category for making the payment of registration fee as mentioned in the above table. Proof of payment should be saved to upload in the registration form.

        Registration forms for conference papers, workshops and poster session are provided separately in the following links. Participants are requested to fill in the appropriate forms to complete the registration process.
      </p>

      <h5>
        <b>Paper Registration Form:</b> <a href="https://forms.gle/YfodreowTt3mNVeJ9" target="_blank" rel="noreferrer" style={{ overflowWrap: 'break-word', opacity: "50%" }}>
          https://forms.gle/YfodreowTt3mNVeJ9
        </a> <span style={{ color: "red" }}>(Closed)</span>
      </h5>

      <h5>
        <b>Pre-Conference Workshops Registration Form:</b> <a href="https://forms.gle/BTFrxmk7FrU5mNmS7" target="_blank" rel="noreferrer" style={{ overflowWrap: 'break-word', opacity: "50%" }}>
          https://forms.gle/BTFrxmk7FrU5mNmS7
        </a> <span style={{ color: "red" }}>(Closed)</span>
      </h5>
    </div >
  );
}
