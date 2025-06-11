import { Component, ReactNode } from "react";
import { CityInputProps } from "../../PropType";
import { hasCity } from "../../utils/validations";
import { allCities } from "../../utils/all-cities";

export class ClassCityInput extends Component<CityInputProps> {
  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setCityInputState, setIsCityValid } = this.props;
    const value = e.target.value;
    setCityInputState(value);

    if (hasCity(value)) setIsCityValid(true);
  };

  render(): ReactNode {
    const { cityInputState } = this.props;
    return (
      <div className="input-wrap">
        <label>{"City"}:</label>
        <input
          placeholder="Hobbiton"
          value={cityInputState}
          onChange={this.onChangeHandler}
          list="allCities"
        />
        <datalist id="allCities">
          {allCities.map((city) => (
            <option key={city} value={city} />
          ))}
        </datalist>
      </div>
    );
  }
}
