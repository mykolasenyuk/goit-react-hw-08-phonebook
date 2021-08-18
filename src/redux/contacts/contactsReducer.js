// // import { combineReducers } from 'redux';
// // import types from './contactsTypes';
// // import actions from './contactActions';
// import { createReducer, combineReducer } from '@reduxjs/toolkit';
// // console.log(actions.addContact.type);
// // import { toast } from 'react-toastify';
// import {
//   addContacts,
//   deleteContacts,
//   fetchContacts,
// } from './contactsOperations';

// ///
// // import * as contactsActions from './contactActions';

// const contacts = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
//   [addContacts.fulfilled]: (state, action) => [...state, action.payload],
//   [deleteContacts.fulfilled]: (state, action) => [...state, action.payload],
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,

//   [addContacts.pending]: () => true,
//   [addContacts.fulfilled]: () => false,
//   [addContacts.rejected]: () => false,

//   [deleteContacts.pending]: () => true,
//   [deleteContacts.fulfilled]: () => false,
//   [deleteContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// });
// const filter = createReducer('', {
//   [fetchContacts.changeFilter]: (_, action) => action.payload,
// });

// export default combineReducers({
//   contacts,
//   isLoading,
//   filter,
//   error,
// });
// ///////

// // const addContact = (state, { payload }) => {
// //   if (state.find(contact => contact.number === payload.number)) {
// //     // console.log(' exist num');
// //     toast.error(` 🛑 '${payload.number}' is already in your list`);
// //     return state;
// //   }
// //   if (
// //     state.find(
// //       contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
// //     )
// //   ) {
// //     toast.error(` 🛑 '${payload.name}' is already in your list`);
// //     return state;
// //   }
// //   toast.success(`🚀 '${payload.name}' added to phonebook`);
// //   return [...state, payload];
// // };

// // const deleteContact = (state, { payload }) => {
// //   toast(` 👍🏻 Contact deleted`);
// //   return state.filter(cont => cont.id !== payload);
// // };

// // const contacts = createReducer([], {
// //   [actions.addContact]: addContact,
// //   [actions.deleteContact]: deleteContact,
// // });

// // const filter = createReducer('', {
// //   [actions.changeFilter]: (_, action) => action.payload,
// // });

// //////
// // const contacts = (state = [], { type, payload }) => {
// //   switch (type) {
// //     case types.ADD:
// //       return [...state, payload];

// //     case types.DELETE:
// //       return state.filter(cont => cont.id !== payload);
// //     default:
// //       return state;
// //   }
// // };
// // const filter = (state = '', { type, payload }) => {
// //   switch (type) {
// //     case 'conatcts/ChangeFilter':
// //       return payload;
// //     default:
// //       return state;
// //   }
// // };

// // export default combineReducers({
// //   contacts,
// //   isLoading,
// //   filter,
// //   error,
// // });
