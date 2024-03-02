// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowContent,
      } = value
      const onChangeRightNavBar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      const onChangeLeftNavBar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      return (
        <div className="config-bg-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="checklist-container">
            <li className="check-item-container">
              <input
                type="checkbox"
                id="Content"
                checked={showContent}
                onClick={onChangeShowContent}
              />
              <label htmlFor="Content" className="label">
                Content
              </label>
            </li>
            <li className="check-item-container">
              <input
                type="checkbox"
                id="LeftNavbar"
                checked={showLeftNavbar}
                onClick={onChangeLeftNavBar}
              />
              <label htmlFor="LeftNavbar" className="label">
                Left Navbar
              </label>
            </li>
            <li className="check-item-container">
              <input
                type="checkbox"
                id="RightNavbar"
                onClick={onChangeRightNavBar}
                checked={showRightNavbar}
              />
              <label htmlFor="RightNavbar" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
