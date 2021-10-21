import React from "react";
import classes from "./table.module.css";

const Table = (props) => {
  console.log("table");
  return (
    <div className={classes.table}>
      <table width="100%" rules="none">
        <thead>
          <tr>
            <th colSpan={props.tableheaders.length} align="center">
              {props.tableHeading}
            </th>
          </tr>
          <tr>
            {props.tableheaders.map((header) => {
              return <th>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.tablecontent.map((rows) => {
            console.log(rows);
            return (
              <tr>
                <td>{rows.meetName}</td>
                <td>{rows.time}</td>
                {rows.link ? (
                  <td>
                    <a href={rows.link} target="_blank">
                      Click Here
                    </a>
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
