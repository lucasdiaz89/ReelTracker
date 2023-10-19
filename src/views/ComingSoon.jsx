
import {
    FilmIcon,
    VideoCameraIcon,
    ChatBubbleBottomCenterTextIcon,
    CameraIcon,
    TvIcon,
    GlobeAltIcon,
    MegaphoneIcon,
    MusicalNoteIcon,
    RadioIcon,
    RocketLaunchIcon,
    StarIcon,
    TicketIcon,
    UserGroupIcon,
    TrophyIcon,
  } from "@heroicons/react/24/solid";
  
  const icons = [
    FilmIcon,
    VideoCameraIcon,
    ChatBubbleBottomCenterTextIcon,
    CameraIcon,
    TvIcon,
    GlobeAltIcon,
    MegaphoneIcon,
    MusicalNoteIcon,
    RadioIcon,
    RocketLaunchIcon,
    StarIcon,
    TicketIcon,
    UserGroupIcon,
    TrophyIcon,
  ];
  
  const ComingSoon = () => {
    const getRandomizedIcons = () => {
      const shuffledIcons = [...icons].sort(() => Math.random() - 0.5);
      return shuffledIcons;
    };
  
    const generateRandomRow = () => {
      const randomizedIcons = getRandomizedIcons();
      return randomizedIcons.map((Icon, index) => (
        <div key={index}
        style={{
          width: "100px", 
          paddingTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity:0.3
        }}
      >
        <Icon className="w-8 h-8" title="" />
      </div>
    ))};
  
  
    const repeatCount = Math.ceil(window.innerHeight / 50); 
  
    return (
      <div>
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "59px",
            fontWeight: "bold",
            margin: "5px 0",
          }}
        >
          COMING SOON ...
        </div>
        <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "1px",
          minHeight: "100vh",
          minWidth: "100vw",
          padding: "3px",
          
        }}
      >
        {Array.from({ length: repeatCount }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap">
            {generateRandomRow()}
          </div>
        ))}
        </div>
      </div>
     
    );
  };
  
  export default ComingSoon;