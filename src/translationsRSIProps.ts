import type { DeepPartial } from "ts-essentials"

export const translations = {
  uploadStep: {
    shortTitle: "Upload file",
    title: "Upload file",
    manifestTitle: "Choose a file on your computer that contains a list of contacts to upload to Spruce.",
    manifestDescription: "",
    maxRecordsExceeded: (maxRecords: string) => `Too many records. Up to ${maxRecords} allowed`,
    dropzone: {
      title: "Upload .xlsx, .xls or .csv file",
      errorToastDescription: "upload rejected",
      activeDropzoneTitle: "Drop file here...",
      buttonTitle: "Select file",
      loadingTitle: "Processing...",
    },
    selectSheet: {
      title: "Select the sheet to use",
      nextButtonTitle: "Next",
    },
  },
  selectHeaderStep: {
    shortTitle: "Find column names",
    title: "Which row in your file contains the column names?",
  },
  matchColumnsStep: {
    shortTitle: "Match columns",
    title: "Match columns",
    nextButtonTitle: "Next",
    userTableTitle: "Your table",
    templateTitle: "Will become",
    selectPlaceholder: "Select column...",
    ignoredColumnText: "Column ignored",
    subSelectPlaceholder: "Select...",
    matchDropdownTitle: "Match",
    unmatched: "Unmatched",
    duplicateColumnWarningTitle: "Another column unselected",
    duplicateColumnWarningDescription: "Columns cannot duplicate",
  },
  validationStep: {
    shortTitle: "Validate data",
    title: "Validate data",
    nextButtonTitle: "Confirm",
    noRowsMessage: "No data found",
    noRowsMessageWhenFiltered: "No data containing errors",
    discardButtonTitle: "Discard selected rows",
    filterSwitchTitle: "Show only rows with errors",
  },
  alerts: {
    confirmClose: {
      headerTitle: "Exit import flow",
      bodyText: "Are you sure? Your current information will not be saved.",
      cancelButtonTitle: "Cancel",
      exitButtonTitle: "Exit flow",
    },
    submitIncomplete: {
      headerTitle: "Errors detected",
      bodyText: "There are still some rows that contain errors. Rows with errors will be ignored when submitting.",
      bodyTextSubmitForbidden: "There are still some rows containing errors.",
      cancelButtonTitle: "Cancel",
      finishButtonTitle: "Submit",
    },
    unmatchedRequiredFields: {
      headerTitle: "Not all columns matched",
      bodyText: "There are required columns that are not matched or ignored. Do you want to continue?",
      listTitle: "Columns not matched:",
      cancelButtonTitle: "Cancel",
      continueButtonTitle: "Continue",
    },
    toast: {
      error: "Error",
    },
  },
}

export type TranslationsRSIProps = DeepPartial<typeof translations>
export type Translations = typeof translations
