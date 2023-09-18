import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, Input } from "../../UI";

const phoneRegExp = /^[6-9]\d{9}$/;

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .length(10, "invalid number")
    .required("Required"),
});

export const StepBasic = ({ initialValues, onNext }) => {
  return (
    <Formik
      initialValues={{ ...initialValues }}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        onNext(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="grid gap-5">
          <Input
            label="Enter Name*"
            name="name"
            placeholder="Eg. Jhon Doe"
            error={errors.name}
            touched={touched.name}
          />
          <Input
            label="Enter Email*"
            name="email"
            type="email"
            placeholder="Eg. John@xyz.com"
            error={errors.email}
            touched={touched.email}
          />

          <Input
            label="Enter Phone*"
            name="phone"
            type="phone"
            placeholder="Eg. 8989898989"
            error={errors.phone}
            touched={touched.phone}
          />
          <div className="flex gap-4 justify-end">
            <Button type="Submit" text="Next" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
