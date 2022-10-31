export const getContact = ({contacts}) => contacts.items;
export const getFilter = ({filter}) => filter.filter;
  
export const getState = ({ contacts }) => ({ isLoading: contacts.isLoading, error: contacts.error })
