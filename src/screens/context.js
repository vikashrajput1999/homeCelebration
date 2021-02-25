import React from 'react';
const initialState = {
  Birth:[], "Rites of Passage":[], Graduation:[], Engagement:[], Birthday:[], Honors:[], "Wedding Anniversary":[], Pets:[], "Personal History":[], "Add Your Own Celebrations":[]
};
export const TakeHolidayContext = React.createContext(null);
export default function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <TakeHolidayContext.Provider value={{state, setState}}>
      {props.children}
    </TakeHolidayContext.Provider>
  );
}
