import React from "react";
import GoogleButton from "react-google-button";
import { googleSignIn } from "../../firebase/auth";

const LandingPage = () => (
  <>
    <div className="landing-page-logo-wrapper">
      <SupabseSvg />
      <div className="welcome-text">Welcome!</div>
      <GoogleButton onClick={() => googleSignIn()} />
    </div>
  </>
);

const SupabseSvg = () => (
  <svg width="375" height="375" viewBox="0 0 375 375" fill="none">
    <path
      d="M218.909 28.4831C218.909 21.5889 213.322 16 206.431 16C203.004 16 199.9 17.382 197.645 19.6192L195.912 21.548L99.675 151.658H195.18L218.429 32.0055L218.853 29.6682C218.89 29.2781 218.909 28.8828 218.909 28.4831Z"
      fill="#3ECF8E"
    />
    <path
      d="M65 205.336C65 216.366 73.9385 225.308 84.9647 225.308L85.053 225.308H180.87L195.18 151.658H99.675L70.736 190.783L68.8725 193.512C66.4382 196.822 65 200.911 65 205.336Z"
      fill="#3ECF8E"
    />
    <path
      d="M310 171.631C310 160.6 301.061 151.658 290.035 151.658H289.245H195.18L180.87 225.308H275.202L305.604 184.205L306.817 182.455C308.831 179.337 310 175.62 310 171.631Z"
      fill="#3ECF8E"
    />
    <path
      d="M157.533 346.517C157.533 353.411 163.119 359 170.011 359C173.706 359 177.027 357.393 179.311 354.839L179.803 354.285L275.202 225.308H180.87L157.985 343.089L157.924 343.405C157.668 344.4 157.533 345.443 157.533 346.517Z"
      fill="#3ECF8E"
    />
    <path
      d="M157.533 346.517C157.533 353.411 163.119 359 170.011 359C173.706 359 177.027 357.393 179.311 354.839L179.803 354.285L275.202 225.308H180.87L157.985 343.089L157.924 343.405C157.668 344.4 157.533 345.443 157.533 346.517Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="236"
        y1="237"
        x2="167"
        y2="359"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#23915F" />
        <stop offset="1" stopColor="#3ECF8E" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default LandingPage;
