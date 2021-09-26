import React from "react";
import "./sidebar.css";
import { SidebarData } from "./SidebarData";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Table from "../Components/Table/Table";
import { tableData } from "./tableData";

function Sidebar() {
  return (
    <>
      <Router>
        <div className="side-bar">
          <ul className="SidebarList">
            {SidebarData.map((val, key) => {
              return (
                <li key={key} className="row" id={window.location.pathname == val.link ? "active" : ""}>
                  <Link to={val.link} className="tittle">
                    {val.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Switch>
          <Route path="/home">
            <Table tableHeading="Ongoing Meeting" tableheaders={tableData.meetingTableHeadings} tablecontent={tableData.meetingTableContents} />
          </Route>
          <Route path="/timetable">
            <Table tableHeading="Scheduled Meetings" tableheaders={tableData.scheduleTableHeadings} tablecontent={tableData.scheduleTableContents} />
          </Route>
          {/* /////////////////// */}
          <Route path="/exam">
            <Table tableHeading="Exams" tableheaders={tableData.examHeadings} tablecontent={tableData.examContents} />
          </Route>
          <Route path="/sylabus">
            <Table tableHeading="Syllabus" tableheaders={tableData.syllabusTableHeadings} tablecontent={tableData.syllabusTableContents} />
          </Route>
          <Route path="/practise">
            <Table tableHeading="Practice" tableheaders={tableData.practiseHeadings} tablecontent={tableData.practiseContents} />
          </Route>
          <Route path="/material">
            <Table tableHeading="Material" tableheaders={tableData.StudymaterialTableHeadings} tablecontent={tableData.StudymaterialTableContents} />
          </Route>
          <Route path="/quena">
            <Table tableHeading="Questions And Answers" tableheaders={tableData.QAndAHeadings} tablecontent={tableData.QAndATableContents} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Sidebar;
