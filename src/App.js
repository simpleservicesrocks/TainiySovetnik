import React, { Component } from "react";
import "./App.css";
import "./Fonts.css";
import createHistory from "history/createBrowserHistory";
import {
  Home,
  About,
  Porfolio,
  Team,
  Services,
  Feedback,
  Test,
  JoinUs
} from "./pages";
import {
  HNM,
  Gedeon,
  Maggi,
  Samsung,
  Ritz,
  PNG,
  Visa,
  Xerox,
  BtaBank,
  TastyKitchen
} from "./pages/Portfolios";
import { Router, Route, Switch } from "react-router-dom";
import { WrapperMobile, WrapperDesktop } from "./components";
const browserHistory = createHistory();
const ruCountries = ['RU', 'KZ', 'UZ', 'UA']
browserHistory.listen((location, action) => {
  window.scrollTo(0, 0); //reset scoll for portfolio pages
});
class App extends Component {
  state = {
    isMobile: false,
    isColorWhite: false,
    header: "",
    isMenuBlack: false,
    isHeaderBlack: false,
    isModalVisible: false,
    isFirstEntry: true,
    isLoading: true
    
  };
  handleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  handleLanguage = () => {
    let lang;
    if (this.state.lang === "ru") {
      lang = "en";
    } else {
      lang = "ru";
    }
    this.setState({ lang: lang }, () => {
      console.log(this.state.lang);
    });
  };
  handleHalfColor = calc => {
    if ((calc >= 13.5 && calc <= 37.8) || calc >= 63) {
      this.setState({ isMenuBlack: true });
    }
    if (calc >= 37 && calc < 63) {
      this.setState({ isMenuBlack: false });
    }
    if (calc < 13) {
      this.setState({ isMenuBlack: false });
    }
    if ((calc >= 22.5 && calc <= 47.3) || calc >= 72) {
      this.setState({ isHeaderBlack: true });
    }
    if (calc > 48 && calc < 72) {
      this.setState({ isHeaderBlack: false });
    }
    if (calc < 22) {
      this.setState({ isHeaderBlack: false });
    }
  };
  handleHeader = header => {
    this.setState({ header: header });
  };
  handleResize = () => {
    if (window.innerWidth <= 1035) {
      this.setState({ isMobile: true });
    }
    if (window.innerWidth > 1035) {
      this.setState({ isMobile: false });
    }
  };
  handleColor = color => {
    if (color === "white") {
      this.setState({ isColorWhite: true });
    } else {
      this.setState({
        isColorWhite: false,
        isHeaderBlack: false,
        isMenuBlack: false
      });
    }
  };
      setLanguage = (lang) =>{
        let l = 'en'
        ruCountries.map(a=>{
          if(lang===a){
            l = 'ru'
          }
          return true
        })
        this.setState({lang: l, isFirstEntry: false, isLoading: false})
      }
  handleIP = async () =>{
    try {
      const resp = await fetch("https://api.ipify.org/?format=text");
      console.log(resp)
      const res = await resp.text();
      const resp2 = await fetch(`https://ipapi.co/${res}/json/`);
      console.log(resp2)
      const res2 = await resp2.json();
      this.setLanguage(res2.country);
    }
    catch (err) {
      console.log(err);
      this.setLanguage("ru");
    }
  }
  componentDidMount = () => {
    document.title = "Тайный советник";
    this.handleResize();
    if(this.state.isFirstEntry)
      this.handleIP();
    window.addEventListener("resize", this.handleResize);
  };

  render() {
    if(!this.state.isLoading){
      return (
        <Router history={browserHistory}>
          <React.Fragment>
            {this.state.isMobile ? (
              <WrapperMobile
                isColorWhite={this.state.isColorWhite}
                lang={this.state.lang}
                handleLanguage={this.handleLanguage}
              />
            ) : (
              <WrapperDesktop
                handleLanguage={this.handleLanguage}
                lang={this.state.lang}
                isColorWhite={this.state.isColorWhite}
                header={this.state.header}
                isMenuBlack={this.state.isMenuBlack}
                isHeaderBlack={this.state.isHeaderBlack}
                handleModal={this.handleModal}
                isModalVisible={this.state.isModalVisible}
              />
            )}
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                render={props => (
                  <Home
                    {...props}
                    handleHeader={this.handleHeader}
                    lang={this.state.lang}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    handleHalfColor={this.handleHalfColor}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/test"}
                render={props => (
                  <Test
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    handleHalfColor={this.handleHalfColor}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/team"}
                render={props => (
                  <Team
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/about"}
                render={props => (
                  <About
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/join_us"}
                render={props => (
                  <JoinUs
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/services"}
                render={props => (
                  <Services
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/feedback"}
                render={props => (
                  <Feedback
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    isModalVisible={this.state.isModalVisible}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio"}
                render={props => (
                  <Porfolio
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/hnm"}
                render={props => (
                  <HNM
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/png"}
                render={props => (
                  <PNG
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/ritz"}
                render={props => (
                  <Ritz
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/visa"}
                render={props => (
                  <Visa
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/xerox"}
                render={props => (
                  <Xerox
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/maggi"}
                render={props => (
                  <Maggi
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/gedeon"}
                render={props => (
                  <Gedeon
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/samsung"}
                render={props => (
                  <Samsung
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/bta_bank"}
                render={props => (
                  <BtaBank
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                  />
                )}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + "/portfolio/tasty_kitchen"}
                render={props => (
                  <TastyKitchen
                    {...props}
                    handleHeader={this.handleHeader}
                    isMobile={this.state.isMobile}
                    handleColor={this.handleColor}
                    lang={this.state.lang}
                  />
                )}
              />
            </Switch>
          </React.Fragment>
        </Router>
      );
    }else{
      return null
    }
  }
}

export default App;
