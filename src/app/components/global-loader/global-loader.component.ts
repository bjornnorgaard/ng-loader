import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalLoaderService } from 'src/app/services/global-loader/global-loader.service';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.scss']
})
export class GlobalLoaderComponent implements OnInit, OnDestroy {

  public loading = false;
  public loadingSubscription: Subscription;

  constructor(private loaderService: GlobalLoaderService) { }

  ngOnInit() {
    this.loadingSubscription = this.loaderService.loadingStatus.subscribe((value: boolean) => {
      if (!value) {
        setTimeout(() => this.loading = value, 500);
      }
      else {
        this.loading = value;
      }
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
