import { AcceptedFileTypes } from "./fileDropZone.model";

const fileTypeMap: Record<AcceptedFileTypes, string[]> = {
  [AcceptedFileTypes.PDF]: [".pdf"],
  [AcceptedFileTypes.DOC]: [".doc"],
  [AcceptedFileTypes.DOCX]: [".docx"],
  [AcceptedFileTypes.XLS]: [".xls"],
  [AcceptedFileTypes.XLSX]: [".xlsx"],
  [AcceptedFileTypes.PPT]: [".ppt"],
  [AcceptedFileTypes.PPTX]: [".pptx"],
  [AcceptedFileTypes.JPEG]: [".jpeg", ".jpg"],
  [AcceptedFileTypes.PNG]: [".png"],
  [AcceptedFileTypes.SVG]: [".svg"],
  [AcceptedFileTypes.GIF]: [".gif"],
  [AcceptedFileTypes.TXT]: [".txt"],
  [AcceptedFileTypes.CSV]: [".csv"],
  [AcceptedFileTypes.MP3]: [".mp3"],
  [AcceptedFileTypes.M4A]: [".m4a"],
  [AcceptedFileTypes.WAV]: [".wav"],
  [AcceptedFileTypes.MP4]: [".mp4"],
  [AcceptedFileTypes.AVI]: [".avi"],
  [AcceptedFileTypes.MOV]: [".mov"],
  [AcceptedFileTypes.WMV]: [".wmv"],
  [AcceptedFileTypes.MKV]: [".mkv"],
  [AcceptedFileTypes.FLV]: [".flv"],
  [AcceptedFileTypes.WEBM]: [".webm"],
  [AcceptedFileTypes.MPEG]: [".mpeg", ".mpg"],
  [AcceptedFileTypes.ANY]: [],
};

export function getAcceptedFileTypes(fileTypes: AcceptedFileTypes[]): { [key: string]: string[] } {
  const acceptedFileTypesObject: { [key: string]: string[] } = {};

  fileTypes.forEach((type) => {
    const formattedFileType = fileTypeMap[type];
    if (!acceptedFileTypesObject[type]) {
      acceptedFileTypesObject[type] = formattedFileType;
    }
  });

  return acceptedFileTypesObject;
}
