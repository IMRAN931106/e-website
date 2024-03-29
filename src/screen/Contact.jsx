import styled from "styled-components";
import { useProductContext } from "../Context/ProductContaxt";
import { HashLoader } from "react-spinners";

const Contact = () => {

  const { isLoading } = useProductContext();

  if (isLoading) {
    return (
      <HashLoader
        color="#CDCBCF"
        size={70}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      />
    );
  }

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
.ifream-map {
  height: 40vh;
}
    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.548145796097!2d77.31269639050588!3d28.536825300000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce69e96b88007%3A0x4d33fa96165f2195!2sBilal%20Masjid%20Kanchan%20Kunj!5e0!3m2!1sen!2sin!4v1704220358800!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="ifream-map"
        title="hello"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xyyryjdz"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              // value=''
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              // value=''
              pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
              // value=''
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
