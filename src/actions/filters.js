export const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  textFilter: text,
});

export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

export const setStartDate = (date = "") => ({
  type: "SET_START_DATE",
  startDate: date,
});

export const setEndDate = (date = "") => ({
  type: "SET_END_DATE",
  endDate: date,
});
