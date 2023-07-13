const items = [
  { date: ['20', 'th', ' July 2023'], event: 'Paper Submission Opens from' },
  { date: ['20', 'th', ' Sept 2023'], event: 'Paper Submission Deadline' },
  { date: ['20', 'th', ' Nov 2023'], event: 'Acceptance Notification Starts' },
  { date: ['5', 'th', ' Dec 2023'], event: 'Early Bird Registration' },
  { date: ['25', 'th', ' Jan 2024'], event: 'Registration closes on' },
  { date: ['15', 'th', ' Feb 2024'], event: 'Camera-ready Copy Submission' },
  { date: ['20', 'th', ' Mar 2024'], event: 'Pre-Conference Workshop' },
  { date: ['21 - 22', 'th', ' Mar 2024'], event: 'Conference' },
];

const StrikedOutDate = ({ date }) => {
  return (
    <span>
      <s>
        {date[0]}<sup>{date[1]}</sup>{date[2]}
      </s>{' '}
      &nbsp;&nbsp;
    </span>
  )
}

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
                  <sup>{item.date[1]}</sup>
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
