import { FileError, FileRejection } from "react-dropzone";
import { HeaderDetails } from "./components/header/header.model";
import { MetadataInputProps } from "./components/metadataInput/metadataInput.model";

export enum FileNodeType {
  Doc = "DOCUMENT",
  Audio = "AUDIO",
}

export interface FileData {
  id: string;
  isUploaded?: boolean;
  file?: File;
  fileName: string;
  errors: FileError[];
  showMetadata?: boolean;
}

export interface Metadata extends Omit<MetadataInputProps, "onChangeCallback"> {
  onChangeCallback: (fileId: string, value: string) => void;
}

export interface FileDropZoneProps {
  /**
   * The file types that are accepted by the file dropZone.
   */
  acceptedFileTypes?: AcceptedFileTypes[];
  /**
   * allow multiple files.
   * If true, multiple files can be uploaded.
   */
  allowMultipleFiles?: boolean;
  /**
   * title.
   * The title of the file upload button.
   */
  buttonLabel: string;
  /**
   * The Prefix of the upload button label.
   */
  buttonLabelPrefix?: string;
  /**
   * The suffix of the upload button label.
   */
  buttonLabelSuffix?: string;
  /**
   * The metadata props for call files.
   */
  metadataList?: Metadata[];
  /**
   * The header information, containing details for the file upload section.
   */
  headerInfo: HeaderDetails;
  /**
   * Files that are currently being uploaded and previously uploaded.
   */
  files: FileData[];
  /**
   * Function that handles file upload and updates progress.
   */
  onUpload: (file: FileData, onProgress: (percentage: number) => void) => void;
  /**
   * Function that handles file drop events, processing accepted and rejected files.
   */
  onDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
  /**
   * Function that handles file deletion.
   */
  onDelete: (fileId: string) => void;
}

export enum AcceptedFileTypes {
  PDF = "application/pdf",
  DOC = "application/msword",
  DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  XLS = "application/vnd.ms-excel",
  XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  PPT = "application/vnd.ms-powerpoint",
  PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  JPEG = "image/jpeg",
  PNG = "image/png",
  SVG = "image/svg+xml",
  GIF = "image/gif",
  TXT = "text/plain",
  CSV = "text/csv",
  MP3 = "audio/mpeg",
  M4A = "audio/mp4",
  WAV = "audio/wav",
  MP4 = "video/mp4",
  AVI = "video/x-msvideo",
  MOV = "video/quicktime",
  WMV = "video/x-ms-wmv",
  MKV = "video/x-matroska",
  FLV = "video/x-flv",
  WEBM = "video/webm",
  MPEG = "video/mpeg",
  ANY = "*/*",
}
