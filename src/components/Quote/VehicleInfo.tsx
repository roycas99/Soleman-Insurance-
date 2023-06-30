function VehicleInfo({ formData, setFormData }) {
  return (
    <div className="vehicle">
      <label>
        Do You have VIN Number :<br></br>
        <select
          name="VIN"
          value={formData.isVin}
          onChange={(event) =>
            setFormData({ ...formData, isVin: event.target.value })
          }
        >
          <option value="yes">Yes</option>
          <option value="NO">NO</option>
        </select>
      </label>
      
      <input
        type="text"
        placeholder="Vehicle VIN #"
        value={formData.vehiclevin || ""}
        onChange={(event) =>
          setFormData({ ...formData, vehiclevin: event.target.value })
        }
      />
    </div>
  );
}

export default VehicleInfo;
