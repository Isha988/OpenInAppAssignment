import { useState, useContext } from "react";
import { addProfile } from "../../../api/Profile";
import { Modal } from "../../UI";
import { StepBasic } from "./StepBasic";
import { StepSocial } from "./StepSocial";
import { AuthContext } from "../../../context";

export const AddProfileForm = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext);
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
    addProfile({ ...profile, ...value, uid: user.uid });
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
