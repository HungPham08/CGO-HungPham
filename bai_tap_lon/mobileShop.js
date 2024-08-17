class Phone{
    constructor(code,name,price,color,ram,rom,quantity,img,features) {
        this.code=code;
        this.name=name;
        this.price=price;
        this.color=color;
        this.ram=ram;
        this.rom=rom;
        this.quantity=quantity;
        this.img=img;
        this.features=features;

    }
    getCode(){
        return this.code;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return  this.price;
    }
    getColor(){
        return this.color;
    }
    getRam(){
        return this.ram;
    }
    getRom(){
        return this.rom;
    }
    getQuantity(){
        return this.quantity;
    }
    getImg(){
        return this.img;
    }
    getFeatures(){
        return this.features;
    }


}
let arrPhones = [
    new Phone("ip12", "Iphone 12", "16000000", "Đen", "4gb", "256gb","6","img/iphone12.jpg",""),
    new Phone("ip13", "Iphone 13", "20000000", "Trang", "8gb", "256gb","5","img/iphone13.jpg",""),
    new Phone("ip14", "Iphone 14", "30000000", "Tím", "8gb", "520gb","3","img/iphone14.jpg","Điểm ấn tượng nhất trên iPhone năm nay nằm ở thiết kế màn hình, có thể dễ dàng nhận thấy được là hãng cũng đã loại bỏ cụm tai thỏ truyền thống qua bao đời iPhone bằng một hình dáng mới vô cùng lạ mắt."),
    new Phone("ip15", "Iphone 15", "36000000", "Đen", "8gb", "520gb","15","img/iphone15.jpg","Điểm khác biệt lớn nhất giữa iPhone 15 và thế hệ tiền nhiệm là ở kiểu màn hình “Dynamic Island” - kiểu thiết kế mới thay thế cho màn hình “tai thỏ” trước đây. Kiểu thiết kế này mang lại vẻ ngoài mới mẻ, thu hút và dễ chịu hơn cho màn hình thiết bị."),
    new Phone("ip12", "Iphone 12", "16000000", "Vang", "8gb", "560gb","2","img/iphone12.jpg","")
];

displayPhone(arrPhones);
function displayPhone(arr){
    let str = "";
    for(let i=0; i<arr.length; i++){
        str +=
            `<tr>
                <td>${arr[i].getCode()}</td>
                <td>${arr[i].getName()}</td>
                <td>${arr[i].getPrice()}</td>
                <td>${arr[i].getColor()}</td>
                <td>${arr[i].getRam()}</td>
                <td>${arr[i].getRom()}</td>
                <td>${arr[i].getQuantity()}</td>
                <td><img width="50" height="50"  src="${arr[i].getImg()}" alt="" ></td>
                <td>${arr[i].getFeatures()}</td>
                <td><button class='btn btn-success' onclick='showUpdate(${i})'>Sửa</button></td> 
                <td><button class='btn btn-danger' onclick='deletePhone(${i})'>Xóa</button></td>   
            </tr>`;
    }
    document.getElementById("displayProduct").innerHTML = str;
    document.getElementById("total").innerText = arr.length;
    document.getElementById('button').innerHTML="<button onclick='addNewPhone()' class='btn btn-primary'>Thêm mới </button>"
}

function addNewPhone() {
    let code = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let color = document.getElementById("color").value;
    let ram = document.getElementById("ram").value;
    let rom = document.getElementById("rom").value;
    let quantity = document.getElementById("quantity").value;
    let image = document.getElementById("img").value;
    let features = document.getElementById("features").value;

    if (code.length!==0 && name.length!==0 && price.length!==0 && color.length!==0 && image.length!==0 ) {
        let img="img/"+image.replace('C:\\fakepath\\', '');
        let newPhone = new Phone(code, name, price, color, ram, rom,quantity,img,features);
        console.log(newPhone.getImg());
        arrPhones.push(newPhone);

        document.getElementById("code").value = "";
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("color").value = "";
        document.getElementById("ram").value = "";
        document.getElementById("rom").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("img").value = "";
        document.getElementById("features").value = "";
        alert("Thêm thành công!");
        displayPhone(arrPhones);
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}
function deletePhone(i){
    let check = confirm(`Bạn có chắc chắn muốn xóa ${arrPhones[i].getName()}?`);
    if (check) {
        arrPhones.splice(i, 1);
        alert("Xóa thành công!");
        displayPhone(arrPhones);
    }
}
function showUpdate(i) {
    document.getElementById("code").value = arrPhones[i].getCode();
    document.getElementById("name").value = arrPhones[i].getName();
    document.getElementById("price").value = arrPhones[i].getPrice();
    document.getElementById("color").value = arrPhones[i].getColor();
    document.getElementById("ram").value = arrPhones[i].getRam();
    document.getElementById("rom").value = arrPhones[i].getRom();
    document.getElementById("img").innerText = arrPhones[i].getImg();
    document.getElementById("features").value = arrPhones[i].getFeatures();
    document.getElementById("quantity").value = arrPhones[i].getQuantity();
    document.getElementById('button').innerHTML ="<button onclick='updatePhone(" + i + ")' class='btn btn-primary'>Cập Nhật </button>";

}

function updatePhone(i) {
    let code = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let color = document.getElementById("color").value;
    let ram = document.getElementById("ram").value;
    let rom = document.getElementById("rom").value;
    let quantity = document.getElementById("quantity").value;
    let image = document.getElementById("img").value;
    let features = document.getElementById("features").value;
    arrPhones[i].code = code;
    arrPhones[i].name = name;
    arrPhones[i].price = price;
    arrPhones[i].color = color;
    arrPhones[i].ram = ram;
    arrPhones[i].rom = rom;
    arrPhones[i].quantity = quantity;
    arrPhones[i].image = image;
    arrPhones[i].features = features;
    alert("Cập nhật sách thành công");
    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("color").value = "";
    document.getElementById("ram").value = "";
    document.getElementById("rom").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("img").value = "";
    document.getElementById("features").value = "";
    displayPhone(arrPhones);
}
