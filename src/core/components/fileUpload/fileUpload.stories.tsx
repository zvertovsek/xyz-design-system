import { Meta, StoryFn } from "@storybook/react";
import styled from "styled-components";
import FileUpload from "./fileUpload";
import { AcceptedFileTypes, FileUploadProps } from "./fileUpload.types";

export default {
  title: "Components/FileUpload",
  component: FileUpload,
} as Meta;

const Container = styled.div`
  width: 222px;
  height: 194px;
  background-color: #f2f2f4;
  overflow: hidden;

  .uploaded-files {
    height: 150px;
  }
`;

export const Default: StoryFn<FileUploadProps> = (props) => {
  return (
    <Container>
      <FileUpload {...props} />
    </Container>
  );
};

Default.args = {
  uploadFunction: uploadFileFunction,
  acceptedFileTypes: [AcceptedFileTypes.PDF, AcceptedFileTypes.AUDIO],
  buttonLabel: "Browse files",
  buttonLabelSuffix: "from your computer",
  title: "Upload your files",
};
Default.storyName = "File Upload";

export const SingleFileUpload: StoryFn<FileUploadProps> = (props) => {
  return (
    <Container>
      <FileUpload {...props} />
    </Container>
  );
};

SingleFileUpload.args = {
  uploadFunction: uploadFileFunction,
  onUploadCallback: (file) => console.log("Uploaded file", file),
  acceptedFileTypes: [AcceptedFileTypes.IMAGE, AcceptedFileTypes.VIDEO],
  buttonLabel: "Browse files",
  buttonLabelSuffix: "from your computer",
  allowMultipleFiles: false,
};

function uploadFileFunction(file: File, onProgress: (percentage: number) => void) {
  const url = "https://api.cloudinary.com/v1_1/djg1w4uqe/raw/upload";
  const key = "xyz-design-system-storybook";

  return new Promise<string>((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      res(resp.secure_url);
    };
    xhr.onerror = (evt) => rej(evt);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", key);

    xhr.send(formData);
  });
}
