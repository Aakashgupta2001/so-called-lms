import React from "react";
import classes from "./table.module.css";

const Table = () => {
  return (
    <div className={classes.table}>
      <table width="100%" rules="none">
        <thead>
          <tr>
            <th colSpan="8" align="center">
              MEETING NOTIFICATIONS
            </th>
          </tr>
          <tr>
            <th>Sr No</th>
            <th>Meeting Name</th>
            <th>Teacher Name</th>
            <th>Batch</th>
            <th>Date</th>
            <th>Time</th>
            <th>Remark</th>
            <th>Meeting Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 1</td>
          </tr>
          <tr>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 1</td>
          </tr>
          <tr>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 1</td>
          </tr>
          <tr>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 1</td>
          </tr>
          <tr>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 2</td>
            <td>Head 3</td>
            <td>Head 1</td>
            <td>Head 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
