// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-client',
//   standalone: true,
//   imports: [FormsModule,CommonModule],
//   templateUrl: './client.component.html',
//   styleUrl: './client.component.css'
// })
// export class ClientComponent implements OnInit {
//   // ClientList:IClient[]=[];
//   isLoader:boolean = true;
//   currentdate:Date = new Date();
//   clientObj:Client = new Client();
//   clientList:Client[] = [];

//   employeeList:IEmployee[] =[];
  
//   userList$:Observable<any> = new Observable<any>;

//   constructor() { }

//   clientService = inject (ClientService)
  
//   ngOnInit(): void {
//       this.loadClientList();
//       this.userList$= this.clientService.getAllUser()
//   }

//   loadClientList(){
//     this.clientService.getAllClients().subscribe((res)=>{
//       // this.ClientList = res.data;
//       this.clientList = res.data;
//       this.isLoader = false;
//     },error=>{
//       this.isLoader = false;
//       alert("Api Response failed");
//     });
//   }

//   loadAllEmployees(){
//     this.clientService.getAllEmployees().subscribe((res)=>{
//       this.employeeList = res.data;
//       this.isLoader = false;
//     },error=>{
//       alert("Api Response failed");
//       this.isLoader = false;
//       console.log(error);
//     });
//   }
  
  
//   onSaveClient(){
//     this.clientService.addUpdate(this.clientObj).subscribe((res)=>{
//       if(res.result){
//         alert("Client Added Successfully");
//         this.loadClientList();
//         this.clientObj = new Client();
//       }else{
//         alert("Client Added Failed");
//       }
//     },error=>{
//       alert("Api Response failed");
//     })
//   }

//   // event emitter data string
  
//   // onSaveClient(data:string){
//   //   this.clientService.addUpdate(this.clientObj).subscribe((res)=>{
//   //     if(res.result){
//   //       alert("Client Added Successfully");
//   //       this.loadClientList();
//   //       this.clientObj = new Client();
//   //     }else{
//   //       alert("Client Added Failed");
//   //     }
//   //   },error=>{
//   //     alert("Api Response failed");
//   //   })
//   // }

//   onEdit(obj:Client){
//     this.clientObj = obj;
//   }

//   onDelete(id:number){
//     const confirmDelete = confirm("Are you sure you want to delete this client?");
//     if(confirmDelete){
//       this.clientService.deleteClientById(id).subscribe((res)=>{
//         if(res.result){
//           alert("Client Deleted Successfully");
//           this.loadClientList();
//         }else{
//           alert("Client Deleted Failed");
//         }
//       },error=>{
//         alert("Api Response failed");
//       })
//     }
    
//   }

//   onReset(){
//     this.clientObj = new Client();
//   }

// }
