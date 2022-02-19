(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e){var r=this,o=e.cardSelector,i=e.object,a=e.userId,c=e.handleOpenImagePopup,u=e.handleOpenConfirmPopup,s=e.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"checkLike",(function(){return!!r._element.querySelector(".grid-card__like-button").classList.contains("grid-card__like-button_active")})),t(this,"removeCard",(function(){r._element.remove(),r._element=null})),t(this,"handleLikeImg",(function(e){r._element.querySelector(".grid-card__like-button").classList.toggle("grid-card__like-button_active"),r._element.querySelector(".grid-card__likes-count").textContent=e.length})),t(this,"_handleOpenImagePopup",(function(){r._openImagePopup(r._object)})),t(this,"_handleOpenConfirmPopup",(function(){r._openConfirmPopup(r)})),t(this,"_handleLikeCard",(function(){r._likeCard(r)})),t(this,"_hideTrash",(function(){r._ownerId!=r._userId&&r._element.querySelector(".grid-card__delete-button").classList.add("grid-card__delete-button_inactive")})),t(this,"_likeChek",(function(){r._likes.forEach((function(e){e._id===r._userId&&r._element.querySelector(".grid-card__like-button").classList.add("grid-card__like-button_active")}))})),this._selector=o,this._object=i,this._name=i.name,this._link=i.link,this._userId=a,this._ownerId=i.owner._id,this._likes=i.likes,this._openImagePopup=c,this._openConfirmPopup=u,this._likeCard=s}var r,o;return r=n,(o=[{key:"_getItem",value:function(){return document.querySelector(this._selector).content.querySelector(".grid-card").cloneNode(!0)}},{key:"getCardId",value:function(){return this._object._id}},{key:"_setEventListeners",value:function(){this._element.querySelector(".grid-card__delete-button").addEventListener("click",this._handleOpenConfirmPopup),this._element.querySelector(".grid-card__like-button").addEventListener("click",this._handleLikeCard),this._element.querySelector(".grid-card__image").addEventListener("click",this._handleOpenImagePopup)}},{key:"getView",value:function(){return this._element=this._getItem(),this._cardImage=this._element.querySelector(".grid-card__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".grid-card__title").textContent=this._name,this._element.querySelector(".grid-card__likes-count").textContent=this._likes.length,this._hideTrash(),this._likeChek(),this._setEventListeners(),this._element}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._hasInvalidInput()?(i._submitButton.classList.add(i._inactiveButtonClass),i._submitButton.disabled=!0):(i._submitButton.classList.remove(i._inactiveButtonClass),i._submitButton.disabled=!1)},(r="_toggleButtonError")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._formEl=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._inputList=Array.from(this._formEl.querySelectorAll(this._inputSelector)),this._submitButton=this._formEl.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showError",value:function(e,t){var n=this._formEl.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t}},{key:"_hideError",value:function(e){var t=this._formEl.querySelector("#".concat(e.id,"-error"));t&&(e.classList.remove(this._inputErrorClass),t.textContent="")}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonError(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkIfInputValid(t),e._toggleButtonError()}))}))}},{key:"_checkIfInputValid",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){this._formEl.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}},{key:"deactivateSubmit",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonError(),this._inputList.forEach((function(t){return e._hideError(t)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){var n=t._renderer(e);t.addItem(n)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),u(this,"_handleButtonClose",(function(e){e.target.classList.contains("popup_opened")&&n.close(),e.target.classList.contains("popup__close-button")&&n.close()})),this._popup=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this.removeEventListeners()}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("mousedown",this._handleButtonClose)}},{key:"removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this._handleButtonClose)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".figure__image"),t._imageCaption=t._popup.querySelector(".figure__image-caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;p(y(a.prototype),"open",this).call(this),this._image.src=t,this._image.alt=n,this._imageCaption.textContent=n}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t,n,r,o,c=e.popupSelector,u=e.formSelector,s=e.submitFormCallback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(){t._submit(t._getInputValues()),t.close()},(r="_handleButtonSubmit")in(n=C(t=i.call(this,c)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._form=u,t._submit=s,t._inputList=Array.from(t._form.querySelectorAll(".form__input")),t}return t=a,(n=[{key:"close",value:function(){this._form.reset(),g(E(a.prototype),"close",this).call(this)}},{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){g(E(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleButtonSubmit)}},{key:"removeEventListeners",value:function(){g(E(a.prototype),"removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._handleButtonSubmit)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function R(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t,n){var r,o,c,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(e){e.preventDefault(),r._handleSubmit(r._element),r.close()},(c="_handleSubmitDltCard")in(o=B(r=i.call(this,e)))?Object.defineProperty(o,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[c]=u,r._handleSubmit=n,r._form=t,r}return t=a,(n=[{key:"open",value:function(e){L(T(a.prototype),"open",this).call(this),this._element=e}},{key:"setEventListeners",value:function(){L(T(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitDltCard)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.userNameSelector,r=t.userDescriptionSelector,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._description=r,this._avatar=o}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){var t=e.name,n=e.description,r=e.avatar,o=e.id;this._name.textContent=t,this._description.textContent=n,this._avatar.src=r,this._id=o}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.adress,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._adress=n,this._token=r}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._adress,"/users/me"),{headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"getCards",value:function(){return fetch("".concat(this._adress,"/cards"),{headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"editInfo",value:function(e,t){return fetch("".concat(this._adress,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._getResponseData)}},{key:"uploadCard",value:function(e,t){return fetch("".concat(this._adress,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._adress,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"addLike",value:function(e){return fetch("".concat(this._adress,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._adress,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._adress,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._getResponseData)}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),z=document.querySelector(".popup_edit"),N=document.querySelector(".profile__edit-button"),F=z.querySelector(".form"),H=z.querySelector(".form__submit"),J=document.querySelector(".popup_add"),M=document.querySelector(".profile__add-button"),G=J.querySelector(".form"),K=J.querySelector(".form__submit"),Q=document.querySelector(".popup_image"),W=document.querySelector(".popup_confirm"),X=W.querySelector(".form"),Y=(W.querySelector(".form__submit"),document.querySelector(".popup_avatar")),Z=document.querySelector(".profile__image-hover"),$=Y.querySelector(".form"),ee=Y.querySelector(".form__submit"),te=document.querySelector(".form__input_type_user-name"),ne=document.querySelector(".form__input_type_user-description"),re=document.querySelector(".profile__image"),oe=document.querySelector(".profile__user-name"),ie=document.querySelector(".profile__user-description"),ae=document.querySelector(".grid-cards"),ce={inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error"},ue=new U({adress:"https://mesto.nomoreparties.co/v1/cohort-35",token:"2602973a-2e71-4598-8f16-eafce852daf4"}),se=new o(ce,F),le=new o(ce,G),fe=new o(ce,$),pe=new V({userNameSelector:oe,userDescriptionSelector:ie,avatar:re});ue.getUserInfo().then((function(e){pe.setUserInfo({name:e.name,description:e.about,avatar:e.avatar,id:e._id})})).catch((function(e){console.log("Ошибка с загрузкой данных о пользователе с сервера: ".concat(e))}));var he=new O({popupSelector:z,formSelector:F,submitFormCallback:function(e){ue.editInfo(e.name,e.description).then((function(e){pe.setUserInfo({name:e.name,description:e.about,avatar:e.avatar}),H.textContent="Сохранение..."})).catch((function(e){console.log("Ошибка редактирования профиля методом PATCH: ".concat(e))})).finally((function(){H.textContent="Сохранить"}))}}),de=new O({popupSelector:J,formSelector:G,submitFormCallback:function(e){ue.uploadCard(e.name,e.link).then((function(e){Se.addItem(ke(e)),K.textContent="Создание..."})).catch((function(e){console.log("Ошибка загрузки карточки методом POST: ".concat(e))})).finally((function(){K.textContent="Создать"}))}}),_e=new O({popupSelector:Y,formSelector:$,submitFormCallback:function(e){ue.changeAvatar(e.link).then((function(e){pe.setUserInfo({name:e.name,description:e.about,avatar:e.avatar}),ee.textContent="Сохранение..."})).catch((function(e){console.log("Ошибка редактирования аватара: ".concat(e))})).finally((function(){ee.textContent="Сохранить"}))}}),ye=new m(Q),me=function(e){ye.open(e)},be=new D(W,X,(function(e){ue.deleteCard(e.getCardId()).then((function(){e.removeCard()})).catch((function(e){console.log("Ошибка удаления карточки: ".concat(e))}))})),ve=function(e){be.open(e)},ge=function(e){e.checkLike()?ue.deleteLike(e.getCardId()).then((function(t){e.handleLikeImg(t.likes)})).catch((function(e){console.log("Ошибка удаления лайка: ".concat(e))})):ue.addLike(e.getCardId()).then((function(t){e.handleLikeImg(t.likes)})).catch((function(e){console.log("Ошибка добавления лайка: ".concat(e))}))},ke=function(e){return new n({cardSelector:".template-card",object:e,userId:pe._id,handleOpenImagePopup:me,handleOpenConfirmPopup:ve,handleLikeCard:ge}).getView()},Se=new a({renderer:ke},ae);ue.getCards().then((function(e){Se.renderItems(e.reverse())})).catch((function(e){console.log("Ошибка с стартовой загрузкой карточек с сервера: ".concat(e))})),N.addEventListener("click",(function(){var e=pe.getUserInfo();te.value=e.name,ne.value=e.description,se.resetValidation(),he.open()})),M.addEventListener("click",(function(){le.resetValidation(),de.open()})),Z.addEventListener("click",(function(){fe.resetValidation(),_e.open()})),se.enableValidation(),le.enableValidation(),fe.enableValidation()})();