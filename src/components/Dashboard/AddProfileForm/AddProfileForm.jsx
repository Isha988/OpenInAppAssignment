import { useState, useContext } from "react";
import { addProfile, getProfiles } from "../../../api/Profile";
import { Modal, Toast, Loader } from "../../UI";
import { StepBasic } from "./StepBasic";
import { StepSocial } from "./StepSocial";
import { AuthContext } from "../../../context";

export const AddProfileForm = ({ isOpen, onClose, setProfiles }) => {
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onBack = (value) => {
    setProfile({ ...profile, ...value });
    setStep(1);
  };

  const onNext = (value) => {
    setProfile({ ...profile, ...value });
    setStep(2);
  };

  const onDone = async (value) => {
    try {
      setIsLoading(true);
      await addProfile({ ...profile, ...value, uid: user.uid });
      const res = await getProfiles(user.uid);
      setProfiles(res);
      setIsLoading(false);
      onClose();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && <Toast message={error} />}
      <Modal
        heading="add new profile"
        className="w-full max-w-[540px] p-6 mx-2 relative"
        isOpen={isOpen}
        onClose={onClose}
      >
        {isLoading && <Loader />}
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
    </>
  );
};
