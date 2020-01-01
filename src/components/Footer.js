import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import authorStyles from "../styles/layout/_author.scss";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
            <div className="column is-12 author" style={authorStyles.author}>
              <p className="author-title" style={authorStyles.authorTitle}>
                Author
              </p>
              <div
                className="author-thumbnail"
                style={authorStyles.authorThumbnail}
              >
                <img
                  className="author-thumbnail__image"
                  src="https://lh3.googleusercontent.com/PIb2FoEUyquvEHF6QQASkT7KEf2YwQNdfB52Lg9F4AJ5-hr6hbosNxUFOKfPCJTqX8YR8vZZo1I0IGwj7FLifwbZBx2TqEA0ZVnDwx0GLXOdxOdyVxBTfQP1RSGU_0VkuIBnpL0bsp-iQT6asPx6C84ky2N2k7sRBaA6qfs2vxtzGKGGlfbMgcUxZ_RtpBZjZReA_mpmJ5S4J0FZttIjnFw2pj9dj-BUkx8VY9tJtySxYIsI9rZx5U7O-XvrFYYMT3O-4dBoeA6E85eOw83S4HMYtFU-pGT-o1-Uu9gS1s9Ra0nQucuM701V-ahzZ8EOjS0M9aPkko6wm_WPopOD5M4oM0LrMVfCqLthmmfaB1oJkc7r0-VyrqEPkcB9fOJAW2iZYv-7j1VQ--sKkn7Eew_npIEt6VadkhP1KQecfmRZc_0bJuHgVgQ2O7Mi3gSZSy2dLUbBlGq0TeOBv1frM5xcpPd75vjpCYC4UoKQF0I79YbGK3BRCz6l3QkBe8AHXeUhzc2F2IZQxb-1fx7DQA--sFLEN8hy1kdmEYVoT9WMprYZ_jeMak4NbV3s1OXm6bo9OdmnSxNpKZu-mu9aB8qUAm9Z9c0ERY84Ta6biv_DqKmeS1TpY9oi3xAqK-aIE3rpc2Uozn9kWkTBrcl0tTeKJ1882JIArVRy92T2aAfKrMjf5qufnXw=w608-h480-no"
                  alt="このブログの作者"
                />
              </div>
              <p
                className="author-discription"
                style={authorStyles.authorDiscription}
              >
                Web developer. <br /> Rui-blog is a storage of programming
                information. <br />
                From time totime, I also write articles that are private.
              </p>
              <a
                className="author-link"
                target="_blank"
                href="https://qiita.com/masash49"
              >
                Qiita
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
