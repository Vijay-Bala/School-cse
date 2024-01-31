import React, { useState } from "react";

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const generateDates = (startWeek) => {
    const startDate = new Date("2024-04-15");
    startDate.setDate(startDate.getDate() + (startWeek - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4);

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const dates = generateDates(selectedWeek);

  const pdfLinks = [
    // Replace the placeholders with your actual PDF file URLs
    "https://drive.google.com/file/d/1QZSOtTeC96_i4f0ArcBUwnUAuO2SIH9F/view?usp=sharing",
    "https://drive.google.com/file/d/1rWSRsaoArwI4GAcZ-oAodAmlBqfY9lOX/view?usp=sharing",
    "https://drive.google.com/file/d/1-r3iz12MKghYVihPvYrAWbwKLrxHflP8/view?usp=sharing",
    "https://drive.google.com/file/d/1wpRUN8RzrT25xjLmlE-3Q0fet8IJOecV/view?usp=sharing",
    "https://drive.google.com/file/d/1QM-yLR3d617TkroLqeXjKxuFfTmIfc3i/view?usp=sharing",
    "https://drive.google.com/file/d/1bHuKONaWRDO1shB2YrIwQf31AqaUsWQh/view?usp=sharing",
    "https://drive.google.com/file/d/13CiZruE7vfwvPErNa-Q1E3fNT-b2yItp/view?usp=sharing",
    "https://drive.google.com/file/d/1ULySMVctpTn5BTLhscuOEFb-WqBkN1n6/view?usp=sharing",
    "https://drive.google.com/file/d/1pM6E6zJwnmIKJFW7PPMVIRcsiXZcq3c0/view?usp=sharing",
    "https://drive.google.com/file/d/1aSrxVkQGhgxIyZCUG2fHkptdqfcZ04DW/view?usp=sharing",
    "https://drive.google.com/file/d/1yTQwKpQvmdOMKj6HwNPqZZfPRFM5B2FW/view?usp=sharing",
    "https://drive.google.com/file/d/1Ac_5R7gLo-hoKYCpVpd9QyU7ijpVs7IQ/view?usp=sharing",
    "https://drive.google.com/file/d/1vIsotnFbjjBWiCItTH1FFQ5n5ciNKQhF/view?usp=sharing",
    "https://drive.google.com/file/d/130DvK3wU3wZte_AkazJuUHRonlsvvUFW/view?usp=sharing",
    "https://drive.google.com/file/d/1R4rT6LRVn2jsdB5Ix57b4tPfyHapm4RE/view?usp=sharing",
    "https://drive.google.com/file/d/1FBXlfGFLE0xd29-JcgjCFC0rll-Wr5li/view?usp=sharing",
    "https://drive.google.com/file/d/17iKJgWnXk6vNo9ZBEXiwuaqxPgSj3ZbF/view?usp=sharing",
    "https://drive.google.com/file/d/1yLY-ZjOIBxxaiojXg7tRTq0vtDSXhvFf/view?usp=sharing",
    "https://drive.google.com/file/d/1jcsJ0PJxu6__ebix17dLr9U-oKd1DOFJ/view?usp=sharing",
    "https://drive.google.com/file/d/1ExaxhrCfQHumxBfHVEuKYQSVWRI3NTDr/view?usp=sharing",
    "https://drive.google.com/file/d/1nsuye8mf-PAZfBGU9v3L5_hyxf4R3Tmd/view?usp=sharing",
    "https://drive.google.com/file/d/1BGHKhEyNOXogrGQXRtt5ez-goiZWX8Jk/view?usp=sharing",
    "https://drive.google.com/file/d/1NjVGdWEnyGqICMBz36bNgrrZ6MsMcLIv/view?usp=sharing",
    "https://drive.google.com/file/d/1ANwTvEgPBUwCxE9ftYc7Ihn0jFdysMy6/view?usp=sharing",
    "https://drive.google.com/file/d/1ujDY2U5V5AdiOrkhmWSsV_g_Um1VcMaL/view?usp=sharing",
    "https://drive.google.com/file/d/1uFucRIaRm7WpTwdE7dkBKnKG1Yu2eqat/view?usp=sharing",
    "https://drive.google.com/file/d/1MtxZE3QkBv6Hd5NVAMhBIkBD0oaGE9Mk/view?usp=sharing",
    "https://drive.google.com/file/d/1kv3iNpdoTiBMHv25bqVmdd7LUGZXfEhc/view?usp=sharing",
    "https://drive.google.com/file/d/15wS_Uk79lSdt_ndF5lj3IRiT3WKC_jsT/view?usp=sharing",
    "https://drive.google.com/file/d/1O7qE4_tskwc7G1hHbYL41PTzLb1TiShG/view?usp=sharing",
  ];

  return (
    <div className="schedule-container" style={{ marginTop: '10vh', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', padding:'2vh', background:'#fafafa'}}>
      <h2 style={{ fontSize: '3rem' }}>Syllabus</h2>
      <table
        style={{
          width: "80%",
          margin: "0 auto",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              onClick={() => handleWeekChange(1)}
              style={{
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: selectedWeek === 1 ? "#007BFF" : "whitesmoke",
                transition: "background-color 0.5s",
              }}
            >
              Week 1
            </th>
            <th
              onClick={() => handleWeekChange(2)}
              style={{
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: selectedWeek === 2 ? "#007BFF" : "whitesmoke",
                transition: "background-color 0.5s",
              }}
            >
              Week 2
            </th>
            <th
              onClick={() => handleWeekChange(3)}
              style={{
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: selectedWeek === 3 ? "#007BFF" : "whitesmoke",
                transition: "background-color 0.5s",
              }}
            >
              Week 3
            </th>
            <th
              onClick={() => handleWeekChange(4)}
              style={{
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: selectedWeek === 4 ? "#007BFF" : "whitesmoke",
                transition: "background-color 0.5s",
              }}
            >
              Week 4
            </th>
            <th
              onClick={() => handleWeekChange(5)}
              style={{
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: selectedWeek === 5 ? "#007BFF" : "whitesmoke",
                transition: "background-color 0.5s",
              }}
            >
              Week 5
            </th>
            <th
              onClick={() => handleWeekChange(6)}
              style={{
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: selectedWeek === 6 ? "#007BFF" : "whitesmoke",
                transition: "background-color 0.5s",
              }}
            >
              Week 6
            </th>
          </tr>
        </thead>
      </table>

      <table
        style={{
          width: "80%",
          margin: "20px auto",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Date</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Day</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Materials</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: dates[0] % 2 === 0 ? "white" : "whitesmoke" }}>
            <td style={{ border: "1px solid black", padding: "8px", background:'whitesmoke' }}>{`${dates[0].getDate()}.${dates[0].getMonth() + 1}.${dates[0].getFullYear()}`}</td>
            <td style={{ border: "1px solid black", padding: "8px", background:'whitesmoke' }}>{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][dates[0].getDay()]}</td>
            <td style={{ border: "1px solid black", padding: "8px", background:'whitesmoke' }}>
              <a
                href={pdfLinks[((selectedWeek-1) * 5) + 0]}
                className="syllabus-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "5px",
                  textDecoration: "none",
                  color: "#007BFF",
                  transition: "background-color 0.3s",
                }}
              >
                View Materials
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: dates[1] % 2 === 0 ? "white" : "whitesmoke" }}>
            <td style={{ border: "1px solid black", padding: "8px" }}>{`${dates[1].getDate()}.${dates[1].getMonth() + 1}.${dates[1].getFullYear()}`}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][dates[1].getDay()]}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <a
                href={pdfLinks[((selectedWeek-1) * 5) + 1]}
                className="syllabus-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "5px",
                  textDecoration: "none",
                  color: "#007BFF",
                  transition: "background-color 0.3s",
                }}
              >
                View Materials
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: dates[2] % 2 === 0 ? "white" : "whitesmoke" }}>
            <td style={{ border: "1px solid black", padding: "8px", background:'whitesmoke' }}>{`${dates[2].getDate()}.${dates[2].getMonth() + 1}.${dates[2].getFullYear()}`}</td>
            <td style={{ border: "1px solid black", padding: "8px", background:'whitesmoke' }}>{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][dates[2].getDay()]}</td>
            <td style={{ border: "1px solid black", padding: "8px", background:'whitesmoke' }}>
              <a
                href={pdfLinks[((selectedWeek-1) * 5) + 2]}
                className="syllabus-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "5px",
                  textDecoration: "none",
                  color: "#007BFF",
                  transition: "background-color 0.3s",
                }}
              >
                View Materials
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: dates[3] % 2 === 0 ? "white" : "whitesmoke" }}>
            <td style={{ border: "1px solid black", padding: "8px" }}>{`${dates[3].getDate()}.${dates[3].getMonth() + 1}.${dates[3].getFullYear()}`}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][dates[3].getDay()]}</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <a
                href={pdfLinks[((selectedWeek-1) * 5) + 3]}
                className="syllabus-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "5px",
                  textDecoration: "none",
                  color: "#007BFF",
                  transition: "background-color 0.3s",
                }}
              >
                View Materials
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: dates[4] % 2 === 0 ? "white" : "whitesmoke" }}>
            <td style={{ border: "1px solid black", padding: "8px", background:'whitesmoke'}}>{`${dates[4].getDate()}.${dates[4].getMonth() + 1}.${dates[4].getFullYear()}`}</td>
            <td style={{ border: "1px solid black", padding: "8px", background:'whitesmoke' }}>{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][dates[4].getDay()]}</td>
            <td style={{ border: "1px solid black", padding: "8px", background:'whitesmoke' }}>
              <a
                href={pdfLinks[((selectedWeek-1) * 5) + 4]}
                className="syllabus-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "5px",
                  textDecoration: "none",
                  color: "#007BFF",
                  transition: "background-color 0.3s",
                }}
              >
                View Materials
              </a>
            </td>
          </tr>
          
          {/* Repeat the above block for each cell, adjusting the index accordingly */}
          
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
