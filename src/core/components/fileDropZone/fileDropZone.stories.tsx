import { Meta, StoryFn } from "@storybook/react";
import { useCallback, useState } from "react";
import { FileRejection } from "react-dropzone";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import FileDropZone from "./fileDropZone";
import { AcceptedFileTypes, FileData, FileDropZoneProps, FileNodeType } from "./fileDropZone.model";

export default {
  title: "Components/FileDropZone",
  component: FileDropZone,
} as Meta;

const Container = styled.div`
  background-color: #f2f2f4;
  overflow: hidden;
`;

export const Default: StoryFn<FileDropZoneProps> = (props) => {
  const [files, setFiles] = useState<FileData[]>([]);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    const mappedAcceptedFiles = acceptedFiles.map((file) => ({
      id: uuidv4(),
      file,
      errors: [],
      fileName: file.name,
    }));

    const mappedRejectedFiles = rejectedFiles.map((rejection) => ({
      id: uuidv4(),
      file: rejection.file,
      errors: rejection.errors,
      fileName: rejection.file.name,
    }));

    setFiles((currentFiles) => {
      return [...currentFiles, ...mappedAcceptedFiles, ...mappedRejectedFiles];
    });
  }, []);

  const onDelete = (fileId: string) => {
    setFiles((currentFiles) => currentFiles.filter((fileData) => fileData.id !== fileId));
  };

  function onUpload(fileData: FileData, onProgress: (percentage: number) => void): Promise<string> {
    return new Promise<string>((res) => {
      const timeout = setTimeout(() => {
        const fakeUrl = `https://xyz.org/fileDropZone/${fileData.file}`;

        setFiles((currentFiles) =>
          currentFiles.map((file) => (file.id === fileData.id ? { ...file, isUploaded: true } : file)),
        );

        res(fakeUrl);
        clearTimeout(timeout);
      }, 2000);

      onProgress(0);
      let simulatedProgress = 0;

      const interval = setInterval(() => {
        simulatedProgress += Math.random() * 10;
        onProgress(Math.min(simulatedProgress, 100));
        if (simulatedProgress >= 100) {
          clearInterval(interval);
        }
      }, 100);
    });
  }

  return (
    <Container>
      <FileDropZone {...{ ...props, files, onDrop, onDelete, onUpload }} />
    </Container>
  );
};

Default.args = {
  acceptedFileTypes: [AcceptedFileTypes.MP3, AcceptedFileTypes.MP4, AcceptedFileTypes.M4A, AcceptedFileTypes.WAV],
  buttonLabel: "Browse files",
  buttonLabelSuffix: "from your computer",
  headerInfo: {
    fileName: "Fact Find Call",
    fileType: FileNodeType.Audio,
  },
  metadataList: [
    {
      type: "date",
      placeholder: "File Date",
      onChangeCallback: (id: string, value: string) => {
        return { id, value };
      },
      errorMessage: "You must select a date",
    },
    {
      type: "time",
      placeholder: "File Time",
      onChangeCallback: (id: string, value: string) => {
        return { id, value };
      },
      errorMessage: "You must select time",
    },
    {
      label: "Adviser",
      type: "text",
      placeholder: "Adviser",
      onChangeCallback: (id: string, value: string) => {
        return { id, value };
      },
      errorMessage: "You must enter a value",
    },
  ],
};
Default.storyName = "File Dropzone";
