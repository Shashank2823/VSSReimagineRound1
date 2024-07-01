import React, { useState } from 'react';
import model0 from '../assets/fossil-removebg-preview.png';
import model1 from '../assets/fossil2-removebg-preview.png';
import model2 from '../assets/fossil3-removebg-preview.png';
import model3 from '../assets/fossil4-removebg-preview.png';
import model4 from '../assets/fossil5-removebg-preview.png';
import model5 from '../assets/herofossil.png';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activities = [
    {
      item: 'popcorn',
      description: "Poppin' joy in every kernel, the cinema's eternal sparkle!",
      imgSrc: {model0},
      title: "Poppin' Perfect",
      tagline: "Become the eye of the party!",
      color: 'white',
    },
    {
      item: 'chess',
      description: 'Unlock Brilliance, Play Bold: Where Minds Make Extraordinary Moves!',
      imgSrc: {model1},
      title: 'Capture, Conquer',
      tagline: "Let's Checkmate!",
      color: '#2a050a',
    }, 
    {
      item: 'bowling',
      description: "Unleashing thunderous strikes on the alley's dance floor!",
      imgSrc: {model2},
      title: 'Boldly Bowling',
      tagline: 'Ball Bonanza!',
      color: '#52b1ff',
    },
    {
      item: 'skate',
      description: 'Skates on, world off, let your journey roll!',
      imgSrc: {model3},
      title: 'Shimmer, Slide,',
      tagline: 'Swoosh, Skate!',
      color: '#93ca14',
    },
    {
      item: 'light',
      description: 'Speak your mind, but ride a fast horse.',
      imgSrc: {model4},
      title: 'The Cowboy',
      tagline: "Don't squat with your spurs on",
      color: '#2a050a',
    },
    {
      item: 'jatt',
      description: "I'm tough when I have to be, tender when I should be!",
      imgSrc: {model5},
      title: 'The ToughGuy',
      tagline: "Tough guy, he's not a predator!",
      color: '#52b1ff',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length);
  };

  return (
    <div className="main-container">
      <div className="background">
        <svg data-wave="jatt" viewBox="0 0 960 1600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <path d="M0 875L10.7 865.5C21.3 856 42.7 837 64 797.7C85.3 758.3 106.7 698.7 128 677.8C149.3 657 170.7 675 192 722.3C213.3 769.7 234.7 846.3 256 858.7C277.3 871 298.7 819 320 787.2C341.3 755.3 362.7 743.7 384 747.7C405.3 751.7 426.7 771.3 448 778.2C469.3 785 490.7 779 512 770.3C533.3 761.7 554.7 750.3 576 733.8C597.3 717.3 618.7 695.7 640 715C661.3 734.3 682.7 794.7 704 808.8C725.3 823 746.7 791 768 776.8C789.3 762.7 810.7 766.3 832 788.3C853.3 810.3 874.7 850.7 896 857.2C917.3 863.7 938.7 836.3 949.3 822.7L960 809L960 1601L949.3 1601C938.7 1601 917.3 1601 896 1601C874.7 1601 853.3 1601 832 1601C810.7 1601 789.3 1601 768 1601C746.7 1601 725.3 1601 704 1601C682.7 1601 661.3 1601 640 1601C618.7 1601 597.3 1601 576 1601C554.7 1601 533.3 1601 512 1601C490.7 1601 469.3 1601 448 1601C426.7 1601 405.3 1601 384 1601C362.7 1601 341.3 1601 320 1601C298.7 1601 277.3 1601 256 1601C234.7 1601 213.3 1601 192 1601C170.7 1601 149.3 1601 128 1601C106.7 1601 85.3 1601 64 1601C42.7 1601 21.3 1601 10.7 1601L0 1601Z" fill="#f6b26b" stroke-linecap="round" stroke-linejoin="miter"></path>
        </svg>
      
        <svg data-wave="light" viewBox="0 0 960 1600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <path d="M0 875L10.7 865.5C21.3 856 42.7 837 64 797.7C85.3 758.3 106.7 698.7 128 677.8C149.3 657 170.7 675 192 722.3C213.3 769.7 234.7 846.3 256 858.7C277.3 871 298.7 819 320 787.2C341.3 755.3 362.7 743.7 384 747.7C405.3 751.7 426.7 771.3 448 778.2C469.3 785 490.7 779 512 770.3C533.3 761.7 554.7 750.3 576 733.8C597.3 717.3 618.7 695.7 640 715C661.3 734.3 682.7 794.7 704 808.8C725.3 823 746.7 791 768 776.8C789.3 762.7 810.7 766.3 832 788.3C853.3 810.3 874.7 850.7 896 857.2C917.3 863.7 938.7 836.3 949.3 822.7L960 809L960 1601L949.3 1601C938.7 1601 917.3 1601 896 1601C874.7 1601 853.3 1601 832 1601C810.7 1601 789.3 1601 768 1601C746.7 1601 725.3 1601 704 1601C682.7 1601 661.3 1601 640 1601C618.7 1601 597.3 1601 576 1601C554.7 1601 533.3 1601 512 1601C490.7 1601 469.3 1601 448 1601C426.7 1601 405.3 1601 384 1601C362.7 1601 341.3 1601 320 1601C298.7 1601 277.3 1601 256 1601C234.7 1601 213.3 1601 192 1601C170.7 1601 149.3 1601 128 1601C106.7 1601 85.3 1601 64 1601C42.7 1601 21.3 1601 10.7 1601L0 1601Z" fill="#bcbcbc" stroke-linecap="round" stroke-linejoin="miter">

        </path>
        </svg>
        
        <svg data-wave="skate" viewBox="0 0 960 1600">
          {/* SVG path for skate */}
        </svg>
        <svg data-wave="bowling" viewBox="0 0 960 1600">
          {/* SVG path for bowling */}
        </svg>
        <svg data-wave="chess" viewBox="0 0 960 1600">
          {/* SVG path for chess */}
        </svg>
        <svg data-wave="popcorn" viewBox="0 0 960 1600">
          {/* SVG path for popcorn */}
        </svg>
      </div>
      <section className="activities" style={{ transform: `translateX(${activeIndex * -50}%)` }}>
        {activities.map((activity, index) => (
          <div
            key={activity.item}
            className={`activity ${index === activeIndex ? 'active' : ''}`}
            data-item={activity.item}
            style={{ color: activity.color }}
          >
            <div className="context">
              <span className='sliderspan'>{activity.description}</span>
              <img className="scene" src={activity.imgSrc} alt={activity.title} />
              <h2 className='sliderh2'>{activity.title}</h2>
              <h2 id="arow" onClick={handleNext}>
                <i className="ri-arrow-right-wide-line"></i>
              </h2>
              <p className='sliderp'>{activity.tagline}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Slider;
