export interface SingleFileUploadWithProgressProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string | undefined) => void;
  uploadFunction: (file: File, onProgress: (percentage: number) => void) => Promise<string | undefined>;
}
