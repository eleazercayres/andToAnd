import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CampaignService } from '../campaign.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-financed',
  templateUrl: './financed.component.html',
  styleUrls: ['./financed.component.css']
})
export class FinancedComponent implements OnInit {

    angForm: FormGroup;
    campaigns = null;
    campaignDeadLines = null;
    rdChecked: number
    consolidate: null;
    campaignsShow = false;
    campaignsDeadLineShow = false;
    consolidateId: null;
  

  constructor(private route: ActivatedRoute, private router: Router, 
    private fb: FormBuilder, private campaignService: CampaignService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      FinancedValue: ['', Validators.required ]
    });
  }

  financedValue(FinancedValue) {
    if (FinancedValue) {
      console.log(FinancedValue);
    }
    this.financedValue = FinancedValue;
    //logica para validacao de campanha
    this.campaignService.get(FinancedValue).subscribe(getCampaigns => {
      this.campaigns = getCampaigns.canpaign;
      this.campaignsShow = true;
      console.log(this.campaigns);
    });
  }

  onRadioItemChange(value){
    this.rdChecked = value.target.value; 
    console.log(value.target.value);
  }

  campaignChecked(){
    this.campaignService.getCampaignDeadLine(this.rdChecked).subscribe(getCampaignDeadLines => {
      this.campaignDeadLines = getCampaignDeadLines.campaignDeadlines;
      this.campaignsDeadLineShow = true;
      this.campaignsShow = false;
      console.log(this.campaignDeadLines);
    });
  }

  setConsolidate(consolidateId){
    this.consolidateId = consolidateId;
  }

  consolidateFinanced(){
    this.campaignService.consolidateFinanced(this.consolidateId, this.rdChecked, this.financedValue).subscribe(resultConsolidate => {
      this.consolidate = resultConsolidate;
      console.log(this.consolidate);
    });
  }

  ngOnInit() {
    
  }

}
