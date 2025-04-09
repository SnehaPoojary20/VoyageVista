import React, { useState } from "react";

const Travelform=()=>{
    const [formData, setFormData] = useState({
        location: "",
        travelerType: "",
        touristType: "",
        budget: "",
        duration: "",
        groupType: "",
        season: "",
      });

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data Submitted:", formData);
}
return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" id="form">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Plan Your Trip</h2>

        {/* Location Input */}
        <label className="block mb-2 font-medium">Where do you want to travel?</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter country, state, or city"
          required
        />
         <br></br>
        {/* Traveler Type Dropdown */}
        <label className="block mb-2 font-medium">What type of traveler are you?</label>
        <select name="travelerType" value={formData.travelerType} onChange={handleChange} className="w-full p-2 border rounded mb-4">
          <option value="">Select...</option>
          <option value="nature">Nature Lover</option>
          <option value="culture">Culture & History Enthusiast</option>
          <option value="adventure">Adventure Seeker</option>
          <option value="relaxation">Relaxation</option>
          <option value="foodie">Foodie</option>
          <option value="shopping">Shopping</option>
          <option value="nightlife">Nightlife & Entertainment</option>
        </select>
        <br></br>
        {/* Tourist Type Dropdown */}
        <label className="block mb-2 font-medium">Are you looking for popular tourist spots or hidden gems?</label>
        <select name="touristType" value={formData.touristType} onChange={handleChange} className="w-full p-2 border rounded mb-4">
          <option value="">Select...</option>
          <option value="popular">Popular Destinations</option>
          <option value="hidden">Hidden Gems</option>
        </select>
        <br></br>
        {/* Budget Input */}
        <label className="block mb-2 font-medium">What is your budget range?</label>
        <input
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter budget range"
        />
          <br></br>
        {/* Duration Input */}
        <label className="block mb-2 font-medium">How many days do you plan to travel?</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter number of days"
        />
         <br></br>
        {/* Group Type Dropdown */}
        <label className="block mb-2 font-medium">Are you traveling alone or with others?</label>
        <select name="groupType" value={formData.groupType} onChange={handleChange} className="w-full p-2 border rounded mb-4">
          <option value="">Select...</option>
          <option value="solo">Solo</option>
          <option value="family">Family</option>
          <option value="couple">Couple</option>
          <option value="friends">Friends</option>
        </select>
        <br></br>
        {/* Preferred Season Dropdown */}
        <label className="block mb-2 font-medium">What’s your preferred season for travel?</label>
        <select name="season" value={formData.season} onChange={handleChange} className="w-full p-2 border rounded mb-4">
          <option value="">Select...</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
        </select>
        <br></br>
        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Travelform;
