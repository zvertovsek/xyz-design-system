import * as ButtonTypes from "./button.types";
import { CommonButton } from "./commonButton";
import { IconButton } from "./iconButton";
import { PrimaryButton } from "./primaryButton";
import { SecondaryButton } from "./secondaryButton";
import { TextButton } from "./textButton";

export { CommonButton, PrimaryButton, SecondaryButton, IconButton, TextButton, ButtonTypes };

export default {
  CommonButton,
  PrimaryButton,
  SecondaryButton,
  TextButton,
  IconButton,
  ...ButtonTypes,
};
