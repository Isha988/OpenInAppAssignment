import { useState } from "react";
import { Modal } from "../../UI";
import { StepBasic } from "./StepBasic";
import { StepSocial } from "./StepSocial";

export const AddProfileForm = ({ isOpen, onClose }) => {
  const initialProfile = {
    name: "",
    email: "",
    phone: "",
    youtube: "",
    instagram: "",
  };
  const [profile, setProfile] = useState(initialProfile);
  const [step, setStep] = useState(1);

  const onBack = (value) => {
    setProfile({ ...profile, ...value });
    setStep(1);
  };

  const onNext = (value) => {
    setProfile({ ...profile, ...value });
    setStep(2);
  };

  const onDone = (value) => {
    console.log(profile);
    console.log({ ...profile, value });
  };
  return (
    <Modal
      heading="add new profile"
      className="w-full max-w-[540px] p-6 mx-2"
      isOpen={isOpen}
      onClose={onClose}
    >
      {step == 1 && (
        <StepBasic
          onNext={onNext}
          initialValues={{
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
          }}
        />
      )}
      {step == 2 && (
        <StepSocial
          onBack={onBack}
          onDone={onDone}
          initialValues={{
            instagram: profile.instagram,
            youtube: profile.youtube,
          }}
        />
      )}
    </Modal>
  );
};
