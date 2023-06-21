import React, { useImperativeHandle, useMemo, useRef, useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./styled";

export interface SelectCustomProps {
  label: string;
  options: { value: string; label: string }[];
}

export type SelectProps = SelectCustomProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children">;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options = [], onChange, ...props }, ref) => {
    const selectRef = useRef<HTMLSelectElement | null>(null);
    useImperativeHandle(ref, () => selectRef.current as HTMLSelectElement, [selectRef]);

    const [expand, setExpand] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const selected = useMemo(() => options.find((v) => v.value === value), [options, value]);

    const handleOnClickOption = (value: string) => {
      if (!selectRef.current) return;

      // eslint-disable-next-line @typescript-eslint/unbound-method
      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLSelectElement.prototype,
        "value"
      )?.set;

      setter?.call(selectRef.current, value);
      selectRef.current.dispatchEvent(new Event("change", { bubbles: true }));

      setExpand(false);
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.target.value);
      if (onChange) onChange(event);
    };

    return (
      <S.SelectContainer>
        <S.SelectLabel>{label}</S.SelectLabel>

        <S.SelectInnerContainer>
          <S.SelectElementContainer onClick={() => setExpand((prev) => !prev)}>
            <S.SelectButton onBlur={() => setExpand(false)}>
              <span>{selected?.label}</span>
            </S.SelectButton>

            <FontAwesomeIcon icon={faChevronDown} />
          </S.SelectElementContainer>

          {expand && (
            <S.SelectOptionListContainer>
              <S.SelectOptionList>
                {options.map(({ value, label }, i) => {
                  return (
                    <S.SelectOptionItem
                      key={i}
                      onMouseDown={() => handleOnClickOption(value)}
                      selected={value === selected?.value}
                    >
                      {label}
                    </S.SelectOptionItem>
                  );
                })}
              </S.SelectOptionList>
            </S.SelectOptionListContainer>
          )}
        </S.SelectInnerContainer>

        <S.HiddenSelectContainer>
          <select ref={selectRef} onChange={handleOnChange} {...props}>
            {options.map(({ value, label }, i) => {
              return (
                <option key={i} value={value}>
                  {label}
                </option>
              );
            })}
          </select>
        </S.HiddenSelectContainer>
      </S.SelectContainer>
    );
  }
);

Select.displayName = "Select";

export { Select };
