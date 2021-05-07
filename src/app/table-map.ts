export interface TableEntry {
    text: string;            // header text
    headerClass?: string | "";
    show?: boolean;   // header to be show ?
    
    data?: string;           // Custom data to be printed
    datakey?: string;        // key to be printed
    dataClass?: string | ""; // data class
    
    redirect?: boolean;
    redirectPath?: string;
    redirectData?: string;   // "All" for complete element or specify key eg: text, redirectTo
    
    datePipeFormat?: string;

    displayColumn?: boolean; // header to be show ?
  }
  
  export interface TableColumn{ 

     // Key from the (key,value) pair of your data source. 
     // For a new column to be added, set this variable to any random/unique string.
    key: string;
    value: TableEntry | string
  }

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
  