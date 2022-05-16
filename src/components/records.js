const DynamicTable = (records) => {
  const recordsArray = Object.entries(records).map((entry) => entry[1]);
  let check = recordsArray.includes("No records found");

  if (recordsArray.length > 0 && check === false) {
    return (
      <div className="table">
        <div>
          <h1>Records List </h1>
        </div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Record Date</th>
              <th>Diastolic</th>
              <th>Systolic</th>
              <th>HeartRate</th>
            </tr>
          </thead>

          <tbody>
            {recordsArray.map((emp, index) => (
              <tr key={index} className="active-row">
                <td>{formatDate(emp.updatedAt)}</td>
                <td>{emp.diastolic}</td>
                <td>{emp.systolic}</td>
                <td>{emp.heartRate}</td>
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
                  <th>Record Date</th>
                  <th>Diastolic</th>
                  <th>Systolic</th>
                  <th>HeartRate</th>
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

function formatDate(value) {
  const date = new Date(value);
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  const formatDate = year + "-" + month + "-" + day;
  return formatDate;
}
export default DynamicTable;
