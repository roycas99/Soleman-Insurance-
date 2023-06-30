const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className="personal-info-container">
      <input
      
        type="text"
        pattern="^[A-Za-z0-9]{3,16}$"
        placeholder="First Name..."
        id="fName"
        required
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Last Name..."
        id="lName"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />

      <input
        type="Date"
        placeholder="Birth Date..."
        value={formData.birthDate}
        onChange={(e) => {
          setFormData({ ...formData, birthDate: e.target.value });
        }}
      />
      <input
        type="phone"
        placeholder="Phone number..."
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="Email..."
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
    </div>
  );
};
export default PersonalInfo;
