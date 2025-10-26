import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './SurveyPage.css';

const SurveyPage = () => {
  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedTraffic, setSelectedTraffic] = useState('');
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [otherProfession, setOtherProfession] = useState('');
  const [otherTraffic, setOtherTraffic] = useState('');

  const handleProfessionSelect = (profession) => {
    setSelectedProfession(profession);
  };

  const handleTrafficSelect = (traffic) => {
    setSelectedTraffic(traffic);
  };

  const handleGoalSelect = (goal) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Survey data:', {
      profession: selectedProfession,
      traffic: selectedTraffic,
      goals: selectedGoals,
      otherProfession,
      otherTraffic
    });
  };

  return (
    <div>
      <Header showSurveyLink={false} />
      
      <section className="section-survey">
        <div className="section-container">
          <h2>Your setup starts here</h2>
          <form className="survey-form" onSubmit={handleSubmit}>
            {/* Profession */}
            <div className="survey-group">
              <p className="survey-question">How would you describe your role?</p>
              <div className="button-group" id="profession-group">
                <button 
                  type="button"
                  className={selectedProfession === 'Nail Technician' ? 'selected' : ''}
                  onClick={() => handleProfessionSelect('Nail Technician')}
                >
                  Nail Technician
                </button>
                <button 
                  type="button"
                  className={selectedProfession === 'Cosmetologist' ? 'selected' : ''}
                  onClick={() => handleProfessionSelect('Cosmetologist')}
                >
                  Cosmetologist
                </button>
                <button 
                  type="button"
                  className={selectedProfession === 'Hair Stylists' ? 'selected' : ''}
                  onClick={() => handleProfessionSelect('Hair Stylists')}
                >
                  Hair Stylists
                </button>
                <button 
                  type="button"
                  className={selectedProfession === 'Feet-care Artist' ? 'selected' : ''}
                  onClick={() => handleProfessionSelect('Feet-care Artist')}
                >
                  Feet-care Artist
                </button>
                <button 
                  type="button"
                  className={selectedProfession === 'Barber' ? 'selected' : ''}
                  onClick={() => handleProfessionSelect('Barber')}
                >
                  Barber
                </button>
                <button 
                  type="button"
                  className={selectedProfession === 'Salon Manager' ? 'selected' : ''}
                  onClick={() => handleProfessionSelect('Salon Manager')}
                >
                  Salon Manager
                </button>
                <button 
                  type="button"
                  className={selectedProfession === 'Other' ? 'selected' : ''}
                  onClick={() => handleProfessionSelect('Other')}
                >
                  Other
                </button>
              </div>
              {selectedProfession === 'Other' && (
                <input 
                  type="text" 
                  className="other-input" 
                  placeholder="Please specify..."
                  value={otherProfession}
                  onChange={(e) => setOtherProfession(e.target.value)}
                />
              )}
            </div>

            {/* Traffic source */}
            <div className="survey-group">
              <p className="survey-question">Mind sharing how you found us?</p>
              <div className="button-group" id="traffic-group">
                <button 
                  type="button"
                  className={selectedTraffic === 'Google Search' ? 'selected' : ''}
                  onClick={() => handleTrafficSelect('Google Search')}
                >
                  Google Search
                </button>
                <button 
                  type="button"
                  className={selectedTraffic === 'Telegram' ? 'selected' : ''}
                  onClick={() => handleTrafficSelect('Telegram')}
                >
                  Telegram
                </button>
                <button 
                  type="button"
                  className={selectedTraffic === 'Instagram' ? 'selected' : ''}
                  onClick={() => handleTrafficSelect('Instagram')}
                >
                  Instagram
                </button>
                <button 
                  type="button"
                  className={selectedTraffic === 'Facebook' ? 'selected' : ''}
                  onClick={() => handleTrafficSelect('Facebook')}
                >
                  Facebook
                </button>
                <button 
                  type="button"
                  className={selectedTraffic === 'Friend or colleague' ? 'selected' : ''}
                  onClick={() => handleTrafficSelect('Friend or colleague')}
                >
                  Friend or colleague
                </button>
                <button 
                  type="button"
                  className={selectedTraffic === 'Tik-tok' ? 'selected' : ''}
                  onClick={() => handleTrafficSelect('Tik-tok')}
                >
                  Tik-tok
                </button>
                <button 
                  type="button"
                  className={selectedTraffic === 'Other' ? 'selected' : ''}
                  onClick={() => handleTrafficSelect('Other')}
                >
                  Other
                </button>
              </div>
              {selectedTraffic === 'Other' && (
                <input 
                  type="text" 
                  className="other-input" 
                  placeholder="Please specify..."
                  value={otherTraffic}
                  onChange={(e) => setOtherTraffic(e.target.value)}
                />
              )}
            </div>
            
            {/* Goals */}
            <div className="survey-group">
              <p className="survey-question">What would you like KRASA to help with?</p>
              <div className="button-group" id="goal-group">
                {[
                  'Schedule appointments easily',
                  'Grow my business',
                  'Manage clients better',
                  'Track your business finances',
                  'Save time',
                  'Look more professional',
                  'Still exploring'
                ].map(goal => (
                  <button 
                    key={goal}
                    type="button"
                    className={selectedGoals.includes(goal) ? 'selected' : ''}
                    onClick={() => handleGoalSelect(goal)}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
                
            <button type="submit" className="primary-btn">Continue</button>
          </form>
        </div>
      </section>

      <Footer isSurveyPage={true} />
    </div>
  );
};

export default SurveyPage;
