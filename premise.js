//Promise 
// từ lúc chưa có promise thì call back
// /
   // 3 trạng thái của promise
  //panđing đang chờ trạng thái thành công hay thất bại hiện tượng này cỉu như sẽ rò rỉ bộ nhớ
  //fullfilled trạng thái thành công. 
  // Rejejected lọt vào trnagj reject
  // đều nhận được một function khi nào sẽ được thưc thi
  // khi tk promise nếu resolve được gọi thì call back  .then(sẽ được gọi
  //khi resolve thành công thì .then sẽ được thực thi nhưng theo tính chất chuỗi , chuỗi nói nhau từ trên xuống dưới
  
  // reject được thì call back .catch sẽ được gọi
  //khi một trong hai được gọi thì call back finally được gọi
  //promise được hiểu là sẽ giải quyết một vấn đề bất đồng bộ trong lâp trình
 
  
  // cách trả dữ liệu
  
  
  // Khái niệm bấc đồng bộ là đề cập đến tính chất của một đối tượng, mà sau khi được tạo ra, nó không thể thay đổi được, 
  //bạn tạo một biến và gán giá trị cho nó từ một trong các kiểu dữ liệu này, giá trị của biến đó không thể thay đổi.
  
// Một function trong function được gọi callback()
//Promise channig là một chuối promise
// sẽ lấy promise trước đó trả ra
//promist luôn luôn là promise trả về number
// promise all chức năng của nó sẽ nhiều promise cùng một lúc
// nó sẽ gọn hơn
//fetch cũng là một promise
  //async/await

//   import fetch from 'node-fetch';

  const getApi = async()=>{
    try {
      const result = await  fetch('https://63a5721a318b23efa793a770.mockapi.io/api/users');
      const json = await result.json();
      console.log(json);
    } catch (error) {
      console.log('Error');
    }
  }
  
  getApi();
  