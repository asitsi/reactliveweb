import React from "react";
import { NavLink } from "react-router-dom";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "--Choose Country--",
      selectedState: "--Choose State--",
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.setState({
      countries: [
        {
          name: "Germany",
          states: [
            {
              name: "Berlin",
              cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
            },
            {
              name: "Delhi",
              cities: ["Delhi", "Leinfelden-Echterdingen", "Eschborn"],
            },
          ],
        },
        {
          name: "India",
          states: [
            {
              name: "Delhi",
              cities: ["Delhi", "New Delhi"],
            },
            {
              name: "Maharashtra",
              cities: ["Greater Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
            },
            {
              name: "Karnataka",
              cities: [
                "Hubli-Dharwad",
                "Bengaluru",
                "Mysuru",
                "Kalaburagi",
                "Mangaluru",
              ],
            },
            {
              name: "Delhi",
              cities: ["Delhi", "New Delhi"],
            },
          ],
        },
        {
          name: "Spain",
          states: [
            { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
          ],
        },
        {
          name: "USA",
          states: [
            { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
          ],
        },
        {
          name: "Mexico",
          states: [
            { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
          ],
        },
        {
          name: "Canada",
          states: [
            { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
          ],
        },
        {
          name: "Australia",
          states: [
            { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
          ],
        },
        {
          name: "New Zealand",
          states: [
            { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
          ],
        },
        {
          name: "Bangladesh",
          states: [
            { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
          ],
        },
      ],
    });
  }

  changeCountry(event) {
    this.setState({ selectedCountry: event.target.value });
    this.setState({
      states: this.state.countries.find(
        (cntry) => cntry.name === event.target.value
      ).states,
    });
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value });
    const stats = this.state.countries.find(
      (cntry) => cntry.name === this.state.selectedCountry
    ).states;
    this.setState({
      cities: stats.find((stat) => stat.name === event.target.value).cities,
    });
  }

  render() {
    return (
      <div id="container">
        <div className="Country_dropdown py-md-4 py-2">
          <label className="d-none">Country</label>
          <select
            placeholder="Country"
            value={this.state.selectedCountry}
            onChange={this.changeCountry}
          >
            <option>--Choose Country--</option>
            {this.state.countries.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div className="Country_dropdown py-md-4 py-2">
          <label className="d-none">State</label>
          <select
            placeholder="State"
            value={this.state.selectedState}
            onChange={this.changeState}
          >
            <option>--Choose State--</option>
            {this.state.states.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div className="Country_dropdown py-md-4 py-2">
          <label className="d-none">City</label>
          <select placeholder="City">
            <option>--Choose City--</option>
            {this.state.cities.map((e, key) => {
              return <option key={key}>{e}</option>;
            })}
          </select>
        </div>
        <NavLink to="/" className="Country_dropdown_navlink my-5">
          Submit
        </NavLink>
      </div>
    );
  }
}

export default Dropdown;
