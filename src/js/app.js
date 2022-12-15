'use strict';
import Modal from './modules/modal.js';
import AddActive from './modules/AddActive.js';

window.addEventListener('DOMContentLoaded', () => {
  AddActive();
  Modal('.modal', '.main-wrapper');
});
