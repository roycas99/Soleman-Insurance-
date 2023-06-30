import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./License";
import SignUpInfo from "./VehicleInfo";
import "./QuotePage.css";
import PersonalInfo2 from "./PersonalInfo2";
import VehicleInfo from "./VehicleInfo";

const QuotePage = () => {
  // useState Hook for pages - since we have many use state consider reducer
  const [page, setPage] = useState(0);
  // useState to update specific filed in the object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    Gender: "",
    phone: "",
    email: "",
    address: "",
    apartment: "",
    vehiclevin: "",
    isVin:"",
    city: "",
    state: "",
    zipCode: 0,
  });

  // onSubmit function: if the fields are empty than ealert these are required
  const onSubmitHandler = () => {
    if (formData.firstName === "") {
      alert("this field is required");
    } else {
      alert("FORM SUBMITTED");
    }
  };

  // arrays of the Pages
  const FormTitles = [ "Personal Info", "Residental  Info", "Vehicle Info","Other"];
  // Page we display according the condition
  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <VehicleInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <div className="quote">
        <div className="form">
          <div className="progressbar">
            <div
              style={{
                width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <div className="form-container">
            <div className="header">
              <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
              <button
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              <button
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    onSubmitHandler();

                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotePage;
