export interface TableEntry {
    text: string; // header text
    headerClass?: string | "";
    show?: boolean | true; // header to be show ?
  
    data?: string;
    dataClass?: string | ""; // data class
  
    redirect?: boolean;
    redirectPath?: string;
    redirectData?: string; // "All" for complete element or specify key eg: text, redirectTo
  
    datePipeFormat?: string;
  }
  
  export class TableMapping {
    constructor() {}
    public General: { key: string; value: TableEntry }[] = [
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
        },
      },
    ];
  }
  