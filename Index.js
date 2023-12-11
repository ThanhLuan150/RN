// Biến được khai báo bằng var có phạm vi (scope) là phạm vi hàm (function scope). Điều này có nghĩa là nếu một biến được khai báo bên trong một hàm sử dụng var, biến đó chỉ có thể truy cập được trong phạm vi của hàm đó.
// Biến var có thể được khai báo lại (redeclare) và cập nhật giá trị mà không gây ra lỗi.
// function example() {
//   var x = 10;
//   if (true) {
//     var x = 20;
//     console.log(x); // Output: 20
//   }
//   console.log(x); // Output: 20
// }
// // let:
// let y = 10;
// if (true) {
//   let y = 20;
//   console.log(y); // Output: 20
// }
// console.log(y); // Output: 10
// // Biến được khai báo bằng const cũng có phạm vi là phạm vi khối (block scope).
// // Khác với let, một biến được khai báo bằng const phải được gán giá trị khi khai báo và không thể được gán lại giá trị sau đó. 

// const z = 10;
// // z = 20; // Lỗi: Không thể gán lại giá trị cho biến const

// const person = {
//   name: 'John',
//   age: 30
// };

// person.age = 31; // Hợp lệ: Thay đổi thuộc tính của đối tượng const
// person = { name: 'Alice', age: 25 }; // Lỗi: Không thể gán lại biến const cho một đối tượng mới








// Biến được khai báo bằng let có phạm vi là phạm vi khối (block scope). Điều này có nghĩa là biến let chỉ có thể truy cập được trong cùng một block code, ví dụ như trong một if, for, hoặc while.
// Biến let có thể được khai báo lại trong cùng một phạm vi, nhưng không thể khai báo lại trong cùng một block code.


//  var age =10; // biến toản cục
//  let b =0.5;  // tại vị nó một khối nên có thế có thể dùng đc b khi mà khai bảo b trong const show lr thì sẽ k sử dụng được 
//  const showle =() =>{
//     var age =10; // biến toản cục
//     let b =0.5;
//     age =12;
//     b=b+1;
//     console.log('mm', b);
//  }

//  const showchan = () =>{
//     age =13;
//     console.log("mm",b);
//  }

//  showle();
//  showchan();

//  const AI =20;
//  const DEFAULT_LIMIT=12;
//  const isMoreThan10 = 13 >DEFAULT_LIMIT ? "lơn hơn":"nhỏ hơn"
//  console.log(isMoreThan10) // không nên dùng câu điều kiện rút gọn quá nhiều lần

//  const  d="A";
//  const c = "3";
// const e=3
// console.log(e*d)

 //CHUỖI CỘNG SỔ RA CHUỖI

 // sting à số ms ra kết quả ra số

// const object ={
//     age:'1',
//     name:'Luân'
// }
// const array =[1,23,4,4,4]


//  const h=3;
//  console.log(typeof h)
// //typeOf xác định kiểu dữ liệu

//  const string ="luan"
// // sẽ lấy vị trí bất ký của ký tự
// console.log(string.concat(object.name))// concat() nối gộp chuỗi
// const luan = 100;
// console.log(Math.PI);

// // ARRAY
// const now = new Date();
// console.log(now.getFullYear());

// console.log(now.getMonth());
//Function

// function tinhtoan (x,y ) {

//     return x+y;
// }
// console.log(tinhtoan(4,"ádfbfdsad"));

// const tinhtoan1 = (name ) =>{
//     return `hello, ${name}`;
// }
// // không nằm trong block thì k return còn nằm trong block thì return bình thường

// console.log( tinhtoan1("Luan"));


// String
// const  a ="Hello\v 'thanhLuan'"
// console.log(a);

// function dateTime () {
//     const dateNow = new Date();
//     const hour = dateNow.getHours();
//     const minute = dateNow.getMinutes();
//     const second = dateNow.getSeconds();
//     if(hour <10){
//         hour = '0'+ hour;
//     }
//     else if (minute < 10){
//         minute = '0' + minute
//     }
//     else if (second < 10) {
//         second = '0' +second
//     }
//     const result =  hour + ':' + minute + ':'  +second;
//     return result;
//   }
//   console.log(dateTime());
//   const cars = ["Saab", "Volvo", "BMW"];
//   cars.length //lấy độ dài của mảng

//   find //tìm kiếm

  // k tìm ra index thì sẽ hiển thị ra -1

  // map dùng để sét qua từng phần tử và chỉnh sửa đó

  //every
  // trả về true nếu tất cả các phần tử thỏa mãng điều kiện
  //some

  //chỉ cần một phần tử thỏa mãn thỏa mãn điều kiến sẽ trả kết quả true
  // inclue nó kiểm tra xem phần tủ có nằm trong mảng đó k??

  //reduce

// phương thức reduce() được sử dụng để thực hiện một phép tích lũy trên một mảng và trả về kết quả cuối cùng.

// const sumArray = [1, 3, 4, 1, 5];
// // Tính tổng của tất cả các số trong mảng
// const sum = sumArray.reduce((accumulator, currentValue) => {
//     // Phương thức reduce() lặp qua từng phần tử của mảng sumArray
//     // Accumulator lưu tổng tích luỹ, currentValue là phần tử hiện tại
//     return accumulator + currentValue; // Cộng phần tử hiện tại vào tổng tích luỹ
// }, 0); // 0 là giá trị khởi tạo của tổng tích luỹ
// console.log(sum);
// // Tính trung bình bằng cách chia tổng cho số lượng phần tử trong mảng
// const average = sum / sumArray.length;
// console.log(average);




// console.log([...ha, ...ba])
// console.log(ha.concat(ba))


// const tongHa = ha.reduce((acc, curr) => acc + curr, 0);
// const tongBa = ba.reduce((acc, curr) => acc + curr, 0);

// const tongTatCa = tongHa + tongBa;

// console.log(tongTatCa)




// // Kết hợp mảng sử dụng phương thức concat()
// console.log(ha.concat(ba)); 






// const ha=[1, 2, 4, 7,9]
// const ba=[6, 7, 8,9]
// // Kết hợp mảng sử dụng toán tử spread
// console.log([...ha, ...ba]);
// // Tính tổng của tất cả các số trong mảng kết hợp
// const combinedArray = [...ha, ...ba]; // Kết hợp mảng sử dụng toán tử spread
// const Sum = combinedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Tổng:", Sum); 

//Object

// const obj= {
//     id:'1',
//     nameD:'Luân'
// }
// console.log(obj)
// Object.entries(obj).map(((e,index)=>{
// console.log(e);
// }))

// const students = [
//     {
//       id: 1,
//       name: "Suu",
//       age: 26,
//     },
//     {
//       id: 2,
//       name: "Tien",
//       age: 24,
//     },
//     {
//       id: 3,
//       name: "Tu",
//       age: 19,
//     },
//     {
//       id: 4,
//       name: "Huong",
//       age: 20,
//     },
//     {
//       id: 5,
//       name: "Thien",
//       age: 22,
//     },
//     {
//       id: 6,
//       name: "Sen",
//       age: 21,
//     },
//     {
//       id: 7,
//       name: "Quang",
//       age: 24,
//     },
//     {
//       id: 8,
//       name: "Luan",
//       age: 23,
//     },
//   ];


// const ageStudents = students.filter(students => students.age > 23);
// console.log(ageStudents);



//  phương thức filter() được sử dụng để tạo một mảng mới từ một mảng đã có, bằng cách lọc các phần tử theo một điều kiện nhất định.

//   const namesOfStudents = students.filter(students => students.age > 23 && students.age %2 == 0).map(student => student.name);
// // Lọc mảng 'students', chọn chỉ những đối tượng có thuộc tính 'age' lớn hơn 23
// // Tạo một mảng mới chỉ chứa thuộc tính 'name' của các đối tượng sinh viên đã được lọc
// console.log(namesOfStudents);





  // Khởi tạo một mảng rỗng để lưu tên của những học sinh đáp ứng điều kiện cụ thể

  //array.reduce(function(accumulator, currentValue, currentIndex, array) {
  // Logic xử lý và trả về giá trị mới cho accumulator
    // }, initialValue);

//accumulator: Giá trị tích luỹ (được cập nhật sau mỗi lần thực hiện hàm callback).
// currentValue: Giá trị của phần tử hiện tại trong mảng.
// currentIndex: Chỉ số của phần tử hiện tại.
// array: Mảng đang được duyệt.
// const namesOfStudent = students.reduce((accumulator, student) => {
//     // Kiểm tra nếu tuổi của học sinh lớn hơn 23 và là số chẵn
//     if (student.age > 23 && student.age % 2 === 0) {
//       // Nếu đáp ứng điều kiện, thêm tên của học sinh vào mảng kết quả
//       accumulator.push(student.name);
//     }
//     // Trả về mảng kết quả để sử dụng trong lần lặp tiếp theo
//     return accumulator;
//   }, []); // Khởi tạo mảng kết quả là một mảng rỗng
//   console.log(namesOfStudent);

// Quy tắc đặc tên hàm
// chữ cái đầu ghi thường mấy chữ cái sau ghi hoa hoặc ghi thường
//trước đó phải bắt đầu bằng một động từ
 


// Viết hàm trả về số lớn thứ 2 trong mảng bất kì 
// const numbers = [1, 4, 6, 6, 8, 9,10,70];
// function getSecondLargestNumber(numbers) {
//   // Dùng hàm Sort đê sắp xếp mảng theo thứ tự giảm dần 
//   const sortedNumber = numbers.sort((a, b) => b - a);
//   // Lấy phần tử ở vị trí thứ 1 sau phần tử lớn nhất
//   const secondLargestNumber = sortedNumber[1];
//   return secondLargestNumber;
// }
// const secondLargestNumber = getSecondLargestNumber(numbers);
// console.log(secondLargestNumber);
 


//Viết hàm tìm số lơn nhất n trong mảng
// const number =[1,5,3,6,3,6,10];
// function getFirstLargestNumber(number) {
//   const largest = numbers[0]; // Gán số lớn nhất ban đầu là phần tử đầu tiên của mảng
//   for ( i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//       largest = numbers[i]; // Cập nhật số lớn nhất nếu tìm thấy phần tử lớn hơn
//     }
//   }
//   return largest; // Trả về số lớn nhất
// }
// const largestNumber = getFirstLargestNumber(numbers);
// console.log(largestNumber);



//Tạo một mảng các phần tử được chia thành các nhóm theo độ dài kích thước. Nếu mảng không thể chia đều thì đoạn cuối cùng sẽ là các phần tử còn lại.



// const listnumber =[1,5,4,6,7,10,13,15]
// function getSplitArrayByLength (listnumber, size) {
//   const result = [];// Mảng kết quả chứa các mảng con 
// // Duyệt qua mảng ban đầu
// if(size == 0 ){
//   return [];
// }
// if (size < 0){
//   return "Error"
// }
// for (i = 0; i < listnumber.length; i+= size) {
//   // Sử dụng slice để cắt mảng con
//  result.push(listnumber.slice(i, i + size));
//  }
//  return result;
// }
// // Gọi hàm với mảng ban đầu và độ dài mong muốn cho mảng con
// const splitNumber = getSplitArrayByLength(listnumber, 0);
// console.log(splitNumber);



  
// const students = [
//   {
//     id: 1,
//     name: "Suu",
//     age: 26,
//   },
//   {
//     id: 2,
//     name: "Tien",
//     age: 27,
//   },
//   {
//     id: 3,
//     name: "Tu",
//     age: 19,
//   },
//   {
//     id: 4,
//     name: "Huong",
//     age: 20,
//   },
//   {
//     id: 5,
//     name: "Thien",
//     age: 24,
//   },
//   {
//     id: 6,
//     name: "Sen",
//     age: 23,
//   },
//   {
//     id: 7,
//     name: "Quang",
//     age: 23,
//   },
//   {
//     id: 8,
//     name: "Luan",
//     age: 23,
//   },
// ];


// Tính số lượng {isMoreThan23: 4, isLessThan23: 1}

// const findAgeStudent = () =>{
//   const isMoreThan23 = students.filter((student) => student.age > 23);
//   // Lọc danh sách sinh viên có tuổi nhỏ hơn 23
//   const isLessThan23 = students.filter((student) => student.age < 23);
//   // Trả về một đối tượng chứa kết quả
//   return {
//     isMoreThan23: isMoreThan23.length, 
//     isLessThan23: isLessThan23.length
//   };
// }
// const result = findAgeStudent();
// console.log("isMoreThan23" + "  " +result.isMoreThan23 + "  " + "isLessThan23"+ "  " +result.isLessThan23);
 



//1. Viết hàm random thứ tự các phần tử trong mảng

// const listnumbers = [1, 2, 5, 6, 7, 9, 14, 4, 20];
// function randomArray(listnumbers) {
//   for ( i = listnumbers.length - 1; i > 0; i--) {// i = listnumbers.length - 1 nếu k trừ thì số cuối cùng sẽ undefine
//     const j = Math.floor(Math.random() * (i + 1)); // Random một chỉ số ngẫu nhiên 
//     [listnumbers[i], listnumbers[j]] = [listnumbers[j], listnumbers[i]]; // hoán đổi  hai phần tử cỉu random
//   }
//   return listnumbers;
// }
// const randomArrayResult = randomArray(listnumbers);
// console.log(randomArrayResult);


//2. Viết hàm để biến đổi mảng const array = [[0, 1], [2, 3], [4, 5]]; thành như sau: => [4, 5, 2, 3, 0, 1]
// const  arrayNumber = [[0, 4], [2, 3], [4, 5]]
//  function changeArrayNumber () {
//     const changeArrayNumberr =arrayNumber.flat()// dung hàm flat để hợp nhất cách mảng thành một mảng duy nhất., reverce để đảo ngược thứ tự lại
//     const sortedNumber = changeArrayNumberr.sort((a, b) => b - a);
//     return sortedNumber;
//  }
//  const result = changeArrayNumber();
//  console.log(result)

//3 .Viết hàm để chuyển đổi số thành chữ.
//replace tìm kiếm một giá trị hoặc một biểu thức chính quy trong một chuỗi.
// const numberList =[1, 1002]
// function changeNumberToWord(numberList) {
//   if(numberList >= 1000000000){
//     return `${numberList} => ${(numberList / 1000000000).toString()}B`;
//   }
//   if (numberList >= 1000000) {
//     return `${numberList} => ${(numberList / 1000000).toString()}M`;
//   }
//   if (numberList >= 1000) {
//     return `${numberList} => ${(numberList / 1000).toString()}K`;
//   }
//   if(numberList <1000){
//     return `${numberList} => ${numberList.toString()}`;
//   }
//   return numberList.toString();
// }
// //for of lặp qua các giá trị của một đối tượng 
// for (const number of numberList) {
//   const resultChangeNumberToWord = changeNumberToWord(number);
//   console.log(resultChangeNumberToWord);
// }
//4. cho object sau: const object = { 'a': 1, 'b': '2', 'c': 3 };Viết hàm để loại bỏ giá trị trong object theo key, ví dụ:omit(object, ['a', 'c']) => {b: '2'}

// const objectValue = { name: 'Luân', address: 'Bình Đình', age: '20 tuổi' }
// function removeValueToObject (objectValue){
//    delete objectValue['address'];//Xóa  bỏ giá trị của key 'address'
//    return objectValue;
// }
// const resultValueToObject = removeValueToObject(objectValue);
// console.log(resultValueToObject);

//Destructure array and object, rest and spread operator + Optional chaining

//lấy từng phần tử của nó sẽ dc gọi là destructure

// const student = {
//   id:1,
//   name:'Luân'
// }

// const {id, name} =student;
// console.log(id, name)

 // const [student1, student2 ] =students;
  // console.log(student1,student2)
  //Optional chaining
// student?.age 
// student.map((e)=>e?.id)

// const students = [
//     {
//       id: 1,
//       name: "Suu",
//       age: 26,
//     },
//     {
//       id: 2,
//       name: "Tien",
//       age: 27,
//     },
//     {
//       id: 3,
//       name: "Tu",
//       age: 19,
//     },
//     {
//       id: 4,
//       name: "Huong",
//       age: 20,
//     },
//     {
//       id: 5,
//       name: "An",
//       age: 24,
//     },
//     {
//       id: 6,
//       name: "Sen",
//       age: 23,
//     },
//     {
//       id: 7,
//       name: "Quang",
//       age: 23,
//     },
//     {
//       id: 8,
//       name: "Luan",
//       age: 23,
//     },
//   ];
// //Bài 6: tìm ra trong mảng students những element có tên chứa chữ a.
// //Incluce  là hàm dùng để tim kiểm sẽ trả về true nếu giá trị đó nằm trong mảng mà nó được gọi hoặc nếu nó tồn tại
// //dưới dạng chuỗi con của đối tượng chuỗi mà nó được gọi.
// function findObjectStudent (students,keyword){

// const findStudent = students.filter((student) => student.name.toUpperCase().includes(keyword.toUpperCase()));// include  nó sẽ sét điều kiện tên chứa chữ a
//   return findStudent;
// }
// const keyword = 'n'
// const result = findObjectStudent(students,keyword)
// console.log(result)









