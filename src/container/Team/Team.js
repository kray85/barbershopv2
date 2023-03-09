import React, { useState, useEffect } from "react";
import { client } from "../../client";

import "./Team.css";
import { images } from "../../constants";

const teamData = `*[_type == "barber"]{
  name,
  bio,
  socialMediaLinks[]{
    ...,
    _type == "instagram" => {
      "name": "instagram",
      "link": link
    },
    _type == "facebook" => {
      "name": "facebook",
      "link": link
    },
    _type == "linkedin" => {
      "name": "linkedin",
      "link": link
    },
    _type == "twitter" => {
      "name": "twitter",
      "link": link
    },
  },
  "services": services[]->{
    title
  },
  profilePicture{
    asset->{
      url
    }
  }
}`;
const Team = ({ id }) => {
  const [barbers, setBarbers] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);

  const handleClick = (barber) => {
    setSelectedImage(barber);
  };

  useEffect(() => {
    client
      .fetch(teamData)
      .then((data) => setBarbers(data))
      .catch(console.error);
  }, [id]);

  if (!barbers) return <div>Loading...</div>;

  return (
    <div>
      {" "}
      <section id="team" className="team">
        <div className="container">
          <div className="section-heading">
            <span>Team</span>
            <h2>
              Meet <span>the</span> Team
            </h2>
          </div>
          <div className="wrapper">
            {barbers.map((barber, index) => (
              <div key={index}>
                <div
                  className="thumbnail"
                  onClick={() => setSelectedBarber(barber)}
                >
                  <img
                    src={barber.profilePicture.asset.url}
                    alt={barber.name}
                  />
                </div>
              </div>
            ))}
          </div>
          {selectedBarber && (
            <div className="team-preview">
              <div className="wrapper">
                <div className="left">
                  <div className="image-preview">
                    <img
                      src={selectedBarber?.profilePicture?.asset?.url}
                      alt="preview"
                    />
                  </div>
                </div>

                <div className="right">
                  <div className="team-bio">
                    <h3>{selectedBarber.name}</h3>
                    <p>{selectedBarber.bio}</p>
                    <div className="social-media">
                      {selectedBarber.socialMediaLinks &&
                        selectedBarber.socialMediaLinks.map((link) => (
                          <a
                            href={link.link}
                            key={link._key}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className={`fa-brands fa-${link.name}`}></i>
                          </a>
                        ))}
                    </div>
                    <p>
                      <a
                        href="https://booking.setmore.com/scheduleappointment/21879660-cb8a-47c8-8e45-6db97d24c41c"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Book Appointment
                      </a>
                    </p>
                  </div>
                  <div className="team-services">
                    <h4>List of Services</h4>
                    <ul>
                      {selectedBarber.services.map((service) => (
                        <li key={service._id}>{service.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Team;
