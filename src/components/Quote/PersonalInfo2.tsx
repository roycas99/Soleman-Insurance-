const PersonalInfo2 = ({ formData, setFormData }) => {
  return (
    <div className="personal-info-container">
      <input
        type="address"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => {
          setFormData({ ...formData, address: e.target.value });
        }}
      />

      <input
        type="apartment"
        placeholder="Apartment"
        value={formData.apartment}
        onChange={(e) => {
          setFormData({ ...formData, apartment: e.target.value });
        }}
      />
      <input
        type="city"
        placeholder="City"
        value={formData.city}
        onChange={(e) => {
          setFormData({ ...formData, city: e.target.value });
        }}
      />
      <input
        type="state"
        placeholder="State"
        value={formData.state}
        onChange={(e) => {
          setFormData({ ...formData, state: e.target.value });
        }}
      />
      <input
        type="zipcode"
        placeholder="ZipCode"
        value={formData.zipCode}
        onChange={(e) => {
          setFormData({ ...formData, zipcode: e.target.value });
        }}
      />
    </div>
  );
};

export default PersonalInfo2;
