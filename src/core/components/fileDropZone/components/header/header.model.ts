import { FileNodeType } from "../../fileDropZone.model";

export interface HeaderDetails {
  fileType: FileNodeType;
  fileName: string;
}

export interface HeaderProps {
  file: HeaderDetails;
  isFileUploaded: boolean;
}
