import React from "react";
import style from "./RecordList.module.css";

function RecordList() {
  return (
    <div className={style.mainContainer}>
      <table className={style.tableC}>
        <tr>
          <td colSpan="2">
            <p className={style.betHistory}>Bet History</p>
          </td>
          <td colSpan="2">
            <select name="cars" id="cars" className={style.selector}>
              <option value="volvo">2D</option>
              <option value="saab">3D</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <p className={style.date}>Start</p>
          </td>
          <td>
            <input type="date" className={style.datePicker} />
          </td>
          <td>
            <p className={style.date}>End</p>
          </td>
          <td>
            <input type="date" className={style.datePicker} />
          </td>
        </tr>

        <tr>
          <td colSpan="4">
            <p className="text-center">There is no data</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RecordList;
