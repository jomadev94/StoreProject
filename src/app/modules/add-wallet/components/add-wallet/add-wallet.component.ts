import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '@services/auth/auth.service';
import { UserService } from '@services/user/user.service';
import { DATA_OVREF } from '@static/data';
import { Globals } from '@static/globals';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss'],
})
export class AddWalletComponent implements OnInit, OnDestroy {
  walletForm: FormGroup;
  addMoneySub$: Subscription;
  wformSub$: Subscription;
  error: boolean = true;
  messages: string[] = [];

  constructor(
    @Inject(DATA_OVREF) public ovRef: OverlayRef,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.walletForm = formBuilder.group({
      wallet: [
        100,
        [Validators.required, Validators.min(100), Validators.max(1000000)],
      ],
    });
    this.wformSub$ = this.walletForm.valueChanges.subscribe(() => {
      this.messages = [];
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.addMoneySub$.unsubscribe();
    this.wformSub$.unsubscribe();
  }

  resetMessage(){
    setTimeout(()=>{
      this.messages=[];
    },6000)
  }

  addMoney() {
    this.addMoneySub$ = this.userService
      .addMoney(this.walletForm.get('wallet')?.value)
      .subscribe((res) => {
        if (res.success) {
          this.error = false;
          this.messages.push(`Su saldo actual es de $${res.data}.`);
          this.authService.updateWallet(res.data);
        } else {
          this.error = true;
          this.messages = res.errorMessage;
        }
        this.resetMessage();
      });
  }
}
