import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Container } from "../layout";
import { SingleFileUploadWithProgress, UploadError } from "./components";
import {
  FileUploadButton,
  FileUploadContainer,
  FileUploadInput,
  FileUploadLabel,
  FileWrapper,
  UploadedFiles,
} from "./fileUpload.styles";
import { AcceptedFileTypes, FileUploadProps, UploadableFile } from "./fileUpload.types";
import { getAcceptedFileTypes } from "./fileUpload.utils";

export const FileUpload: React.FC<FileUploadProps> = ({
  acceptedFileTypes = [AcceptedFileTypes.ANY],
  allowMultipleFiles = true,
  title,
  buttonLabel = "Browse files",
  buttonLabelSuffix = "from your computer",
  uploadFunction,
  onUploadCallback,
  onDeleteCallback,
}) => {
  const [files, setFiles] = useState<UploadableFile[]>([]);
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    const mappedRej = rejFiles.map((r) => ({ ...r }));
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: false,
    noKeyboard: true,
    noDrag: true,
    multiple: allowMultipleFiles,
    accept: getAcceptedFileTypes(acceptedFileTypes),
  });

  const onUpload = (file: File, url: string | undefined) => {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      }),
    );

    if (onUploadCallback) {
      const uploadedFile = files.find((fw) => fw.file === file);
      if (uploadedFile) {
        onUploadCallback(uploadedFile, url);
      }
    }
  };

  const onDelete = (file: File) => {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));

    if (onDeleteCallback) {
      const deletedFile = files.find((fw) => fw.file === file);
      if (deletedFile) {
        onDeleteCallback(deletedFile);
      }
    }
  };

  const showFileUploadButton = allowMultipleFiles ? true : files.length === 0;

  return (
    <FileUploadContainer>
      <Container {...getRootProps()} onClick={(e) => e.stopPropagation()}>
        <FileUploadInput {...getInputProps()} />
        {files.length === 0 && title && <FileUploadLabel>{title}</FileUploadLabel>}
        {showFileUploadButton && (
          <FileUploadLabel>
            <FileUploadButton onClick={open}>{buttonLabel}</FileUploadButton>
            {buttonLabelSuffix}
          </FileUploadLabel>
        )}
      </Container>
      <UploadedFiles className="uploaded-files">
        {files.map((fileWrapper, index) => (
          <FileWrapper key={index}>
            {fileWrapper.errors.length ? (
              <UploadError file={fileWrapper.file} errors={fileWrapper.errors} onDelete={onDelete} />
            ) : (
              <SingleFileUploadWithProgress
                uploadFunction={uploadFunction}
                onDelete={onDelete}
                onUpload={onUpload}
                file={fileWrapper.file}
              />
            )}
          </FileWrapper>
        ))}
      </UploadedFiles>
    </FileUploadContainer>
  );
};

export default FileUpload;
