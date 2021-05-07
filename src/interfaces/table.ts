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