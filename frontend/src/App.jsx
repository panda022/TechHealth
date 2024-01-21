import React, { useState } from 'react';

const App = () => {
  const [painLevel, setPainLevel] = useState('');
  const [symptoms, setSymptoms] = useState({
    difficultyBreathing: false,
    increasedHeartRate: false,
    chestPain: false,
    swelling: false,
    severeBleeding: false,
  });
  const [activities, setActivities] = useState({
    smoking: false,
    drinking: false,
    cannabis: false,
    narcotics: false,
  });
  const [disability, setDisability] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const symptomList = Object.entries(symptoms)
      .filter(([_, value]) => value)
      .map(([key]) => key.replace(/([A-Z])/g, ' $1').trim())
      .join(', ');

    const activityList = Object.entries(activities)
      .filter(([_, value]) => value)
      .map(([key]) => key)
      .join(', ');

    const message = `
    I've completed an emergency form and need advice on whether to visit an emergency center or call 911. Please respond with 'Yes' or 'No' first, followed by your reasoning.
      1. Pain Level: ${painLevel}
      2. Symptoms :  ${symptomList}
      3. Activities in Last 24 Hours: ${activityList}
      4. Any disabilities: ${disability}
    `;
    console.log(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Emergency Questions Form</h2>
      <div>
        <h3>1.What is the level of your pain? (1-10)</h3>
        <label>
          
          <input type="number" value={painLevel} onChange={(e) => setPainLevel(e.target.value)} />
        </label>
      </div>
      <div>
        <h3>2. Do you have any following symptoms?</h3>
        <div>
        <label>
          Difficulty Breathing
          <input type="checkbox" name="difficultyBreathing" checked={symptoms.difficultyBreathing} onChange={(e) => setSymptoms({ ...symptoms, difficultyBreathing: e.target.checked })} />
        </label>
        <label>
          Increased Heart Rate
          <input type="checkbox" name="increasedHeartRate" checked={symptoms.increasedHeartRate} onChange={(e) => setSymptoms({ ...symptoms, increasedHeartRate: e.target.checked })} />
        </label>
        <label>
          Chest Pain
          <input type="checkbox" name="chestPain" checked={symptoms.chestPain} onChange={(e) => setSymptoms({ ...symptoms, chestPain: e.target.checked })} />
        </label>
        </div>
        <div>
        <label>
          Swelling
          <input type="checkbox" name="swelling" checked={symptoms.swelling} onChange={(e) => setSymptoms({ ...symptoms, swelling: e.target.checked })} />
        </label>
        <label>
          Severe Bleeding
          <input type="checkbox" name="severeBleeding" checked={symptoms.severeBleeding} onChange={(e) => setSymptoms({ ...symptoms, severeBleeding: e.target.checked })} />
        </label>
        </div>
      </div>
      <div>
      <h3>3.Have you done any of the following in the past 24 hours?</h3>
        <div>
        <label>
          Smoking
          <input type="checkbox" name="smoking" checked={activities.smoking} onChange={(e) => setActivities({ ...activities, smoking: e.target.checked })} />
        </label>
        <label>
          Drinking
          <input type="checkbox" name="Drinking" checked={activities.drinking} onChange={(e) => setActivities({ ...activities, drinking: e.target.checked })} />
        </label>
        
        </div>
        <label>
          Cannabis
          <input type="checkbox" name="Cannabis" checked={activities.cannabis} onChange={(e) => setActivities({ ...activities, cannabis: e.target.checked })} />
        </label>
        <label>
          Narcotics
          <input type="checkbox" name="Narcotics" checked={activities.narcotics} onChange={(e) => setActivities({ ...activities, narcotics: e.target.checked })} />
        </label>
      </div>
      <div>
      <h3>4.Do you have any disabilities?</h3>
      <label>
          
          Yes <input type="radio" name="disability" value="Yes" onChange={(e) => setDisability(e.target.value)} />
          No <input type="radio" name="disability" value="No" onChange={(e) => setDisability(e.target.value)} />
      </label>
      </div>
      <button type="submit" style={{ backgroundColor: 'red', color: 'white' }}>Emergency?</button>
    </form>
  );
};

export default App;
