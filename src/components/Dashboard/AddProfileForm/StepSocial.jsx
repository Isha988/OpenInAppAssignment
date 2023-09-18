import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, Input } from "../../UI";

const urlRegex = {
  instagram: /^https?:\/\/(?:www\.)?instagram\.com\/[A-Za-z0-9-_]+\/?$/,
  youtube: /^https?:\/\/(?:www\.)?youtube\.com\/[A-Za-z0-9-_]+\/?$/,
};

const FormSchema = Yup.object().shape({
  instagram: Yup.string()
    .matches(urlRegex.instagram, "Invalid Instagram URL")
    .nullable(),
  youtube: Yup.string()
    .matches(urlRegex.youtube, "Invalid YouTube URL")
    .nullable(),
});

export const StepSocial = ({ initialValues, onBack, onDone }) => {
  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        onDone(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="grid gap-5">
          <Input
            label="Instragram link"
            name="instagram"
            placeholder="Eg. ..instagram.com/usernane"
            error={errors.instagram}
            touched={touched.instagram}
          />

          <Input
            label="youtube link"
            name="youtube"
            placeholder="Eg. ..youtube.com/usernane"
            error={errors.youtube}
            touched={touched.youtube}
          />
          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              text="Back"
              variant="outline"
              onClick={() => onBack(values)}
            />
            <Button type="Submit" text="Done" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
