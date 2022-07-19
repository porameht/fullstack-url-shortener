import { object, string } from "yup";

export default object({
  body: object({
    destination: string()
      // fix bug valid url
      .url("Must be a valid URL")
      .required("Destination is required"),
  }),
});
