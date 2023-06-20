import { useState } from "react";
import "./DateRangePickerMUI.css";
import { DateRangePicker } from "@mui/lab";
import { TextField, TextFieldProps } from "@mui/material";

function DateRangePickerMUI(): JSX.Element {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const currentDate = new Date();

  const handleDateChange = (newValue: [Date | null, Date | null]) => {
    setDateRange(newValue);
  };

  return (
    <div className="DateRangePickerMUI">
      <DateRangePicker<Date>
        startText="Start Date"
        endText="End Date"
        value={dateRange}
        onChange={handleDateChange}
        renderInput={(startProps: TextFieldProps, endProps: TextFieldProps) => (
          <>
            <TextField {...startProps} />
            <TextField {...endProps} />
          </>
        )}
        minDate={currentDate}
      />
    </div>
  );
}

export default DateRangePickerMUI;
