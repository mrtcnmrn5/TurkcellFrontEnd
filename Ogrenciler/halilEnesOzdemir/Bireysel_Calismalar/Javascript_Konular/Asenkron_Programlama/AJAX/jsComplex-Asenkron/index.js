// JS Single Thread'dir...
// JS Senkron olarak çalışır...

/* const func1 = () => {
  console.log('Func 1 Console Log 1');
  console.log('Func 1 Console Log 2');
  alert('Alert Message');
  // Alert block Function 2
  // Basmıyom ulan OK'a napcan? Kaldın mı öyle...
  // İşlem ilerlerken güzel amma bloklandığında sıkıntı büyük.

  // Bir site 5 saniye yüklenmeyince başkasına geçiyoruz, o halde performans bizim için önemli, aynı anda birden fazla işlem yapabilmek çok mühim ---> ASENKRON
};

const func2 = () => {
  console.log('Func 2 Console Log 1');
  console.log('Func 2 Console Log 2');
};

func1();
func2();
 */
// Eksik veri gelmekte...

/* let x = 10;
console.log('1.Gelen veri', x);

setTimeout(() => {
  x = x + 5;
}, 1000);

console.log('2.Gelen veri', x);

x = x + 5;
console.log('3.Gelen veri', x);
 */

// CALL STACK
// Fonksiyonların çalışma sırası...

/* function func1() {
  console.log('Ben birinciyim');
  func2();
  console.log('Ben tekrar birinciyim');
}

function func2() {
  console.log('Ben ikinciyim');
  func3();
  console.log('Ben tekrar ikinciyim');
}

function func3() {
  console.log('Ben üçüncüyüm');
}

func1(); */

/* function sum(x, y) {
  return x + y;
}

function avg(x, y) {
  return sum(x, y) / 2;
}

let x = avg(6, 8);
console.log(x); */

/* function task(message) {
  let n = 10000000000;
  while (n > 0) {
    n--;
  }

  console.log(message);
}

console.log('1');

setTimeout(() => {
  console.log('2');
}, 1000); // CALLBACK SIRASINA GİRDİ...(CALLBACK QUEUE) -> CALLBACK KULLANIMA HAZIR FAKAT ÖNCE CALL STACK'E BAKIYOR. TAMAMLANDIĞI ANDA DEVREYE GİRİYOR.

console.log('3');

console.log('4');

task('İşlem tamamlandı');

setTimeout(() => {
  console.log('5');
}, 2000);

task('İşlem tamamlandı 2'); */

// CALLBACK Javascript'in asenkron çalışma için bulduğu çözümlerden birisi...

// const myName = () => {
//   console.log('Benim adım Halil');
// };

// setTimeout(myName, 3000);
// Bir fonksiyon bir fonksiyona argüman olarak geliyorsa... Argüman olarak gelen fonksiyona 'Callback' denir...

/* setTimeout(() => {
  console.log('Benim adım Arin');
}, 3000); */

/* const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  // alert('You clicked me');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly added paragraph';
  document.body.appendChild(pElem);
});

let h1Elem = document.createElement('h1');
h1Elem.textContent = 'HEADER';
document.body.appendChild(h1Elem); */

const books = [
  { name: 'Pinball 1973', author: 'Haruki Murakami' },
  { name: 'Özgürlük', author: 'Zygmunt Baumann' },
  { name: "Türkiye'de çağdaşlaşma", author: 'Niyazi Berkes' },
];

const listBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};

const addNewBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};
addNewBook({ name: 'Berlin Hatıralarım', author: 'Hüsrev Gerede' }, listBooks);
