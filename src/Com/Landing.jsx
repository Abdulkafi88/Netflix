import React from "react";
import "../Style/Landing.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
const Landing = () => {
  const [info, setInfo] = useState(false);
  return

  const [faqInfo, setFaqInfo] = useState([
    {
      id: 1,
      question: "What is Netflix ?",
      answer: `Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more
            on thousands of internet-connected devices. <br />You can watch
            as much as you want, whenever you want without a single
            commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!`,
      showAnswer: false,
    },
    {
      id: 2,
      question: "How much does NetFlix cost?",
      answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. <br />
            Plans range from TWD270 to TWD390 a month. No extra costs, no
            contracts.`,
      showAnswer: false,
    },
    {
      id: 3,
      question: "Where can I watch?",
      answer: `  Watch anywhere, anytime, on an unlimited number of devices. Sign
            in with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any
            internet-connected device that offers the Netflix app, including
            smart TVs, smartphones, tablets, streaming media players and
            game consoles. <br />You can also download your favorite shows
            with the iOS, Android, or Windows 10 app. Use downloads to watch
            while you're on the go and without an internet connection. Take
            Netflix with you anywhere.`,
      showAnswer: false,
    },
    {
      id: 4,
      question: "How do I cancel?",
      answer: `  Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your
            account anytime.`,
      showAnswer: false,
    },
    {
      id: 5,
      question: "What can I watch on Netflix?",
      answer: `   Netflix has an extensive library of feature films,
             documentaries, TV shows, anime, award-winning Netflix originals,
             and more. Watch as much as you want, anytime you want.`,
      showAnswer: false,
    },
  ]);
  const toggleInfo = (id) => {
    setFaqInfo((prevFaqInfo) =>
      prevFaqInfo.map((item) =>
        item.id === id ? { ...item, showAnswer: !item.showAnswer } : item
      )
    );
  };
  return (
    <>
      <div class="outter-container">
        <header class="header">
          <nav class="logos">
            <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
            <Link to={"Sign"} class="btn">
              {" "}
              Sign In
            </Link>
          </nav>

          <div class="inner-container">
            <div class="inner-title">
              <h1>Unlimited movies, TV shows, and more.</h1>
            </div>
            <div class="inner-text">
              <p>Watch anywhere. Cancel anytime.</p>
            </div>

            <div class="email-form">
              <div class="get-started">
                <input type="text" name="" id="" placeholder="Email address" />
                <a href="" class="btn-lg">
                  Get started <i class="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="overlay"></div>
        </header>

        <section class="showcase ">
          <div class="showcase-container case1 ">
            <div class="inner-container ">
              <div class="inner-title">
                <h1>Enjoy on your TV.</h1>
              </div>
              <div class="inner-text">
                <p>
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </p>
              </div>
            </div>
            <div class="showcase-img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt=""
              />
              <video class="showcase-animation" autoplay playsinline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>

        <section class="showcase">
          <div class="showcase-container case2">
            <div class="showcase-img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt=""
              />
              <div class="downloading">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt=""
                />
                <div class="download-text">
                  <h1>Stranger Things</h1>
                  <p>Downloading...</p>
                </div>
              </div>
            </div>
            <div class="inner-container">
              <div class="inner-title">
                <h1>Download your shows to watch offline.</h1>
              </div>
              <div class="inner-text">
                <p>
                  Save your favorites easily and always have something to watch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="showcase">
          <div class="showcase-container case3">
            <div class="inner-container">
              <div class="inner-title">
                <h1>Watch everywhere.</h1>
              </div>
              <div class="inner-text">
                <p>
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV without paying more.
                </p>
              </div>
            </div>
            <div class="showcase-img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                alt=""
              />
              <video class="showcase-animation" autoplay playsinline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>

        <section class="faq">
          <div class="inner-container ">
            <div class="inner-title ">
              <h1>Frequently Asked Questions</h1>
            </div>

            <ul>
              {faqInfo.map((faqItem) => (
                <li
                  key={faqItem.id}
                  className={faqItem.showAnswer ? "show" : ""}
                >
                  <h2 onClick={() => toggleInfo(faqItem.id)}>
                    {faqItem.question} <i className="fas fa-plus"></i>
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: faqItem.answer }}></p>
                </li>
              ))}
            </ul>

            <div class="email-form">
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              <div class="get-started">
                <input type="text" name="" id="" placeholder="Email address" />
                <a href="" class="btn-lg">
                  Get started <i class="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <p>Questions? Contact us.</p>
          <div class="links">
            <ul>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Account</li>
              <li>Media Center</li>
              <li>Investor Relations</li>
              <li>Jobs</li>
              <li>Ways to Watch</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
              <li>Contact Us</li>
              <li>Speed Test</li>
              <li>Legal Notices</li>
              <li>Netflix Originals</li>
            </ul>
            <div class="language" id="language-btn">
              <i class="fas fa-globe"></i> English
              <i class="fas fa-sort-down lg"></i>
              <div class="dropdown-list">
                <ul class="" id="language-dropdown">
                  <li>中文</li>
                  <li>English</li>
                </ul>
              </div>
            </div>
            <p>NetFlix Taiwan</p>
          </div>
        </footer>
      </div>
    </>
  )
};

export default Landing;
