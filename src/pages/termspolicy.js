import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footers from "../components/footers";
import { serverURL } from "../constants";
import axios from "axios";
import StyledText from "../components/styledText";

const TermsPolicy = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const postURL = `${serverURL}/api/termsOfUs`;
      try {
        const response = await axios.get(postURL);
        if (response.data && response.data.terms) {
          const terms = response.data.terms || "No terms available";
          setData(terms);
          sessionStorage.setItem("TermsPolicy", terms); // Store in sessionStorage
        } else {
          throw new Error("No terms data found");
        }
      } catch (err) {
        setError("Failed to load terms policy. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (sessionStorage.getItem("TermsPolicy")) {
      setData(sessionStorage.getItem("TermsPolicy"));
      setLoading(false); // No need to load if already in sessionStorage
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header isHome={false} className="sticky top-0 z-50" />
      <div className="dark:bg-black flex-1">
        <div className="flex-1 flex items-center justify-center py-10 flex-col">
          <p className="text-center font-black text-4xl text-black dark:text-white">
            Terms
          </p>

          <div className="w-2/4 py-10 text-justify text-black dark:text-white">
            <h1>
              Cepoint Terms of Use for Google Auth Credentials and Google Gemini
              AI
            </h1>
            <h2>1. Use of Google Auth Credentials</h2>
            <p>
              By authenticating with Google Auth, you authorize Cepoint to
              access your Google account details, such as your email address,
              full name, and unique user ID.
            </p>
            <p>
              You acknowledge that Cepoint will store secure authentication
              tokens for maintaining your session and may use the provided data
              to enhance your experience with Google Gemini AI.
            </p>

            <h2>2. Integration with Google Gemini AI</h2>
            <p>
              CePoint’s services integrate with Google Gemini AI to provide
              personalized, AI-driven features and recommendations. The data
              shared through Google Auth is used solely for the purpose of
              enabling this functionality.
            </p>
            <p>
              You acknowledge that Google Gemini AI may analyze certain usage
              data (such as input queries and timestamps) to provide responses
              tailored to your needs.
            </p>

            <h2>3. Data Privacy and Security</h2>
            <p>
              Cepoint is committed to safeguarding your personal information. We
              do not share your Google Auth data with third parties unless
              required by law or as part of the authentication process with
              Google.
            </p>
            <p>
              All personal data and authentication tokens are encrypted and
              stored securely in compliance with industry standards.
            </p>

            <h2>4. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              Google Auth credentials. Any misuse of your account resulting from
              unauthorized access through your credentials will not hold Cepoint
              liable.
            </p>
            <p>
              You agree not to share or distribute Google Auth credentials or
              allow any unauthorized third party to access your account.
            </p>

            <h2>5. Limitations of Liability</h2>
            <p>
              Cepoint is not liable for any loss or damage caused by the use of
              Google Auth credentials or Google Gemini AI beyond what is allowed
              by applicable law.
            </p>
            <p>
              Cepoint is not responsible for any inaccurate or incomplete data
              generated by Google Gemini AI as part of your interaction with our
              services.
            </p>

            <h2>6. Termination of Service</h2>
            <p>
              Cepoint reserves the right to terminate your access to services if
              it is determined that you have violated any terms regarding the
              use of Google Auth credentials or Google Gemini AI.
            </p>
            <p>
              You may revoke your Google Auth consent at any time, but this may
              result in the inability to access some or all Cepoint features
              that require Google Gemini AI integration.
            </p>

            <h2>7. Amendments to Terms</h2>
            <p>
              Cepoint may update these terms from time to time. Any significant
              changes will be communicated to you via email or through a
              notification on our platform.
            </p>
            <p>
              Continued use of Cepoint after such changes will constitute
              acceptance of the revised terms.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              For any inquiries related to these terms, or if you have concerns
              about how your Google Auth credentials are being used, please
              contact us at:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:jit@cehpoint.co.in">jit@cehpoint.co.in</a>
            </p>
            <p>
              <strong>Address:</strong> Labpur, Birbhum 731303, India
            </p>
          </div>
        </div>
      </div>
      <Footers className="sticky bottom-0 z-50" />
    </div>
  );
};

export default TermsPolicy;
