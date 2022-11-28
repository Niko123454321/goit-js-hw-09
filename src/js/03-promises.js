console.log('faina_super_dog');
import Notiflix from 'notiflix';
const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('form.form'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', onStart);

function onStart(evt) {
  evt.preventDefault();

  let delay = refs.delay.value;
  let step = refs.step.value;
  let amount = refs.amount.value;

  // console.log('delay', delay);
  // console.log('step', step);
  // console.log('amount', amount);

  for (let i = 0; i <= amount; i++) {
    let delay = Number(step * i);
    // console.log(`i= ${i}, delay= `, delay);

    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ i, delay }) => {
        console.log(`❌ Rejected promise ${i} in ${delay}ms`);
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
  }
}
