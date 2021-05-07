import { TableColumn } from "src/interfaces/table";
export class TableMapping {
  constructor() {}
  public General: TableColumn[] = [
    { key: "GrantDate", value: { text: "Grant Date", headerClass: "header", datePipeFormat: "DD-MMM-YYYY" } },
    {
      key: "VestingDate",
      value: { text: "Vesting Date", headerClass: "header", datePipeFormat: "DD-MMM-YYYY" },
    },
    {
      key: "LastDateToExercise",
      value: { text: "Last Date To Exercise", headerClass: "header", datePipeFormat: "DD-MMM-YYYY" },
    },
    {
      key: "NoOfOptions",
      value: { text: "No. Of Options", headerClass: "header" },
    },
    {
      key: "ExpiringIn",
      value: { text: "Expiring In", headerClass: "header", dataClass: 'days' },
    },
    {
      key: "NewColumn",
      value: {
        text: "New",
        headerClass: "header",

        datakey: "SchemeId",
        dataClass: "redirect"
      },
    },
    {
      key: "SchemeId",
      value: {
        text: " ",
        headerClass: "header",
        show: false,

        data: "Exercise Now",
        dataClass: "redirect",

        redirect: true,
        redirectPath: "ExerciseNow",
        redirectData: "All"
      }
    },
  ];
}
