const items = [
  {
    day: '21st March 2024, Thursday',
    events: [
      {
        time: '08:15 AM - 8:40 AM',
        event: 'Inagural',
      },
      {
        time: '8:40 AM - 10:00 AM',
        event: `Keynote Talk\n<b>Dr. Vijay John</b>\nResearch Scientist, RIKEN, Japan`,
      },
      {
        time: '10:00 AM - 10:30 AM',
        event: 'Break',
      },
      {
        time: '10:30 AM - 12:30 PM',
        event: 'Paper Presentations\n<b>Track 1, 2, 3, 4</b>',
      },
      {
        time: '12:30 PM - 1:30 PM',
        event: 'Lunch Break',
      },
      {
        time: '1:30 PM - 3:00 PM',
        event:
          'Keynote Talk\n<b>Dr. Karl Mason</b>\nLecturer Above the Bar, School of Computer Science,\nUniversity of Galway, Galway, Ireland',
      },
    ],
  },
  {
    day: '22nd March 2024, Friday',
    events: [
      {
        time: '8:30 AM - 10:00 AM',
        event: `Keynote Talk\n<b>Dr. Wan Khairunizam</b>\nBrain Machine Interface Research Group (FTKE),\nUniversity Malaysia Perlis, Malaysia`,
      },
      {
        time: '10:00 AM - 10:30 AM',
        event: 'Break',
      },
      {
        time: '10:30 AM - 12:00 PM',
        event: `Keynote Talk\n<b>Mr. Anand Ponnusamy</b>\nDirector-Power Platform/Dynamics 365 at Microsoft`,
        addtionalEvent: `Poster Session`,
        colspan: 1,
      },
      {
        time: '12:00 PM - 1:00 PM',
        event: 'Lunch Break',
        colspan: 1,
        // addtionalEvent: `Poster Session`,
      },
      {
        time: '1:00 PM - 3:00 PM',
        event: 'Paper Presentations\n<b>Track 5, 6, 7</b>',
      },
      {
        time: '3:15 PM',
        event: 'Valedictory',
      },
    ],
  },
];

export default function Schedule() {
  return (
    <div id="program_schedule" className="scheduleContainer">
      <h1 className="text-center" style={{ marginBottom: '2rem' }}>
        <b>PROGRAM SCHEDULE</b>
      </h1>

      <table>
        <tbody>
          <tr>
            <th>DAY</th>
            <th>TIME</th>
            <th colSpan={2}>EVENT</th>
          </tr>

          {items.map((item, idx) => (
            <>
              <tr key={idx}>
                <td
                  rowSpan={item.events.length}
                  style={{ textAlign: 'center' }}
                >
                  {item.day}
                </td>
                {item.events.length > 0 && (
                  <>
                    <td style={{ textAlign: 'center' }}>
                      {item.events[0].time}
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        fontFamily: 'inherit',
                        fontSize: '16px',
                        marginBottom: '0px',
                      }}
                    >
                      <pre
                        style={{
                          fontFamily: 'inherit',
                          fontSize: '16px',
                          marginBottom: '0px',
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item.events[0].event,
                        }}
                      >
                        {/* {event.event} */}
                      </pre>
                    </td>
                  </>
                )}
              </tr>
              {item.events.slice(1).map((event, idx) => (
                <tr key={idx}>
                  <td style={{ textAlign: 'center' }}>{event.time}</td>
                  <td colSpan={event?.colspan ? event.colspan : 2}>
                    <pre
                      style={{
                        fontFamily: 'inherit',
                        fontSize: '16px',
                        marginBottom: '0px',
                      }}
                      dangerouslySetInnerHTML={{ __html: event.event }}
                    >
                      {/* {event.event} */}
                    </pre>
                  </td>
                  {event.addtionalEvent && (
                    <td rowSpan={2}>{event.addtionalEvent}</td>
                  )}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
