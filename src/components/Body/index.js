// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-bg-container">
          {showLeftNavbar && (
            <div className="left-nav-bg-container">
              <h1 className="left-nav-heading">Left Navbar Menu</h1>

              <ul className="left-nav-container">
                <li className="left-nav-item-container left-nav-item-desc">
                  Item 1
                </li>
                <li className="left-nav-item-container left-nav-item-desc">
                  Item 2
                </li>
                <li className="left-nav-item-container left-nav-item-desc">
                  Item 3
                </li>
                <li className="left-nav-item-container left-nav-item-desc">
                  Item 4
                </li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-desc">
                lorem ipsum dolor sit amet, consectuer lorem ipsum dolor sit
                amet, consectuer lorem ipsum dolor sit amet, consectuer lorem
                ipsum dolor sit amet, consectuer lorem ipsum dolor sit amet,
                consectuer lorem ipsum dolor sit amet, consectuer
              </p>
            </div>
          )}
          {showRightNavbar && (
            <p className="right-nav-bg-container">
              <h1 className="left-nav-heading">Right Navbar</h1>
              <p className="right-nav-Ad">Ad 1</p>
              <p className="right-nav-Ad">Ad 2</p>
            </p>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
