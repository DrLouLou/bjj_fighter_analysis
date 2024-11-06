import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import type {
  IAfterGuiAttachedParams,
  IDoesFilterPassParams,
  IFilterParams,
} from "@ag-grid-community/core";
import type { ChangeEvent } from "react";

type Props = IFilterParams & {
  values: string[];
};

const SetFilter = forwardRef((props: Props, ref) => {
  const refInput = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hidePopupRef = useRef<() => void>(null);

  const [listFilterText, setListFilterText] = useState("");
  // const [searchText, setSearchText] = useState("");

  const values = props.values || [];
  const [selected, setSelected] = useState(values);
  const [allValues] = useState(values);
  const [filteredValues, setFilteredValues] = useState(values);

  // useEffect(() => {
  //   props.filterChangedCallback();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchText]);

  const focus = () => {
    window.setTimeout(() => {
      const elem = refInput.current;
      if (elem) {
        elem.focus();
      }
    });
  };

  useImperativeHandle(ref, () => ({
    isFilterActive() {
      return selected.length !== values.length || listFilterText !== "";
    },

    doesFilterPass(params: IDoesFilterPassParams) {
      const { getValue } = props;
      const { node } = params;

      const value = getValue<string[]>(node) || [];

      // get unselected values
      const unselected = new Set(
        allValues.filter((v) => !selected.includes(v)),
      );

      const filterTextLowerCase = listFilterText?.toLowerCase();

      // check if any of the values are in the unselected list
      const unselectedMatch = value.some((r) => unselected.has(r));

      if (filterTextLowerCase) {
        // check if any of the values are in the search text
        const searchMatch = value.some((r) =>
          r.toLowerCase().includes(filterTextLowerCase),
        );

        return searchMatch && !unselectedMatch;
      }

      return !unselectedMatch;
    },

    getModel() {
      if (!this.isFilterActive()) {
        return null;
      }

      const unselected = allValues.filter((v) => !selected.includes(v));
      return { value: selected, unselected };
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setModel(model: any) {
      if (model == null) {
        setSelected(allValues);
        setTimeout(() => {
          props.filterChangedCallback();
        }, 0);
      } else {
        if (Array.isArray(model?.unselected)) {
          setSelected(allValues.filter((v) => !model.unselected.includes(v)));
          setTimeout(() => {
            props.filterChangedCallback();
          }, 0);
        } else if (Array.isArray(model?.value)) {
          setSelected(model.value as string[]);
          setTimeout(() => {
            props.filterChangedCallback();
          }, 0);
        }
      }
    },

    afterGuiAttached(_params: IAfterGuiAttachedParams) {
      (hidePopupRef.current as unknown) = _params.hidePopup;
      focus();
    },

    componentMethod(message: string) {
      alert(`Alert from PartialMatchFilterComponent: ${message}`);
    },
  }));

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    // filter values to those that match
    const newFilteredValues = values.filter((value) =>
      value.toLowerCase().includes(newValue.toLowerCase()),
    );

    // set the filter text
    setListFilterText(newValue);

    // set the filtered values
    setFilteredValues(newFilteredValues);
  };

  const allValuesText = useMemo(
    () =>
      selected?.length === allValues?.length ? "Unselect All" : "Select All",
    [selected, allValues],
  );

  return (
    <div className="set-filter w-full rounded-md max-h-64">
      <div className="w-full pt-1.5 px-2 bg-[rgb(248, 248, 248)] max-h-[calc(16rem-41px)] overflow-auto min-h-[100px]">
        <input
          ref={refInput}
          value={listFilterText}
          onChange={onChange}
          className="w-full focus:outline-none"
          placeholder="Search..."
        />
        <div className="mt-2 flex flex-col gap-1.5">
          <label>
            <input
              type="checkbox"
              className="mr-1.5"
              checked={selected?.length === allValues?.length}
              onChange={(event) => {
                if (event.target.checked) {
                  setSelected(values);
                } else {
                  // exclude filtered values
                  setSelected(
                    values.filter((v) => !filteredValues.includes(v)),
                  );
                }
              }}
            />
            {allValuesText}
          </label>
          {filteredValues?.map((value, index) => (
            <div key={index} style={{ cursor: "pointer" }}>
              <label>
                <input
                  type="checkbox"
                  className="mr-1.5"
                  checked={selected?.indexOf(value) >= 0}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelected([...selected, value]);
                    } else {
                      setSelected(selected.filter((v) => v !== value));
                    }
                  }}
                />
                {value}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end p-1.5 sticky bottom-0 w-full bg-slate-50 border-0 border-t-[#bdc3c7] border-t border-solid">
        <button
          className="py-[5px] px-[10px] rounded-md border bg-[#76c893] border-[#76c893] text-white text-xs font-semibold"
          onClick={() => {
            if (selected.length === 0) {
              return;
            }

            props.filterChangedCallback();

            if (hidePopupRef.current) {
              hidePopupRef.current();
            }
          }}
        >
          Apply
        </button>

        <button
          className="py-[5px] px-[10px] rounded-md border bg-[#1e6091] border-[#1e6091] text-white text-xs font-semibold ml-2"
          onClick={() => {
            setSelected(allValues);
            setListFilterText("");
            setFilteredValues(allValues);
            setTimeout(() => {
              props.filterChangedCallback();

              if (hidePopupRef.current) {
                hidePopupRef.current();
              }
            }, 0);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
});

SetFilter.displayName = "SetFilter";
export default SetFilter;
