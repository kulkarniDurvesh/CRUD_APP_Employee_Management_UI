import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-eform',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './eform.component.html',
  styleUrl: './eform.component.css'
})
export class EFormComponent implements OnInit {
  currentStep:number=1;
  employeeForm !:FormGroup;
  submitted:boolean=false;
  isLoader:boolean = true;
  //designationList:IDesignation[]=[];
  //roleList:IRole[]=[];
  constructor(private fb:FormBuilder,private cdRef:ChangeDetectorRef){}
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      ErpEmployeeSkills: this.fb.array([this.createSkillFormGroup()]), // Initialize with one row
      ErmEmpExperiences:this.fb.array([this.createExpFormGroup()]),
      userName:new FormControl('',Validators.required),
      empCode:new FormControl('',Validators.required),
      empName:new FormControl('',Validators.required),
      empId:new FormControl('',Validators.required),
      roleId:new FormControl('',Validators.required),
      empEmailId:new FormControl('',Validators.required),
      empDesignationId:new FormControl('',Validators.required),
      empContactNo:new FormControl('',Validators.required),
      empAltContactNo:new FormControl('',Validators.required),
      empPersonalEmailId:new FormControl('',Validators.required),
      empExpTotalYear:new FormControl('',Validators.required),
      empExpTotalMonth:new FormControl('',Validators.required),
      empCity:new FormControl('',Validators.required),
      empState:new FormControl('',Validators.required),
      empPinCode:new FormControl('',Validators.required),
      empAddress:new FormControl('',Validators.required),
      empPerCity:new FormControl('',Validators.required),
      empPerState:new FormControl('',Validators.required),
      empPerPinCode:new FormControl('',Validators.required),
      empPerAddress:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
  } 

  createExpFormGroup():FormGroup{
    return this.fb.group({
      empExpId:new FormControl(0,Validators.required),
      empId:new FormControl('',Validators.required),
      companyName:new FormControl('',Validators.required),
      startDate:new FormControl('',Validators.required),
      endDate:new FormControl('',Validators.required),
      designation:new FormControl('',Validators.required),
      projectsWorkedOn:new FormControl('',Validators.required)
    })
  }
  createSkillFormGroup(): FormGroup {
    return this.fb.group({
      empSkillId: new FormControl('',Validators.required),
      empId: new FormControl('',Validators.required),
      skill: new FormControl('',Validators.required),
      totalYearExp: new FormControl('',Validators.required),
      lastVersionUsed: new FormControl('',Validators.required)
    });
  }
  get ErpEmployeeSkills():FormArray{
    return this.employeeForm.get('ErpEmployeeSkills') as FormArray;
  } 
  get ErmEmpExperiences():FormArray{
    return this.employeeForm.get('ErmEmpExperiences') as FormArray;
  }

  addEmpSkills(){
    const employeeSkillSet = new FormGroup({
      empSkillId: new FormControl('',Validators.required),
      empId:new FormControl('',Validators.required),
      skill:new FormControl('',Validators.required),
      totalYearExp:new FormControl('',Validators.required),
      lastVersionUsed:new FormControl('',Validators.required)
    })
    this.ErpEmployeeSkills.push(employeeSkillSet);
  }

  removeSkill(index:number){
    this.ErpEmployeeSkills.removeAt(index);
  }

  addEmpExp(){
    const employeeExpSet = this.createExpFormGroup();
    employeeExpSet.patchValue({ empExpId: this.ErmEmpExperiences.length }); // Assign index
    this.ErmEmpExperiences.push(employeeExpSet);
  }
  removeExp(index:number){
    this.ErmEmpExperiences.removeAt(index);
  }


  previousClick(){
    if(this.currentStep>1){
      this.currentStep--;
    }
  }

  nextClick(){
    if(this.currentStep<3){
      this.currentStep++;
    }
  }

  submitForm(){
    this.submitted = true;
    debugger;
    if(this.employeeForm.valid){
      // this.clientService.addEmployee(this.employeeForm.value).subscribe((res)=>{
      //   debugger; 
      //   if(res.result){
      //     this.isLoader = false;
      //     alert("added successfully");
      //     this.employeeForm.reset();
      //    }else{
      //     this.isLoader = false;
      //     alert("addition failed");
      //     //this.employeeForm.reset();
      //    }
      // })
      
    }
  }
}
