import React from 'react';
import { Link } from 'react-router-dom';



const infoItems = [
  {
    id: 1,
    title: "Process of obtaining a new driving license",
    icon: "🔖",
    description: "Detailed process of how to obtain a new driving license.",
    path: "/NewLicence",
  },
  {
    id: 2,
    title: "Things that are important when running",
    icon: "📑",
    description: "Important considerations while driving.",
    path: "/DrivingRules",
  },
  {
    id: 3,
    title: "Driving License Government Fees",
    icon: "🚗",
    description: "Information about government fees for driving licenses.",
    path: "https://dmt.gov.lk/index.php?option=com_content&view=article&id=85&Itemid=170&lang=en",
  },
  {
    id: 4,
    title: "Book an Appointment at the (DMT)",
    icon: "📅",
    description: "How to book an appointment at the Department of Motor Traffic (DMT).",
    path: "https://dmtappointments.dmt.gov.lk/",
  },
  {
    id: 5,
    title: "Things that are very important when driving",
    icon: "🚘",
    description: "Crucial tips for safe driving.",
    path: "/DrivingInfo",
  },
  {
    id: 6,
    title: "For applicants with special circumstances",
    icon: "📜",
    description: "Guidelines for applicants under special circumstances.",
    path: "/SpecialLicenseInfo",
  },
  {
    id: 7,
    title: "Obtaining a revenue license",
    icon: "✋",
    description: "Steps to obtain a revenue license for your vehicle.",
    path: "/RevenuLicence",
  },
  {
    id: 8,
    title: "Issuing fines for traffic violations",
    icon: "⚠️",
    description: "Details about fines for various traffic violations.",
    path: "/HighwayOffenses",
  },
  {
    id: 9,
    title: "Driving on highways",
    icon: "🛣️",
    description: "Best practices and rules for driving on highways.",
    path: "/Expressway",
  },
  {
    id: 10,
    title: "Vehicle Classes",
    icon: "🚛",
    description: "Different classes of vehicles and their licensing requirements.",
    path: "https://dmt.gov.lk/index.php?option=com_content&view=article&id=46&Itemid=163&lang=en",
  },
  {
    id: 11,
    title: "Conversion of Old Driving License to New",
    icon: "🔄",
    description: "Steps to convert an old driving license to a new one.",
    path: "/OldLicence", // Example path
  },
  {
    id: 12,
    title: "Conversion of Foreign License",
    icon: "🌍",
    description: "How to convert a foreign driving license to a local one.",
    path: "/ForeignLicence", // Example path
  },
  {
    id: 13,
    title: "Assesment",
    icon: "🧾",
    description: "How to convert a foreign driving license to a local one.",
    path: "/Assesment", // Example path
  },
];

const Information = () => {
  const handleExternalLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#023e8a',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px' }}>Information Portal</h1>
        </div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px'
      }}>
        {infoItems.map((item) => {
          const isExternalLink = item.path.startsWith("http");
          return isExternalLink ? (
            <div
              key={item.id}
              onClick={() => handleExternalLinkClick(item.path)}
              style={{
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px' }}>
                {item.id.toString().padStart(2, '0')}
              </span>
              <span style={{ fontSize: '24px', marginRight: '10px' }}>{item.icon}</span>
              <span style={{ fontSize: '16px' }}>{item.title}</span>
            </div>
          ) : (
            <Link
              to={item.path}
              key={item.id}
              style={{
                textDecoration: 'none',
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px' }}>
                {item.id.toString().padStart(2, '0')}
              </span>
              <span style={{ fontSize: '24px', marginRight: '10px' }}>{item.icon}</span>
              <span style={{ fontSize: '16px' }}>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
