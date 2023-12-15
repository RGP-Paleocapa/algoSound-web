import useDocumentMetadata from "@hooks/useDocumentMetadata";
import InputComponent from "./InputComponent";

const Coding = () => {
  useDocumentMetadata('Coding', 'This is the coding page.');

  return (
    <>
      <InputComponent />
    </>
  );
};

export default Coding;
