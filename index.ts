// type abc = {
//     name: string,
//     age: number
// }

// const Luan: abc ={
//     name: 'luan',
//     age: 20
// }

// console.log(Luan);
// định nghĩa type cho object
// type Student = {
//     id: number,
//     name: string,
//     age?: number
//   };
  
//   const students: Student[] = [
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
//       name: "An",
//       age: 24,
//     },
//     {
//       id: 5,
//       name: "Thien",
//       age: 24,
//     },
//     {
//       id: 6,
//       name: "Han",
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
//       age: 24,
//     },
//   ];

//   const findAndRemoveKey = (students: Student[], keyCanTim: keyof Student, giaTriCanTim: any, keyCanXoa: keyof Student) => {
//     // Tìm vị trí của đối tượng trong mảng có thuộc tính keyCanTim bằng giá trị giaTriCanTim
//     const viTriTimThay = students.findIndex(item => item[keyCanTim] === giaTriCanTim);
//     // Nếu tìm thấy đối tượng
//     if (viTriTimThay !== -1) {
//       // Xóa keyCanXoa khỏi đối tượng tìm thấy
//       delete students[viTriTimThay][keyCanXoa];
//     }
//   };
//   // Gọi hàm để tìm đối tượng, xóa một key và hiển thị mảng sau khi được sửa đổi
//   findAndRemoveKey(students, 'age', 26, 'age');
//   console.log(students);
  

// // Viết hàm tìm  những  student có tuổi lên hơn 23 và tên có chữ a

// const findObjectStudent = (students: Student[], name?:string, age?:number) =>{
//     const findStudent = students.filter((student) => student.name.toUpperCase().includes(keyword.toUpperCase()) && 
//     student.age! > 23)//! nó ep cho nó có giá trị 
//     return findStudent;
// }
// const keyword ='a'
// const result = findObjectStudent(students,keyword)
// console.log(result)

// Gọi api
const getCallAPI = async()=>{
    try {
      const result = await  fetch('https://rise.api-uat.kindicare.com/api/v1/client/app/config');
      const json = await result.json();
      console.log(json);
    } catch (error) {
      console.log('Error');
    }
  }
  
  getCallAPI ();

  type CallAPI = {
    companyType:{
        id: string,
        createdAt:Date,
        updatedAt:Date,
        name: string
    },
    NQSRType:{

        id: string,
        createdAt: Date,
        updatedAt: Date,
        name:string,
        image: string,
        isActive: boolean,
        title: string,
        description: string,
        sortOrder:number ,
        color: string
    },
    AppSetting:{
        id:string,
        createdAt: Date,
        updatedAt: Date,
        key:string,
        value: string
        isCustomisable: boolean,
        isActive: boolean,
        data: null,
        name: null,
        description: null,
        lastValue: null
    },
    FeatureCentre:{
        id: string,
        createdAt: Date,
        updatedAt: Date,
        name:string,
        icon: {
            key: string,
            url: string
        },
        description: null,
        isActive: boolean,
        categoryId: string
    },
    ServiceType:{
        id:string,
        createdAt: Date,
        updatedAt: Date,
        externalId: string,
        name: string,
        icon: {
            url: string
        },
        description: null,
        isActive: boolean,
        sortOrder: number,
        weekPerYear: number,
        hourlyFeeCap: number,
        isShow: true,
        primaryChildCareServiceId: string
    },
    EnquiryType:{
        id: string,
        createdAt: Date,
        updatedAt: Date,
        name: string,
        description: null,
        color: string
    },
    serviceAgeGroup:{
        id: string,
        createdAt:Date,
        updatedAt: Date,
        name: string,
        type: string,
        order: number,
        isActive: boolean,
        textColor: string,
        backgroundColor: string,
        logo: string
    },
    documentType:{
        id: string,
        createdAt: Date,
        updatedAt: Date,
        name: string
    },
    CRMPackage:{
        
            id: string,
            createdAt:Date,
            updatedAt:Date,
            name:string,
            quantity: number,
            unit: Date,
            price: number,
            currency: string,
            isActive: boolean,
            description:string,
            priceId: null,
            rank: number,
            businessFeaturesCentreLevel: {
                reports: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                contacts: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                settings: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                dashboard: {
                    id: string,
                    name: string,
                    isEdit: null,
                    isView: boolean,
                    controller: string
                },
                enquiries: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                marketing: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                myCentres: {
                    id: string
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string,
                    isEditInfo: boolean
                },
                applications: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                replyReviews: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: null,
                    controller: string
                },
                transactions: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                leadActivities: {
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                limitEnquiries: {
                    id:string,
                    name: string,
                    value: number,
                    controller: string
                },
                visitsAndTour: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                customiseButtons: {
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                automatedResponses: {
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                abilityOptMarketing: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                centreListingStrength: {
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller:string
                }
            },
            businessFeaturesMultiCentreLevel: {
                reports: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller:string
                },
                contacts: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                settings: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller:string
                },
                dashboard: {
                    id: string,
                    name: string,
                    isEdit: null,
                    isView: boolean,
                    controller: string
                },
                enquiries: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                marketing: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                myCentres: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string,
                    isEditInfo: boolean
                },
                applications: {
                    id:string,
                    name:string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                replyReviews: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: null,
                    controller: string
                },
                transactions: {
                    id:string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                leadActivities: {
                    name:string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                limitEnquiries: {
                    id: string,
                    name: string,
                    value: number,
                    controller: string
                },
                visitsAndTours: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                customiseButtons: {
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                automatedResponses: {
                    name: string,
                    isEdit: boolean,
                    isView:  boolean,
                    controller: string
                },
                abilityOptMarketing: {
                    id: string,
                    name: string,
                    isEdit: boolean,
                    isView: boolean,
                    controller: string
                },
                centreListingStrength: {
                    name: string,
                    isEdit:boolean,
                    isView: boolean,
                    controller: string
                }
            },
            planId: null,
            signupButtonText: string,
            trialPeriodDays: number,
            color: string
        },
        role:{
            
        }
    }
  
  
  
 