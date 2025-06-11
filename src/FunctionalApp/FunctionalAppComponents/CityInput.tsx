import React from "react";
import { CityInputProps } from "../../PropType";
import { hasCity } from "../../utils/validations";
import { allCities } from "../../utils/all-cities";

export const CityInput = ({
  cityInputState,
  setCityInputState,
  setIsCityValid,
}: CityInputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCityInputState(value);

    if (hasCity(value)) {
      setIsCityValid(true);
    }
  };

  return (
    <div className="input-wrap">
      <label>{"City"}:</label>
      <input
        placeholder="Hobbiton"
        value={cityInputState}
        onChange={onChangeHandler}
        list="allCities"
      />
      <datalist id="allCities">
        {allCities.map((city) => (
          <option key={city} value={city} />
        ))}
      </datalist>
    </div>
  );
};
