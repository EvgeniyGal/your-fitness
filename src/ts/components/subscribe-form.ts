// import isEmailRight from "../helpers/email-checker";
// // import { subscribe } from "../api-services/your-energy-api";

// const subscribeForm = {
//   form: document.querySelector(".footer__form")! as HTMLFormElement,
//   emailInput: document.querySelector(
//     ".footer__form__input"
//   )! as HTMLInputElement,
//   message: document.querySelector(".footer__form__message"),
//   btn: document.querySelector(".footer__form__btn"),
// };

// subscribeForm.form.addEventListener("submit", formSubmitHandler);

// async function formSubmitHandler(ev: SubmitEvent) {
//   ev.preventDefault();

//   const email = subscribeForm.emailInput.value.trim().toLowerCase();

//   if (isEmailRight(email)) {
//     try {
//       const fetch = new ApiService();
//       fetch.email = email;
//       await fetch.subscribe();
//       subscribeForm.message.textContent = THANKS_FOR_SUBSCRIPT;
//       subscribeForm.message.classList.remove(
//         "full_hidden",
//         "footer__form__message_waring"
//       );
//       subscribeForm.message.classList.add("footer__form__message_ok");
//       console.log("ok");
//       ev.target.reset();
//     } catch (error) {
//       subscribeForm.message.textContent = PREV_ADDED_EMAIL;
//       subscribeForm.message.classList.remove(
//         "full_hidden",
//         "footer__form__message_ok"
//       );
//       subscribeForm.message.classList.add("footer__form__message_warning");
//     }
//   } else {
//     subscribeForm.message.textContent = WRONG_EMAIL_FORMAT;
//     subscribeForm.message.classList.remove(
//       "full_hidden",
//       "footer__form__message_ok"
//     );
//     subscribeForm.message.classList.add("footer__form__message_warning");
//   }
// }

// subscribeForm.emailInput.addEventListener("input", handlerEmailInput);

// function handlerEmailInput(ev) {
//   ev.target.value.trim()
//     ? (subscribeForm.btn.disabled = false)
//     : (subscribeForm.btn.disabled = true);
// }

// subscribeForm.emailInput.addEventListener("focus", handlerEmailFocus);

// function handlerEmailFocus() {
//   subscribeForm.message.classList.add("full_hidden");
// }
