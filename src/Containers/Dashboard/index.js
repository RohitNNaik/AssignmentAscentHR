import React, { Component } from "react";
// import Table from "../../Components/Table";
import StatusPill from '../../Components/StatusPill';
import DataTable, { createTheme } from "react-data-table-component";
import { overDueTable, projectData, queriesData } from "../../Assets/data";
import "./index.css";
import Stepper from "react-stepper-horizontal";
import VerticalLinearStepper from "../../Components/verticleStepper/verticleStepper";

const styles = { fontFamily: 'monospace',
      fontSize: '15px',/* 
      fontWeight: 'bold', */
      color: '#848484'};
const overdueTasksColumns = [
  {
    name: "Company",
    selector: "title",
    sortable: false,
    width: "190px",
    style: styles,
    cell: row => {
      return (
        <div style={{display: 'flex', alignItems: 'center'}}>
          <StatusPill
            style={{ position:'absolute', borderRadius: 50,position: "absolute",
            borderRadius: "50%",
            fontSize: 10,
            padding: "8px 3px",
            zIndex: 1500, fontFamily: 'monospace', fontWeight: 'bold', }}
            color={"#ffffff"}
            label={"1000"}
            bgColor={"#848484"}
          />
          <span style={{position: "relative", verticalAlign: "middle", paddingLeft: 30}}>{row.title}</span>
        </div>
      );
    }
  },
  {
    name: "Task",
    selector: "task",
    sortable: false,
    width: "190px",
    style: styles
  },
  {
    name: "Status",
    selector: "status",
    sortable: false,
    style: styles,
    cell: row => {
      return (
        <StatusPill
          style={{padding: "4px 7px", width: 70, borderRadius: 4, fontSize:14 }}
          color={"#EA4357"}
          label={row.status}
          bgColor={row.status === "OverDue" ? "#F5C9D0" : "#FFE3AF"}
        />
      );
    }
  },
  {
    name: "Days",
    selector: "days",
    sortable: false,
    style: styles,
    cell: row => {
      return (
        <StatusPill
          style={{fontWeight: 'bold', fontFamily: 'monospace', padding: "3px 8px", borderRadius: 4, fontSize:12 }}
          cellData={row}
          label={row.days}
          bgColor={"#848484"}
          color={"#ffffff"}
        />
      );
    }
  }
];

const upcomingTaskColumns = [
  {
    name: "Company",
    selector: "title",
    sortable: false,
    style: styles,
    cell: row => {
      return (
        <div style={{display: 'flex', alignItems: 'center'}}>
          <StatusPill
            style={{
              position: "absolute",
              borderRadius: 50,
              position: "absolute",
              borderRadius: "50%",
              padding: "8px 3px",
              zIndex: 1500,
              fontSize: 10
            }}
            color={"#ffffff"}
            label={"1000"}
            bgColor={"#848484"}
          />
          <span
            style={{
              position: "relative",
              verticalAlign: "middle",
              paddingLeft: 30
            }}
          >
            {row.title}
          </span>
        </div>
      );
    }
  },
  {
    name: "Task",
    selector: "task",
    sortable: false,
    style: { padding: "1px 7px", color: "#848484"}
  },
  {
    name: "Days",
    selector: "days",
    sortable: false,
    width: "70px",
    cell: row => {
      return (
        <StatusPill
          style={{
            padding: "3px 8px",
            borderRadius: 4,
            fontFamily: "monospace",
            fontSize: "12px",
            fontWeight: "bold"
          }}
          cellData={row}
          label={row.days}
          bgColor={"#848484"}
          color={"#ffffff"}
        />
      );
    }
  }
];

const projectTabColumns = [
  {
    name: "Projects",
    selector: "title",
    sortable: false,
    style: styles
  },
  {
    name: "Start Date & Date",
    selector: "duration",
    sortable: false,
    style: styles
  },
  {
    name: "Due",
    selector: "due",
    sortable: false,
    width: "80px",
    style: styles,
    cell: row => {
      return (
        <StatusPill
          style={{
            padding: "3px 8px",
            fontFamily: "monospace",
            fontSize: "12px",
            fontWeight: "bold",
            borderRadius: 4
          }}
          cellData={row}
          label={row.due}
          bgColor={"#848484"}
          color={"#ffffff"}
        />
      );
    }
  }
];

const queries = [
  {
    name: "Company",
    selector: "company",
    sortable: false,
    style: styles,
    cell: row => {
      return (
        <div style={{display: 'flex', alignItems: 'center'}}>
          <StatusPill
            style={{fontSize:10, position:'absolute', borderRadius: 50,
            borderRadius: "50%",
            padding: "8px 3px",
            zIndex: 1500 }}
            color={"#ffffff"}
            label={"1000"}
            bgColor={"#848484"}
          />
          <span style={{position: "relative", verticalAlign: "middle", paddingLeft: 30}}>{row.company}</span>
        </div>
      );
    }
  },  {
    name: "Employer Queries",
    selector: "query",
    sortable: false,
    style: styles
  },  {
    name: "TAT 0-8",
    selector: "TAT1",
    sortable: false,
    width: "100px",
    style: styles
  },  {
    name: "TAT 8-16",
    selector: "TAT2",
    sortable: false,
    width: "100px",
    style: styles
  },{
    name: "TAT 16-24",
    selector: "TAT3",
    sortable: false,
    width: "100px",
    style: styles
  }, {
    name: "TAT 24+",
    selector: "TAT4",
    sortable: false,
    width: "100px",
    style: styles
  },
]; 

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid m-bottom-40">
        <div className={"dashbaord-labels"}>
          <span className={"label-text"}>Payroll Processor</span>
          <span className={"label-text"}>Payroll Processor > Dashboard</span>
        </div>
        <div className={"col-md-12"}>
          {/* allocated entire row with 12 cols */}
          <div className={"row"}>
            {/* puts child contents horizontally and negates padding */}
            <div className={"col-md-5"}>
              <div className={"card"}>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <div className={"text-format"}>
                    Overdue Tasks 08
                  </div>
                  <Stepper
                    width={"300px"}
                    circleFontSize={0}
                    size={12}
                    completeColor={"#FFE3AF"}
                    activeColor={"red"}
                    steps={[{}, {}, {}, {}, {}, {}, {}, {}]}
                    activeStep={4}
                  />
                </div>

                <DataTable
                  columns={overdueTasksColumns}
                  theme="solarized"
                  data={overDueTable.data}
                  noHeader={true}
                />
              </div>
            </div>
            <div className={"col-md-7"}>
              <div className={"row"}>
                <div className={"col-md-6"}>
                  <div className={"card"}>
                    <span className={"text-format"}>
                      Upcoming Task 08
                    </span>
                    <DataTable
                      columns={upcomingTaskColumns}
                      theme="solarized"
                      data={overDueTable.data}
                      noHeader={true}
                    />
                  </div>
                </div>
                <div className={"col-md-6"}>
                  <div className={"card"}>
                    <span className={"text-format"}>
                      Projects 09
                    </span>
                    <DataTable
                      columns={projectTabColumns}
                      theme="solarized"
                      data={projectData.data}
                      noHeader={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"col-md-12 m-top-20"}>
          <div className={"row space-around"}>
            <div className={"col-md-8 queries-md-tab1"}>
              <div className="card">
                <span className={"text-format"}>
                  Queries
                </span>
                <DataTable
                  columns={queries}
                  theme="solarized"
                  data={queriesData.data}
                  noHeader={true}
                />
              </div>
            </div>
            <div className={"col-md-3 queries-md-tab2"}>
              <div className={'md-tab2-header'}>
              <span>unread</span>
              <span>All</span>
              </div>
              <hr className={'divider'}/>
              <VerticalLinearStepper/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
