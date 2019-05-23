import {Directive, HostListener, Renderer2, ElementRef, EventEmitter, Output} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {switchMap, takeUntil, take, filter, throttleTime, tap} from 'rxjs/operators';

@Directive({
  selector: '[appPushDelete]'
})
export class PushDeleteDirective {
  @Output() delete = new EventEmitter();

  pushStart$ = new Subject();
  pushOver$ = new Subject();


  constructor(private el: ElementRef,
              private rd2: Renderer2) {

  }


  @HostListener('mousedown')
  @HostListener('touchstart')
  @HostListener('keydown')
  pushStart() {
    this.pushStart$.pipe(
      tap(
        () => {
          this.rd2.addClass(this.el.nativeElement, 'vibrate-1');
        }
      ),
      switchMap(() => interval(1000)),
      tap(time => console.log(time)),
      // takeUntil(this.pushOver$),
      // filter(time => time),
      take(1)
    ).subscribe(
      () => {
        console.log('done');
        this.rd2.removeClass(this.el.nativeElement, 'vibrate-1');
        // this.rd2.setStyle(this.el.nativeElement, 'display', 'none');  // 隐藏位置消失
        // this.rd2.setStyle(this.el.nativeElement, 'visibility', 'hidden'); // 隐藏位置不消失
        const node = this.rd2.parentNode(this.el.nativeElement); // 删除节点
        this.rd2.removeChild(node, this.el.nativeElement);
        this.delete.emit('done');  // 输出
      }
    );
    this.pushStart$.next('start');
    console.log('start');
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  @HostListener('touchend')
  pushOver() {
    // this.pushStart$.next('start');
    console.log('over');
    this.pushOver$.next('over');
    this.rd2.removeClass(this.el.nativeElement, 'vibrate-1');

  }

}
