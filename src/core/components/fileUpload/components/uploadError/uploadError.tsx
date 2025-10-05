import { FileHeader } from "../fileHeader";
import { UploadErrorProps } from "./uploadError.types";

export const UploadError: React.FC<UploadErrorProps> = ({ file, onDelete, errors }) => {
  return (
    <>
      <FileHeader file={file} onDelete={onDelete} />
      {errors.map((error) => (
        <div key={error.code}>
          <span>{error.message}</span>
        </div>
      ))}
    </>
  );
};

export default UploadError;
