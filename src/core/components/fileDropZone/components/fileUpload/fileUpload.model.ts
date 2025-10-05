import { AcceptedFileTypes, FileData, Metadata } from "../../fileDropZone.model";

export interface FileUploadProps {
  fileData: FileData;
  onUpload: (file: FileData, onProgress: (percentage: number) => void) => void;
  metadataList?: Metadata[];
  onDelete: (fileId: string) => void;
  uploadConfig: UploadConfig;
}

export interface UploadConfig {
  acceptedFileTypes: AcceptedFileTypes[];
}
