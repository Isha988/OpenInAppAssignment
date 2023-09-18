import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Button, Card, Input } from "../UI";

const FormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Passowrd should have atleast 6 characters")
    .required("Required"),
});

export const EmailAuthForm = () => {
  return (
    <Card variant="normal" className="p-6">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          onSubmit(values.email, values.password);
        }}
      >
        {({ errors, touched }) => (
          <Form className="grid gap-5">
            <Input
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter Email"
              error={errors.email}
              touched={touched.email}
              variant="secondary"
            />

            <Input
              label="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              error={errors.password}
              touched={touched.password}
              variant="secondary"
            />
            <p className="text-primary-100 text-sm">Forgot Password?</p>
            <Button type="Submit" text="Sign In" />
          </Form>
        )}
      </Formik>
    </Card>
  );
};
