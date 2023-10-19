const items = [
  {
    date: ['September', ' 15,', ' 2023'],
    event: 'Paper Submission Opens from',
  },
  { date: ['November', ' 20,', ' 2023'], event: 'Paper Submission Deadline' },
  {
    date: ['December', ' 15,', ' 2023'],
    event: 'Acceptance Notification Starts',
  },
  { date: ['January', ' 7,', ' 2024'], event: 'Acceptance Notification Ends' },
  { date: ['January', ' 25,', ' 2024'], event: 'Registration closes on' },
  {
    date: ['February', ' 15,', ' 2024'],
    event: 'Deadline for Submission of Revised Paper',
  },
  { date: ['March', ' 20,', ' 2024'], event: 'Pre-Conference Workshop' },
  { date: ['March', ' 21 - 22,', ' 2024'], event: 'Conference' },
];

const StrikedOutDate = ({ date }) => {
  return (
    <span>
      <s>
        {date[0]}
        <sup>{date[1]}</sup>
        {date[2]}
      </s>{' '}
      &nbsp;&nbsp;
    </span>
  );
};

export default function ImportantDates() {
  return (
    <div id="important_dates" className="importantDatesContainer">
      <h1 className="text-center">
        <b>IMPORTANT DATES</b>
      </h1>
      <table>
        <tbody>
          <tr>
            <th>EVENT</th>
            <th>Date</th>
          </tr>

          {items.map((item, idx) => (
            <tr key={item.event}>
              <td>{item.event}</td>
              <td>
                {/* {idx === 1 && (
                  <>
                    <StrikedOutDate date={[10, 'th', 'Sept']} />
                    <StrikedOutDate date={[10, 'th', 'Oct']} />
                    <StrikedOutDate date={[21, 'th', 'Oct']} />
                    <StrikedOutDate date={[10, 'th', 'Nov']} />
                  </>
                )}
                {idx === 2 && (
                  <>
                    <StrikedOutDate date={[15, 'th', 'Oct']} />
                    <StrikedOutDate date={[30, 'th', 'Oct']} />
                  </>
                )}
                {idx === 3 && (
                  <>
                    <StrikedOutDate date={[15, 'th', 'Nov']} />
                    <StrikedOutDate date={[30, 'th', 'Nov']} />
                  </>
                )}
                {idx === 5 && (
                  <StrikedOutDate date={[30, 'th', 'Nov']} />
                )} */}
                {/* <p className={[1, 2, 3, 5].includes(idx) ? 'red-text' : ''}> */}
                <p className={[1, 2, 3, 5].includes(idx) ? '' : ''}>
                  {item.date[0]}
                  {item.date[1]}
                  {item.date[2]}
                </p>
                {/* {idx === 3 && (
                  <span style={{ color: 'red' }} className="animate__animated animate__flash animate__slower animate__infinite">
                    Early bird Registration Closed
                  </span>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
