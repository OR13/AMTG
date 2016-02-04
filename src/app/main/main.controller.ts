import { WebDevTecService, ITecThing } from '../components/webDevTec/webDevTec.service';

export class MainController {
  public awesomeThings: ITecThing[];
  public webDevTec: WebDevTecService;
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;

  /* @ngInject */
  constructor ($timeout: angular.ITimeoutService, webDevTec: WebDevTecService, toastr: any) {
    this.awesomeThings = new Array();
    this.webDevTec = webDevTec;
    this.classAnimation = '';
    this.creationDate = 1451953210196;
    this.toastr = toastr;
    this.activate($timeout);
  }

  /** @ngInject */
  public activate = ($timeout: angular.ITimeoutService) => {
    this.getWebDevTec();

    $timeout( () => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  };

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/OR13/AMTG" target="_blank"><b>Angular Material TypeScript Gulp</b></a>');
    this.classAnimation = '';
  }

  getWebDevTec() {
    this.awesomeThings = this.webDevTec.tec;
  }
}
