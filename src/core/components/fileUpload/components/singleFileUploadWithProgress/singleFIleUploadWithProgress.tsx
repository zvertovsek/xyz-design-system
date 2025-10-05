import { VerticalSpacer } from "@core/components/spacer";
import { sizes } from "@system";
import { useEffect, useState } from "react";
import { ProgressBar } from "../../fileUpload.styles";
import { FileHeader } from "../fileHeader";
import { SingleFileUploadWithProgressProps } from "./singleFIleUploadWithProgress.types";

export const SingleFileUploadWithProgress: React.FC<SingleFileUploadWithProgressProps> = ({
  file,
  onDelete,
  onUpload,
  uploadFunction,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function upload() {
      const url = await uploadFunction(file, setProgress);
      onUpload(file, url);
    }

    upload();
  }, []);

  return (
    <>
      <FileHeader file={file} onDelete={onDelete} />
      <VerticalSpacer size={sizes[1]} />
      <ProgressBar progress={progress} />
    </>
  );
};

export default SingleFileUploadWithProgress;
