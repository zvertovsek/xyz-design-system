import { IconButton } from "@core/components/button";
import Layout, { Container } from "@core/components/layout";
import Typography from "@core/components/typography";
import Icons from "@icons";
import React, { useEffect, useState } from "react";
import { MetadataInput } from "../metadataInput";
import { FileUploadProps } from "./fileUpload.model";
import {
  ErrorMessage,
  FileInfo,
  FileWrapper,
  MetadataAndDeleteIcon,
  MetadataWrapper,
  ProgressBar,
} from "./fileUpload.styles";
import { parseErrorCode } from "./fileUpload.utils";

export const FileUpload: React.FC<FileUploadProps> = ({ fileData, onUpload, metadataList, onDelete, uploadConfig }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!fileData.isUploaded && !fileData.errors.length) {
      const upload = async () => {
        await onUpload(fileData, setProgress);
      };

      upload();
    }
  }, []);

  if (fileData.errors.length) {
    return (
      <FileWrapper>
        <Layout.FlexboxContainer justifyContent="space-between">
          <Typography.B2>{fileData.fileName}</Typography.B2>
          <IconButton icon={Icons.TrashIcon} isOnWhiteBackground onClick={() => onDelete(fileData.id)} />
        </Layout.FlexboxContainer>
        {fileData.errors.map((error) => (
          <Container key={error.code}>
            <ErrorMessage>{parseErrorCode(error.code, uploadConfig)}</ErrorMessage>
          </Container>
        ))}
      </FileWrapper>
    );
  }

  return (
    <FileWrapper>
      <FileInfo>
        <Layout.Container>
          <Typography.B2>{fileData.fileName}</Typography.B2>
          {!fileData.isUploaded && (
            <ProgressBar
              progress={progress}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          )}
        </Layout.Container>
        <MetadataAndDeleteIcon>
          {metadataList && fileData.showMetadata !== false && fileData.isUploaded && (
            <MetadataWrapper>
              {metadataList.map((metadata, index) => (
                <MetadataInput
                  key={index}
                  {...metadata}
                  onChangeCallback={(value) => metadata.onChangeCallback(fileData.id, value)}
                />
              ))}
            </MetadataWrapper>
          )}
          {fileData.isUploaded && (
            <IconButton icon={Icons.TrashIcon} isOnWhiteBackground onClick={() => onDelete(fileData.id)} />
          )}
        </MetadataAndDeleteIcon>
      </FileInfo>
    </FileWrapper>
  );
};

export default FileUpload;
