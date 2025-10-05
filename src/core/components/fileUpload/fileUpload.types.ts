import { FileError } from "react-dropzone";

export interface FileUploadProps {
  /**
   * Upload function.
   * Called when a file is dropped or selected.
   * Should return a promise with the url of the uploaded file.
   * @param file - the file to upload
   * @param onProgress - callback to report progress
   * @returns the url of the uploaded file
   */
  uploadFunction: (file: File, onProgress: (percentage: number) => void) => Promise<string>;

  /**
   * accepted file types.
   * The file types that are accepted by the file upload.
   * @optional default is any file type
   */
  acceptedFileTypes?: AcceptedFileTypes[];

  /**
   * allow multiple files.
   * If true, multiple files can be uploaded.
   * @optional - default is true.
   */
  allowMultipleFiles?: boolean;

  /**
   * onUpload callback.
   * Called when a file is uploaded.
   * @param file - the uploaded file with the url and errors
   * @optional
   */
  onUploadCallback?: (file: UploadableFile, url: string | undefined) => void;

  /**
   * onDelete callback.
   * Called when a file is deleted.
   * @param file - the deleted file with the url and erros
   * @optional
   */
  onDeleteCallback?: (file: UploadableFile) => void;

  /**
   * title.
   * The title of the file upload.
   * @optional - default is undefined.
   */
  title?: string;

  /**
   * description.
   * The description text of the file upload.
   * @optional - default is "Drag 'n' drop some files here, or click to select files".
   */
  description?: string;

  /**
   * buttonLabel.
   * The label of the button.
   */
  buttonLabel: string;

  /**
   * buttonLabelSuffix
   * The suffix of the button label.
   * @optional - default is empty.
   */
  buttonLabelSuffix?: string;
}

export interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

export enum AcceptedFileTypes {
  PDF = "application/pdf",
  DOC = "application/msword",
  DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  XLS = "application/vnd.ms-excel",
  XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  PPT = "application/vnd.ms-powerpoint",
  PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  IMAGE = "image/*",
  AUDIO = "audio/*",
  VIDEO = "video/*",
  TEXT = "text/*",
  ANY = "*/*",
}
