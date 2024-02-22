const items = [
  {
    date: ['September', ' 15,', ' 2023'],
    event: 'Paper Submission Opens from',
  },
  { date: ['January', ' 25,', ' 2024'], event: 'Paper Submission Deadline' },
  {
    date: ['February', ' 1,', ' 2024'],
    event: 'Paper Acceptance Notification Starts',
  },
  { date: ['February', ' 15,', ' 2024'], event: 'Paper Acceptance Notification Ends' },
  { date: ['February', ' 25,', ' 2024'], event: 'Paper Registration closes on' },
  {
    date: ['March', ' 1,', ' 2024'],
    event: 'Deadline for Submission of Revised Paper (Final)',
  },
  {
    date: ['March', ' 6,', ' 2024'],
    event: 'Deadline for Submission of Poster',
  },
  { date: ['March', ' 10,', ' 2024'], event: 'Poster Acceptance Notification' },
  { date: ['March', ' 14,', ' 2024'], event: 'Final Poster Submission (e-version)' },
  { date: ['March', ' 20,', ' 2024'], event: 'Pre-Conference Workshop' },
  { date: ['March', ' 21 - 22,', ' 2024'], event: 'Conference' },
];

const StrikedOutDate = ({ date }) => {
  return (
    <span>
      <s style={{ textDecorationColor: 'red' }}>
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

                {/* {idx === 2 && (
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
                */}

                {idx === 5 && (
                  <span id="posterimportantdates" />
                )}

                {/* <p className={[1, 2, 3, 5].includes(idx) ? 'red-text' : ''}> */}
                <p className={[1, 2, 3, 5].includes(idx) ? '' : ''}>
                  {item.date[0]}
                  {item.date[1]}
                  {item.date[2]}
                </p>

                {idx === 6 && (
                  <span style={{ color: 'red' }} className="animate__animated animate__flash animate__slower animate__infinite">
                    Poster Submission
                  </span>
                )}

                {idx === 7 && (
                  <span style={{ color: 'red' }} className="animate__animated animate__flash animate__slower animate__infinite">
                    Poster Submission
                  </span>
                )}

                {idx === 8 && (
                  <span style={{ color: 'red' }} className="animate__animated animate__flash animate__slower animate__infinite">
                    Poster Submission
                  </span>
                )}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
