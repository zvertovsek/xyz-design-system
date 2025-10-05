import Icons, { IconSize } from "@icons";
import { useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { useTheme } from "styled-components";
import { FileUpload, Header } from "./components";
import { AcceptedFileTypes, FileDropZoneProps } from "./fileDropZone.model";
import {
  FilesContainer,
  FileUploadButton,
  FileUploadInput,
  FileUploadLabel,
  IconContainer,
  MainWrapper,
  UploadContainer,
} from "./fileDropZone.styles";
import { getAcceptedFileTypes } from "./fileDropZone.utils";

export const FileDropZone: React.FC<FileDropZoneProps> = ({
  acceptedFileTypes = [AcceptedFileTypes.ANY],
  allowMultipleFiles = true,
  buttonLabelPrefix = "Drag and drop or",
  buttonLabel = "Browse files",
  buttonLabelSuffix = "from your computer",
  onUpload,
  onDelete,
  metadataList,
  headerInfo,
  files,
  onDrop,
}) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const isUploaded: boolean = files.some((file) => file.isUploaded);
  const showFileUploadButton = allowMultipleFiles ? true : files.length === 0;
  const theme = useTheme();

  const onDropFile = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    setIsDraggingOver(false);
    onDrop(acceptedFiles, fileRejections);
  };

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDraggingOver(true);
    }
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDraggingOver(false);
    }
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: onDropFile,
    noClick: false,
    noKeyboard: true,
    noDrag: false,
    multiple: allowMultipleFiles,
    accept: getAcceptedFileTypes(acceptedFileTypes),
  });

  return (
    <MainWrapper data-testid="fileDropZoneComponent">
      <FilesContainer className="uploaded-files" isLarge={!!files.length}>
        {headerInfo && <Header file={headerInfo} isFileUploaded={isUploaded} />}
        {files.map((fileData) => (
          <FileUpload
            key={fileData.id}
            onUpload={onUpload}
            fileData={fileData}
            metadataList={metadataList}
            onDelete={onDelete}
            uploadConfig={{ acceptedFileTypes }}
          />
        ))}
      </FilesContainer>
      {showFileUploadButton && (
        <UploadContainer
          {...getRootProps()}
          onClick={(e) => e.stopPropagation()}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          isDragging={isDraggingOver}
        >
          <FileUploadInput {...getInputProps()} />
          <IconContainer isDragging={isDraggingOver}>
            <Icons.UploadIcon color={theme.colorPalettes.primary.accent[600]} size={IconSize.xl} />
          </IconContainer>
          <FileUploadLabel>
            {buttonLabelPrefix}
            <FileUploadButton onClick={open}>{buttonLabel}</FileUploadButton>
            {buttonLabelSuffix}
          </FileUploadLabel>
        </UploadContainer>
      )}
    </MainWrapper>
  );
};

export default FileDropZone;
