const DynamicTable = (records) => {
  const recordsArray = Object.entries(records).map((entry) => entry[1]);
  console.log("array length " + recordsArray.length);
  console.log("array length " + recordsArray);
  console.log(recordsArray.includes("No records found"));
  let check = recordsArray.includes("No records found");
  console.log("check value " + check);
  if (recordsArray.length > 0 && check === false) {
    return (
      <div className="table">
        <div>
          <h1>Records List </h1>
        </div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Diastolic</th>
              <th>HeartRate</th>
              <th>Systolic</th>
              <th>Record Date</th>
            </tr>
          </thead>

          <tbody>
            {recordsArray.map((emp) => (
              <tr className="active-row">
                <td>{emp.diastolic}</td>
                <td>{emp.heartRate}</td>
                <td>{emp.systolic}</td>
                <td>{emp.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (check) {
    return (
      <div className="table">
        <div>
          <div>
            <h1>Record List</h1>
            <p>There are no records to display</p>
          </div>
          <div>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Diastolic</th>
                  <th>HeartRate</th>
                  <th>Systolic</th>
                  <th>Record Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="active-row">
                  <td>NO RECORDS</td>
                  <td>NO RECORDS</td>
                  <td>NO RECORDS</td>
                  <td>NO RECORDS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};
export default DynamicTable;
