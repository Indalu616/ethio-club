import React, { useEffect } from "react";
import "./BlogDetailPage.css";
import PrivateNav from "../PrivateNav/PrivateNav";
import dance from "../../images/dance.jpg";
import wave from "../../images/hero-wave-svg.svg";
import AOS from "aos";
function BlogDetailPage() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <>
      <PrivateNav />
      <div className="blog-detail-page">
        <div className="blog-detail-header">
          <h2>Read our Blogs</h2>
          <img src={wave} id="wave"></img>
        </div>

        <div className="blog-detail-container" data-aos="zoom-in">
          <img src={dance} alt="post-image"></img>
          <p className="release-date">Aug 8, 2024 Ethio-club 7 Comments</p>
          <h3 className="title">
            ADU-ethiopian students orgainized an ethio club at ADU
          </h3>

          <div className="blog-detail-desc">
            <p>
              EthioClub is a vibrant student organization dedicated to
              showcasing the rich cultural heritage, diverse languages, and
              exquisite art of Ethiopia at our university. Our mission is to
              celebrate and preserve the unique traditions and history of
              Ethiopia, fostering a deeper understanding and appreciation among
              students, faculty, and the wider community. Understanding the
              importance of language in cultural identity, EthioClub offers
              language learning sessions and workshops. These sessions aim to
              teach the basics of Amharic and other Ethiopian languages,
              promoting linguistic diversity and encouraging cross-cultural
              communication.
            </p>
            <br></br>
            <p>
              EthioClub is a vibrant student organization dedicated to
              showcasing the rich cultural heritage, diverse languages, and
              exquisite art of Ethiopia at our university. Our mission is to
              celebrate and preserve the unique traditions and history of
              Ethiopia, fostering a deeper understanding and appreciation among
              students, faculty, and the wider community. Understanding the
              importance of language in cultural identity, EthioClub offers
              language learning sessions and workshops. These sessions aim to
              teach the basics of Amharic and other Ethiopian languages,
              promoting linguistic diversity and encouraging cross-cultural
              communication.
            </p>
            <br></br>
            <p>
              EthioClub is a vibrant student organization dedicated to
              showcasing the rich cultural heritage, diverse languages, and
              exquisite art of Ethiopia at our university. Our mission is to
              celebrate and preserve the unique traditions and history of
              Ethiopia, fostering a deeper understanding and appreciation among
              students, faculty, and the wider community. Understanding the
              importance of language in cultural identity, EthioClub offers
              language learning sessions and workshops. These sessions aim to
              teach the basics of Amharic and other Ethiopian languages,
              promoting linguistic diversity and encouraging cross-cultural
              communication.
            </p>
            <br></br>
            <p>
              EthioClub organizes various events and activities that highlight
              the diverse cultural practices of Ethiopia. From traditional dance
              performances and music to culinary experiences and art
              exhibitions, our events provide a platform for students to immerse
              themselves in the beauty and richness of Ethiopian culture.
            </p>
          </div>

          <div className="comment-section">
            <h3>Leave a comment</h3>
            <p>Your email address will not be published.</p>
            <textarea></textarea>
            <div className="input-group">
              <input type="text" placeholder="Name" required></input>
              <input type="email" placeholder="your email" required></input>
            </div>
            <button>Post Comment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailPage;
