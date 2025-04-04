import { Component } from '@angular/core';
import {
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title:string = 'Titulo de mi primera app : ';
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter +=value
  }

  reset():void{
    this.counter = 10
  }

  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  public isLoading: boolean = true;
  public capturedImage: string = '';
  public useFrontCamera = false;

  private stream: MediaStream | null = null;

  async ngAfterViewInit() {
    await this.initCamera();
  }

  ngOnDestroy(): void {
    //this.stopCamera();
  }

  async initCamera() {
    this.isLoading = true;

    const constraints: MediaStreamConstraints = {
      video: {
        width: { ideal: 640 },
        height: { ideal: 480 },
        facingMode: this.useFrontCamera ? 'user' : 'environment',
      },
    };

    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      console.log('llegan datos');

      this.stream = stream;
      this.videoRef.nativeElement.srcObject = stream;
      this.videoRef.nativeElement.play();
    })
    .catch((err) => {
      console.error('Error al acceder a la cámara:', err);
      this.isLoading = false;
    })

    // try {


    //   // this.stream = await navigator.mediaDevices.getUserMedia(constraints);
    //   // this.videoRef.nativeElement.srcObject = this.stream;
    //   // this.isLoading = false;
    // } catch (err) {
    //   console.error('No se pudo acceder a la cámara:', err);
    //   this.isLoading = false;
    // }
  }

  captureImage() {
    const video = this.videoRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);

    this.capturedImage = canvas.toDataURL('image/png');
  }

  toggleCamera() {
    this.useFrontCamera = !this.useFrontCamera;
    this.stopCamera();
    this.initCamera();
  }

  stopCamera() {
    // if (this.stream) {
    //   this.stream.getTracks().forEach((track) => track.stop());
    //   this.stream = null;
    // }
  }



}


