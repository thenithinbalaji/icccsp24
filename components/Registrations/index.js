const items = [
  { date: ['Rs 6500', 'Rs 6000'], event: 'Student / Scholar' },
  { date: ['Rs 7500', 'Rs 7000'], event: 'Faculty / Academician' },
  { date: ['Rs 8500', 'Rs 8000'], event: 'Industry' },
  { date: ['$100'], event: 'Foreign ' },
  { date: ['Rs 500 / head'], event: 'Pre-Conference Workshop' },
];

export default function Registration() {
  return (
    <div className="registrationContainer" id="registration">
      <h1 className="text-center">
        <b>REGISTRATION DETAILS</b>
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
              <th>Early Bird Registration</th>
            </tr>
            {items.map(item => (
              <tr key={item.event}>
                <td>{item.event}</td>
                <td>{item.date[0]}</td>
                <td>{item.date[1]}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">
                10% discount on registeration fees for IFIP members, IFIP TC
                members and IFIP working group
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-center">* No TA and DA will be provided</p>
      </div>
    </div >
  );
}
