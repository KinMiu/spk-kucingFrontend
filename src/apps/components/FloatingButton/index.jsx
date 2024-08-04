import { FaStethoscope } from "react-icons/fa";

const FloatingButton = () => {

  const handleKonsultasi = () => {
    window.open('https://sumateravetcare.crativa.id/', '_blank')
  }
  return (
    <button className="floating-button flex flex-row gap-3" onClick={handleKonsultasi} >
      <FaStethoscope className="text-lg font-bold" />
    </button>
  );
};

export default FloatingButton;