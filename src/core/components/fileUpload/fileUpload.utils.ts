import { AcceptedFileTypes } from "./fileUpload.types";

const fileTypeMap: Record<AcceptedFileTypes, string[]> = {
  [AcceptedFileTypes.PDF]: [".pdf"],
  [AcceptedFileTypes.DOC]: [".doc"],
  [AcceptedFileTypes.DOCX]: [".docx"],
  [AcceptedFileTypes.XLS]: [".xls"],
  [AcceptedFileTypes.XLSX]: [".xlsx"],
  [AcceptedFileTypes.PPT]: [".ppt"],
  [AcceptedFileTypes.PPTX]: [".pptx"],
  [AcceptedFileTypes.IMAGE]: [".png", ".jpg", ".jpeg", ".gif", ".svg"],
  [AcceptedFileTypes.AUDIO]: [".mp3", ".m4a", ".wav", ".ogg"],
  [AcceptedFileTypes.VIDEO]: [".mp4", ".avi", ".mov"],
  [AcceptedFileTypes.TEXT]: [".txt", ".csv"],
  [AcceptedFileTypes.ANY]: [],
};

export function getAcceptedFileTypes(fileTypes: AcceptedFileTypes[]): { [key: string]: string[] } {
  const acceptedFileTypesObject: { [key: string]: string[] } = {};

  fileTypes.forEach((type) => {
    const formattedFileType = fileTypeMap[type];
    if (formattedFileType) {
      acceptedFileTypesObject[type] = formattedFileType;
    }
  });

  return acceptedFileTypesObject;
}
