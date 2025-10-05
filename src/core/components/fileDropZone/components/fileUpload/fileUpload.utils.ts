import { ErrorCode } from "react-dropzone";
import { AcceptedFileTypes } from "../../fileDropZone.model";
import { UploadConfig } from "./fileUpload.model";

export const parseErrorCode = (code: ErrorCode | string, uploadConfig: UploadConfig) => {
  switch (code) {
    case ErrorCode.FileInvalidType:
      const allFileTypes = Object.entries(AcceptedFileTypes);
      const uniqueFileTypes = uploadConfig.acceptedFileTypes
        .map((type) => allFileTypes.find(([, value]) => value === type)?.[0].toLowerCase())
        .filter(Boolean);
      const formattedFileTypes =
        uniqueFileTypes.length > 1
          ? `${uniqueFileTypes.slice(0, -1).join(", ")} or ${uniqueFileTypes.at(-1)}`
          : uniqueFileTypes[0];
      return `File type must be ${formattedFileTypes}`;
    case ErrorCode.FileTooLarge:
      return "File is too large";
    case ErrorCode.FileTooSmall:
      return "File is too small";
    case ErrorCode.TooManyFiles:
      return "Too many files";
    default:
      return "Unknown error";
  }
};
