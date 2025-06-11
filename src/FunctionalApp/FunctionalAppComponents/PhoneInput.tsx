import { useRef } from "react";
import { PhoneInputProps } from "../../PropType";
import { formatPhoneNumber } from "../../utils/transformations";

export const PhoneInput = ({
  phoneInputState,
  setPhoneInputState,
  setIsPhoneValid,
}: PhoneInputProps) => {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);

  const refs = [ref1, ref2, ref3, ref4];
  const lengths = [2, 2, 2, 1];

  const onChangeHandler =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const nextRef = refs[index + 1];
      const prevRef = refs[index - 1];
      const curMaxLength = lengths[index];

      const shouldGoNextRef = curMaxLength === value.length && nextRef?.current;
      const shouldGoPrevRef = value.length === 0 && prevRef?.current;

      const onlyNumbersRegex = /^\d*$/;

      const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
        index === phoneInputIndex && onlyNumbersRegex.test(value)
          ? value
          : phoneInput
      );
      setPhoneInputState(newState);

      setIsPhoneValid(formatPhoneNumber(newState) === null ? false : true);

      if (shouldGoNextRef) nextRef.current.focus();
      if (shouldGoPrevRef) prevRef.current.focus();
    };

  return (
    <div className="input-wrap">
      <label htmlFor="phone">Phone:</label>
      <div id="phone-input-wrap">
        <input
          type="text"
          id="phone-input-1"
          placeholder="55"
          value={phoneInputState[0]}
          onChange={onChangeHandler(0)}
          ref={ref1}
          maxLength={2}
        />
        -
        <input
          type="text"
          id="phone-input-2"
          placeholder="55"
          value={phoneInputState[1]}
          onChange={onChangeHandler(1)}
          ref={ref2}
          maxLength={2}
        />
        -
        <input
          type="text"
          id="phone-input-3"
          placeholder="55"
          value={phoneInputState[2]}
          onChange={onChangeHandler(2)}
          ref={ref3}
          maxLength={2}
        />
        -
        <input
          type="text"
          id="phone-input-4"
          placeholder="5"
          value={phoneInputState[3]}
          onChange={onChangeHandler(3)}
          ref={ref4}
          maxLength={1}
        />
      </div>
    </div>
  );
};
