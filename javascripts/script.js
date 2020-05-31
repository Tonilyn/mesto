const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const popup = document.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
const popupButtonClose = popupContainer.querySelector('.popup__close');
const popupForm = popup.querySelector('.popup__form');
const popupButtonSave = popupForm.querySelector('.popup__save');
const popupName = popupForm.querySelector('.popup__item_name');
const popupJob = popupForm.querySelector('.popup__item_job');

function openPopup() {
  popup.classList.add('popup_active');
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
}

function closePopup() {
    popup.classList.remove('popup_active')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup();
}

profileEditButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);