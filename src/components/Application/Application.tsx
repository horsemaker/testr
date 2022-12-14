export const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" cols={30} rows={10} />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a city</option>
            <option value="BLR">Bangalore</option>
            <option value="GGN">Gurgaon</option>
            <option value="HYD">Hyderabad</option>
            <option value="MUM">Mumbai</option>
            <option value="PUNE">Pune</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions.
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
