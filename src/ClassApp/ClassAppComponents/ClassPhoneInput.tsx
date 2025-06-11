import { Component, createRef, ReactNode } from "react";
import { PhoneInputProps } from "../../PropType";
import { formatPhoneNumber } from "../../utils/transformations";

export class ClassPhoneInput extends Component<PhoneInputProps> {
  ref1 = createRef<HTMLInputElement>();
  ref2 = createRef<HTMLInputElement>();
  ref3 = createRef<HTMLInputElement>();
  ref4 = createRef<HTMLInputElement>();

  lengths = [2, 2, 2, 1];

  inputRefs = [this.ref1, this.ref2, this.ref3, this.ref4];

  onChangeHandler =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { phoneInputState, setPhoneInputState, setIsPhoneValid } =
        this.props;

      const value = e.target.value;
      const nextRef = this.inputRefs[index + 1];
      const prevRef = this.inputRefs[index - 1];
      const curMaxLength = this.lengths[index];

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

      if (shouldGoNextRef) nextRef.current!.focus();
      if (shouldGoPrevRef) prevRef.current!.focus();
    };

  render(): ReactNode {
    const { ref1, ref2, ref3, ref4 } = this;
    const { phoneInputState } = this.props;
    return (
      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <input
            type="text"
            id="phone-input-1"
            placeholder="55"
            value={phoneInputState[0]}
            onChange={this.onChangeHandler(0)}
            ref={ref1}
            maxLength={2}
          />
          -
          <input
            type="text"
            id="phone-input-2"
            placeholder="55"
            value={phoneInputState[1]}
            onChange={this.onChangeHandler(1)}
            ref={ref2}
            maxLength={2}
          />
          -
          <input
            type="text"
            id="phone-input-3"
            placeholder="55"
            value={phoneInputState[2]}
            onChange={this.onChangeHandler(2)}
            ref={ref3}
            maxLength={2}
          />
          -
          <input
            type="text"
            id="phone-input-4"
            placeholder="5"
            value={phoneInputState[3]}
            onChange={this.onChangeHandler(3)}
            ref={ref4}
            maxLength={1}
          />
        </div>
      </div>
    );
  }
}
