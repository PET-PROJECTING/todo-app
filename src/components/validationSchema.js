import * as yup from 'yup';
import { FIELDS } from "../constants";

export default yup.object().shape({
  [FIELDS.TITLE_FIELD]: yup
    .string()
    .required("Please enter title")
    .nullable()
    .min(10, "Title should be at least 10 chars long")
    .max(20, "Title should be at most 20 chars long"),
  [FIELDS.BODY_FIELD]: yup
    .string()
    .required("Please enter body")
    .nullable()
    .min(20, "Body should be at least 20 chars long")
})
