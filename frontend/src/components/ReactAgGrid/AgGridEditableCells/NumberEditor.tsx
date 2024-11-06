import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import type { ICellEditorParams } from "@ag-grid-community/core";
import { InputNumber } from "antd";

type Props = ICellEditorParams & {
  step?: string;
  maxValue?: number;
};

// backspace starts the editor on Windows
const KEY_BACKSPACE = "Backspace";
const KEY_F2 = "F2";

/**
 * Numeric Editor
 * @param props
 * @constructor
 * @see https://www.ag-grid.com/react-data-grid/component-cell-editor/
 * @see https://www.ag-grid.com/react-data-grid/component-cell-editor/#cell-editing-api
 */
const NumericEditor = forwardRef((props: Props, ref) => {
  const { step = "0.01", maxValue = 1000000 } = props;

  const createInitialState = () => {
    let startValue;
    let highlightAllOnFocus = true;
    const eventKey = props.eventKey;

    if (eventKey === KEY_BACKSPACE) {
      // if backspace or delete pressed, we clear the cell
      startValue = "";
    } else if (eventKey && eventKey.length === 1) {
      // if a letter was pressed, we start with the letter
      startValue = eventKey;
      highlightAllOnFocus = false;
    } else {
      // otherwise we start with the current value
      startValue = props.value;
      if (eventKey === KEY_F2) {
        highlightAllOnFocus = false;
      }
    }

    return {
      value: startValue,
      highlightAllOnFocus,
    };
  };

  const initialState = createInitialState();
  const [value, setValue] = useState(initialState.value);
  const [highlightAllOnFocus, setHighlightAllOnFocus] = useState(
    initialState.highlightAllOnFocus
  );
  const refInput = useRef<HTMLInputElement>(null);

  // focus on the input
  useEffect(() => {
    // get ref from React component
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const eInput = refInput.current!;
    eInput.focus();
    if (highlightAllOnFocus) {
      eInput.select();

      setHighlightAllOnFocus(false);
    } else {
      // when we started editing, we want the caret at the end, not the start.
      // this comes into play in two scenarios:
      //   a) when user hits F2
      //   b) when user hits a printable character
      const length = eInput.value ? eInput.value.length : 0;
      if (length > 0) {
        eInput.setSelectionRange(length, length);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Utility Methods */
  const cancelBeforeStart =
    props.eventKey &&
    props.eventKey.length === 1 &&
    !"1234567890".includes(props.eventKey);

  /* Component Editor Lifecycle methods */
  useImperativeHandle(ref, () => {
    return {
      // the final value to send to the grid, on completion of editing
      getValue() {
        return value === "" || value == null ? null : +value;
      },

      // Gets called once before editing starts, to give editor a chance to
      // cancel the editing before it even starts.
      isCancelBeforeStart() {
        return cancelBeforeStart;
      },

      // Gets called once when editing is finished (eg if Enter is pressed).
      // If you return true, then the result of the edit will be ignored.
      isCancelAfterEnd() {
        // will reject the number if it greater than 1,000,000
        // not very practical, but demonstrates the method.
        const finalValue = this.getValue();

        return finalValue != null && finalValue > maxValue;
      },
    };
  });

  return (
    <InputNumber
      // type="number"
      ref={refInput}
      value={value}
      onChange={v => {
        setValue(v);
      }}
      className="h-[calc(100%-2px)] w-full px-1 text-[10px]"
      step={step}
      size="small"
    />
  );
});

NumericEditor.displayName = "NumericEditor";
export default memo(NumericEditor);
